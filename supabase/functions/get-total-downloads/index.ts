
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

    const supabase = createClient(supabaseUrl, supabaseServiceRoleKey);

    // Create the download_stats table if it doesn't exist
    try {
      await supabase.rpc('ensure_download_stats_table');
    } catch (error) {
      console.error("Error ensuring download_stats table exists:", error);
      // Create a simple table if the RPC fails
      await supabase.from('download_stats').select('count').limit(1);
    }

    // Get total downloads using the RPC function
    let totalDownloads = 0;
    try {
      const { data, error } = await supabase.rpc('get_total_downloads');
      
      if (error) {
        console.error("Error getting total downloads:", error);
        throw error;
      }
      
      totalDownloads = data || 0;
    } catch (error) {
      console.error("RPC function failed, falling back to direct query:", error);
      
      // Fallback: Directly query the download_stats table
      const { data, error } = await supabase
        .from('download_stats')
        .select('download_count');
      
      if (error) {
        console.error("Error with fallback query:", error);
      } else if (data) {
        totalDownloads = data.reduce((sum, row) => sum + (row.download_count || 0), 0);
      }
    }
    
    return new Response(
      JSON.stringify(totalDownloads),
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
