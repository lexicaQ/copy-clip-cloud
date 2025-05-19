
// Follow Deno deploy documentation
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.7.1'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  console.log("Admin upload function called");
  
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    console.log("Handling CORS preflight request");
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Use the service role key for admin privileges
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    // Get file data from request
    const formData = await req.formData();
    const file = formData.get('file');
    const fileName = formData.get('fileName')?.toString() || 'CopyClipCloud_1.0.0.dmg';
    
    if (!file || typeof file === 'string') {
      return new Response(
        JSON.stringify({ 
          error: 'No file provided or invalid file format',
        }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 400 }
      );
    }

    // Convert file to arrayBuffer
    const fileBuffer = await file.arrayBuffer();

    console.log(`Uploading file ${fileName} to app_files bucket`);
    
    // Try direct upload first with detailed error reporting
    try {
      const { data, error } = await supabase
        .storage
        .from('app_files')
        .upload(fileName, fileBuffer, {
          contentType: file.type || 'application/octet-stream',
          upsert: true
        });

      if (error) {
        console.error('Direct upload error details:', JSON.stringify(error));
        throw error;
      }

      console.log('File upload successful:', data);
      
      // Get the public URL
      const { data: publicUrlData } = supabase
        .storage
        .from('app_files')
        .getPublicUrl(fileName);

      return new Response(
        JSON.stringify({ 
          message: 'File uploaded successfully',
          data: data,
          publicUrl: publicUrlData?.publicUrl || null
        }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 200 }
      );
    } catch (uploadError) {
      console.error('Upload error, attempting fallback method:', uploadError);
      
      // Fallback to using the admin_upload_file function
      console.log('Trying to use admin_upload_file function');
      const { data: fnResult, error: fnError } = await supabase
        .rpc('admin_upload_file', { 
          bucket_name: 'app_files',
          file_path: fileName,
          file_content: fileBuffer
        });
        
      if (fnError) {
        console.error('Function call error:', fnError);
        throw fnError;
      }
      
      console.log('Function upload successful:', fnResult);
      
      // Get the public URL
      const { data: publicUrlData } = supabase
        .storage
        .from('app_files')
        .getPublicUrl(fileName);

      return new Response(
        JSON.stringify({ 
          message: 'File uploaded successfully via function',
          data: { path: fnResult },
          publicUrl: publicUrlData?.publicUrl || null
        }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 200 }
      );
    }

  } catch (error) {
    console.error('Unexpected error in admin-upload function:', error);
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
