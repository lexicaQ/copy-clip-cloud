
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
    // Parse the request body if present
    let requestedFileName;
    try {
      const body = await req.json();
      requestedFileName = body.fileName;
      console.log("Request for specific file:", requestedFileName);
    } catch (e) {
      console.log("No specific file requested in body");
    }

    // Verify Supabase environment variables are set
    const supabaseUrl = Deno.env.get('SUPABASE_URL');
    const supabaseServiceRoleKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');
    
    if (!supabaseUrl || !supabaseServiceRoleKey) {
      console.error("Missing required environment variables");
      return new Response(
        JSON.stringify({ 
          error: 'Server configuration error',
          message: 'Missing Supabase environment variables'
        }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 500 }
      );
    }

    console.log("Creating Supabase client");
    const supabase = createClient(supabaseUrl, supabaseServiceRoleKey);

    // First, check for files in the app_files bucket 
    console.log("Checking app_files bucket for downloadable files");
    const { data: files, error: storageError } = await supabase
      .storage
      .from('app_files')
      .list();

    console.log("Storage bucket response:", { files, error: storageError });

    if (storageError || !files || files.length === 0) {
      console.log("No files found in app_files bucket or error:", storageError);
      return new Response(
        JSON.stringify({ 
          error: 'No application files available for download',
          details: storageError || 'No records found',
          message: 'No files found in the app_files bucket. Please upload files to the bucket.'
        }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 404 }
      );
    }

    // We found files in the app_files bucket
    console.log(`Found ${files.length} files in storage:`, files.map(f => f.name).join(', '));
    
    // Find the requested file, or choose an appropriate one
    let fileToDownload;
    
    if (requestedFileName) {
      fileToDownload = files.find(file => file.name === requestedFileName);
      if (!fileToDownload) {
        console.log(`Requested file "${requestedFileName}" not found, will select another`);
      }
    }
    
    if (!fileToDownload) {
      // Find a file with .zip, .dmg, or .exe extension, or use the first file
      fileToDownload = files.find(file => 
        file.name.endsWith('.zip') || 
        file.name.endsWith('.dmg') || 
        file.name.endsWith('.exe') || 
        file.name.endsWith('.pkg')
      );
      
      // If no specific file type is found, use the first file
      if (!fileToDownload) {
        console.log("No .zip/.dmg/.exe file found, using first available file");
        fileToDownload = files[0];
      }
    }
    
    if (!fileToDownload) {
      return new Response(
        JSON.stringify({ 
          error: 'No suitable file found for download',
          message: 'Could not find an appropriate file to download'
        }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 404 }
      );
    }
    
    console.log(`Using file for download: ${fileToDownload.name}`);
    
    // Get public URL for the file
    const { data: publicURL } = supabase
      .storage
      .from('app_files')
      .getPublicUrl(fileToDownload.name);

    if (!publicURL || !publicURL.publicUrl) {
      console.error('Failed to generate public URL for file');
      return new Response(
        JSON.stringify({ 
          error: 'Failed to generate download URL',
          message: 'Could not create a public URL for the file'
        }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 500 }
      );
    }

    // Extract version from filename if possible (format: CopyClipCloud_X.Y.Z.zip)
    let version = '1.0.0'; // Default version
    const versionMatch = fileToDownload.name.match(/(\d+\.\d+\.\d+)/);
    if (versionMatch) {
      version = versionMatch[1];
    }

    // Increment download count using the function
    try {
      const { error: incrementError } = await supabase.rpc('increment_download_count', {
        version_param: version
      });
      
      if (incrementError) {
        console.error("Error incrementing download count:", incrementError);
      } else {
        console.log(`Successfully incremented download count for version ${version}`);
      }
    } catch (countError) {
      console.error("Error calling increment function:", countError);
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
        stack: error.stack,
        message: 'Server error while generating download URL'
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 500 }
    );
  }
});
