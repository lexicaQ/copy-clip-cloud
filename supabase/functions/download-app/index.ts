
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.7.1'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get('SUPABASE_URL');
    const supabaseServiceRoleKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');
    
    if (!supabaseUrl || !supabaseServiceRoleKey) {
      return new Response(
        JSON.stringify({ error: 'Server configuration error' }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 500 }
      );
    }
    
    // Create a Supabase client with the service role key (bypasses RLS)
    const supabase = createClient(supabaseUrl, supabaseServiceRoleKey);
    
    console.log("Fetching latest app file");
    
    // Get list of files in the app_files bucket, sorted by created_at descending
    const { data: files, error: listError } = await supabase
      .storage
      .from('app_files')
      .list();
    
    if (listError) {
      console.error("Error listing files:", listError);
      return new Response(
        JSON.stringify({ error: `Failed to list files: ${listError.message}` }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 500 }
      );
    }
    
    if (!files || files.length === 0) {
      return new Response(
        JSON.stringify({ error: 'No files available for download' }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 404 }
      );
    }
    
    // Sort files by created_at timestamp (newest first)
    const sortedFiles = [...files].sort((a, b) => {
      return new Date(b.created_at || 0).getTime() - new Date(a.created_at || 0).getTime();
    });
    
    const latestFile = sortedFiles[0];
    console.log("Latest file:", latestFile);
    
    // Get file path
    const filePath = latestFile.name;
    
    // Parse version from filename if possible (format: CopyClipCloud_X.Y.Z.ext)
    let version = '1.0.0'; // Default version
    const versionMatch = filePath.match(/(\d+\.\d+\.\d+)/);
    if (versionMatch) {
      version = versionMatch[1];
    }
    
    // Create a signed URL for downloading
    const { data: urlData, error: urlError } = await supabase
      .storage
      .from('app_files')
      .createSignedUrl(filePath, 60 * 60 * 24); // 24 hours expiry
      
    if (urlError) {
      console.error("Error creating signed URL:", urlError);
      return new Response(
        JSON.stringify({ error: `Failed to create download URL: ${urlError.message}` }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 500 }
      );
    }
    
    // Try to increment download count
    try {
      await supabase.rpc('increment_download_count', { version_param: version });
      console.log(`Incremented download count for version ${version}`);
    } catch (countError) {
      console.error("Error incrementing download count:", countError);
      // Continue even if this fails
    }
    
    return new Response(
      JSON.stringify({
        fileName: filePath,
        fileSize: latestFile.metadata?.size || 0,
        version: version,
        downloadUrl: urlData.signedUrl
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 200 }
    );
    
  } catch (error) {
    console.error("Unexpected error:", error);
    return new Response(
      JSON.stringify({ error: 'An unexpected error occurred' }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 500 }
    );
  }
});
