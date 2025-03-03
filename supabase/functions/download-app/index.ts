
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

    // Get the latest app version from the app_versions table
    const { data: versionData, error: versionError } = await supabase
      .from('app_versions')
      .select('*')
      .order('version', { ascending: false })
      .limit(1)

    if (versionError) {
      console.error('Error fetching latest version:', versionError)
      return new Response(
        JSON.stringify({ error: 'Failed to fetch latest version', details: versionError }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 500 }
      )
    }

    // If no versions exist in the table, return an error
    if (!versionData || versionData.length === 0) {
      console.error('No app versions found in database')
      return new Response(
        JSON.stringify({ error: 'No app versions available for download' }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 404 }
      )
    }

    const latestVersion = versionData[0]
    
    // Get the download URL for the file
    const { data: signedURL, error: signedURLError } = await supabase
      .storage
      .from('app_files')
      .createSignedUrl(latestVersion.file_path, 60) // URL valid for 60 seconds

    if (signedURLError) {
      console.error('Error creating signed URL:', signedURLError)
      return new Response(
        JSON.stringify({ error: 'Failed to generate download URL', details: signedURLError }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 500 }
      )
    }

    return new Response(
      JSON.stringify({ 
        downloadUrl: signedURL.signedUrl,
        version: latestVersion.version,
        fileName: latestVersion.file_name
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 200 }
    )
  } catch (error) {
    console.error('Unexpected error in download-app function:', error)
    return new Response(
      JSON.stringify({ error: 'An unexpected error occurred', details: error.message }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 500 }
    )
  }
})
