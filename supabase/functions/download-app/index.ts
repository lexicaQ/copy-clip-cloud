
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

    // First, try to get files directly from storage bucket
    console.log("Fetching files from app_files bucket");
    const { data: files, error: storageError } = await supabase
      .storage
      .from('app_files')
      .list();

    if (storageError) {
      console.error("Error listing files from storage:", storageError);
      
      // Fall back to app_versions table if storage fails
      console.log("Fetching from app_versions table as fallback");
      const { data: versionData, error: versionError } = await supabase
        .from('app_versions')
        .select('*')
        .order('version', { ascending: false })
        .limit(1);

      if (versionError) {
        console.error('Error fetching latest version:', versionError);
        return new Response(
          JSON.stringify({ error: 'Failed to fetch latest version', details: versionError }),
          { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 500 }
        );
      }

      if (!versionData || versionData.length === 0) {
        console.error('No app versions found in app_versions table');
        return new Response(
          JSON.stringify({ error: 'No app versions available' }),
          { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 404 }
        );
      }

      const latestVersion = versionData[0];
      console.log(`Found latest version: ${latestVersion.version}`);
      
      // Generate signed URL
      const { data: signedURL, error: signedURLError } = await supabase
        .storage
        .from('app_files')
        .createSignedUrl(latestVersion.file_path, 60);

      if (signedURLError) {
        console.error('Error creating signed URL:', signedURLError);
        return new Response(
          JSON.stringify({ error: 'Failed to generate download URL', details: signedURLError }),
          { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 500 }
        );
      }

      console.log('Download URL generated successfully for version record');
      return new Response(
        JSON.stringify({ 
          downloadUrl: signedURL.signedUrl,
          version: latestVersion.version,
          fileName: latestVersion.filename
        }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 200 }
      );
    }

    // If we found files in storage bucket, use the most recent one
    if (!files || files.length === 0) {
      console.error('No files found in storage bucket');
      return new Response(
        JSON.stringify({ error: 'No files available for download' }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 404 }
      );
    }

    // Sort files to get the latest version based on filename
    console.log(`Found ${files.length} files in storage`);
    const sortedFiles = files.sort((a, b) => b.name.localeCompare(a.name));
    const latestFile = sortedFiles[0];
    console.log(`Using latest file: ${latestFile.name}`);
    
    // Create signed URL for direct download
    const { data: signedURL, error: signedURLError } = await supabase
      .storage
      .from('app_files')
      .createSignedUrl(latestFile.name, 60);

    if (signedURLError) {
      console.error('Error creating signed URL for file:', signedURLError);
      return new Response(
        JSON.stringify({ error: 'Failed to generate download URL', details: signedURLError }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 500 }
      );
    }

    // Extract version from filename if possible (format: CopyClipCloud_X.Y.Z.zip)
    let version = '';
    const versionMatch = latestFile.name.match(/(\d+\.\d+\.\d+)/);
    if (versionMatch) {
      version = versionMatch[1];
    }

    console.log(`Download URL generated successfully for file: ${latestFile.name}`);
    return new Response(
      JSON.stringify({ 
        downloadUrl: signedURL.signedUrl,
        version: version,
        fileName: latestFile.name
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
