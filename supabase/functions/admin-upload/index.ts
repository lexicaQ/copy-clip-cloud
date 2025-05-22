
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

    // Create a Supabase client with the service role key
    // This bypasses RLS and allows us to upload files regardless of policies
    const supabase = createClient(supabaseUrl, supabaseServiceRoleKey);
    
    // Parse request body
    const formData = await req.formData();
    const file = formData.get('file') as File;
    
    if (!file) {
      return new Response(
        JSON.stringify({ error: 'No file provided' }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 400 }
      );
    }

    // Check file type and size
    const allowedTypes = ['application/x-apple-diskimage', 'application/zip', 'application/x-apple-pkg'];
    const maxSize = 500 * 1024 * 1024; // 500MB
    
    if (!allowedTypes.includes(file.type) && !file.name.endsWith('.dmg') && !file.name.endsWith('.zip') && !file.name.endsWith('.pkg')) {
      return new Response(
        JSON.stringify({ error: 'Invalid file type. Only DMG, ZIP, or PKG files are allowed.' }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 400 }
      );
    }
    
    if (file.size > maxSize) {
      return new Response(
        JSON.stringify({ error: 'File too large. Maximum size is 500MB.' }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 400 }
      );
    }

    const fileExt = file.name.split('.').pop();
    const fileName = `CopyClipCloud_${new Date().toISOString().replace(/[:.]/g, '-')}.${fileExt}`;
    const filePath = `${fileName}`;

    console.log(`Uploading file: ${fileName}, size: ${file.size}, type: ${file.type}`);

    // Upload file to storage using service role key (bypasses RLS)
    const { data, error } = await supabase
      .storage
      .from('app_files')
      .upload(filePath, file, {
        cacheControl: '3600',
        upsert: false
      });
    
    if (error) {
      console.error("Error uploading file:", error);
      return new Response(
        JSON.stringify({ error: `Upload failed: ${error.message}` }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 500 }
      );
    }
    
    console.log("File uploaded successfully:", data);
    
    // Get file metadata
    const fileSize = file.size;
    const version = '1.0.0'; // Default version or extract from filename
    
    // Create a signed URL for downloading - this works regardless of policies
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

    return new Response(
      JSON.stringify({
        success: true,
        filePath,
        fileName,
        fileSize,
        version,
        downloadUrl: urlData?.signedUrl || null
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
