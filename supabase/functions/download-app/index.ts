
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
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    console.log("Fetching latest app version from app_versions table");
    
    // Get the latest app version from the app_versions table
    const { data: versionData, error: versionError } = await supabase
      .from('app_versions')
      .select('*')
      .order('version', { ascending: false })
      .limit(1)

    if (versionError) {
      console.error('Error fetching latest version:', versionError);
      return new Response(
        JSON.stringify({ error: 'Failed to fetch latest version', details: versionError }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 500 }
      )
    }

    // If no versions exist in the table or no data is returned
    if (!versionData || versionData.length === 0) {
      console.log('No app versions found, using fallback file');
      
      // Use a fallback file from the app_files bucket
      const { data: signedURL, error: signedURLError } = await supabase
        .storage
        .from('app_files')
        .createSignedUrl('CopyClipCloud_1.0.0.zip', 60) // URL valid for 60 seconds
      
      if (signedURLError) {
        console.error('Error creating signed URL for fallback file:', signedURLError);
        return new Response(
          JSON.stringify({ error: 'Failed to generate download URL', details: signedURLError }),
          { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 500 }
        )
      }
      
      return new Response(
        JSON.stringify({ 
          downloadUrl: signedURL.signedUrl,
          version: '1.0.0',
          fileName: 'CopyClipCloud_1.0.0.zip'
        }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 200 }
      )
    }

    const latestVersion = versionData[0];
    console.log('Latest version found:', latestVersion.version);
    
    // Get the download URL for the file
    const { data: signedURL, error: signedURLError } = await supabase
      .storage
      .from('app_files')
      .createSignedUrl(latestVersion.file_path, 60) // URL valid for 60 seconds

    if (signedURLError) {
      console.error('Error creating signed URL:', signedURLError);
      return new Response(
        JSON.stringify({ error: 'Failed to generate download URL', details: signedURLError }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 500 }
      )
    }

    console.log('Download URL generated successfully');
    return new Response(
      JSON.stringify({ 
        downloadUrl: signedURL.signedUrl,
        version: latestVersion.version,
        fileName: latestVersion.filename
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 200 }
    )
  } catch (error) {
    console.error('Unexpected error in download-app function:', error);
    return new Response(
      JSON.stringify({ error: 'An unexpected error occurred', details: error.message }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 500 }
    )
  }
})
