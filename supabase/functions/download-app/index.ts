
// Follow Deno deploy documentation
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.7.1'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  console.log("Download app function called");
  
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    console.log("Handling CORS preflight request");
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log("Creating Supabase client");
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    // First, check for files in the app_files bucket 
    console.log("Checking app_files bucket for downloadable files");
    const { data: files, error: storageError } = await supabase
      .storage
      .from('app_files')
      .list();

    if (storageError || !files || files.length === 0) {
      console.log("No files found in app_files bucket or error:", storageError);
      console.log("Checking app_versions table as fallback");
      
      // Fall back to app_versions table
      const { data: versionData, error: versionError } = await supabase
        .from('app_versions')
        .select('*')
        .order('version', { ascending: false })
        .limit(1);

      if (versionError || !versionData || versionData.length === 0) {
        console.error("No app versions found in database:", versionError);
        return new Response(
          JSON.stringify({ 
            error: 'No application files available for download',
            details: versionError || 'No records found'
          }),
          { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 404 }
        );
      }

      const latestVersion = versionData[0];
      console.log(`Found latest version in database: ${latestVersion.version}`);
      
      // Generate public URL - this is more reliable than signed URLs
      const { data: publicURL, error: publicURLError } = await supabase
        .storage
        .from('app_files')
        .getPublicUrl(latestVersion.file_path);

      if (publicURLError || !publicURL) {
        console.error('Error creating public URL:', publicURLError);
        return new Response(
          JSON.stringify({ error: 'Failed to generate download URL', details: publicURLError }),
          { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 500 }
        );
      }

      console.log('Download URL generated successfully for version record');
      return new Response(
        JSON.stringify({ 
          downloadUrl: publicURL.publicUrl,
          version: latestVersion.version,
          fileName: latestVersion.filename
        }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 200 }
      );
    }

    // We found files in the app_files bucket
    console.log(`Found ${files.length} files in storage`);
    
    // Find a file with .zip or .dmg extension, or use the first file
    let fileToDownload = files.find(file => 
      file.name.endsWith('.zip') || file.name.endsWith('.dmg')
    ) || files[0];
    
    console.log(`Using file for download: ${fileToDownload.name}`);
    
    // Get public URL for the file
    const { data: publicURL, error: publicURLError } = await supabase
      .storage
      .from('app_files')
      .getPublicUrl(fileToDownload.name);

    if (publicURLError || !publicURL) {
      console.error('Error creating public URL for file:', publicURLError);
      return new Response(
        JSON.stringify({ error: 'Failed to generate download URL', details: publicURLError }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 500 }
      );
    }

    // Extract version from filename if possible (format: CopyClipCloud_X.Y.Z.zip)
    let version = '';
    const versionMatch = fileToDownload.name.match(/(\d+\.\d+\.\d+)/);
    if (versionMatch) {
      version = versionMatch[1];
    }

    console.log(`Download URL generated successfully for file: ${fileToDownload.name}`);
    return new Response(
      JSON.stringify({ 
        downloadUrl: publicURL.publicUrl,
        version: version,
        fileName: fileToDownload.name
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 200 }
    );

  } catch (error) {
    console.error('Unexpected error in download-app function:', error);
    return new Response(
      JSON.stringify({ 
        error: 'An unexpected error occurred', 
        details: error.message,
        stack: error.stack
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 500 }
    );
  }
});
