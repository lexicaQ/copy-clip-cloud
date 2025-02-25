
import { supabase } from "@/integrations/supabase/client";

export async function getLatestAppVersion() {
  const { data, error } = await supabase
    .from('app_versions')
    .select('*')
    .eq('is_latest', true)
    .single();

  if (error) throw error;
  return data;
}

export async function downloadApp(filePath: string) {
  const { data, error } = await supabase.storage
    .from('app_files')
    .download(filePath);

  if (error) throw error;
  return data;
}
