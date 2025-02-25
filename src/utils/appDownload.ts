
import { supabase } from "@/integrations/supabase/client";
import type { AppVersion } from "./types";

export async function getLatestAppVersion(): Promise<AppVersion | null> {
  const { data, error } = await supabase
    .from('app_versions')
    .select()
    .eq('is_latest', true)
    .maybeSingle();

  if (error) throw error;
  return data;
}

export async function downloadApp(filePath: string): Promise<Blob> {
  const { data, error } = await supabase.storage
    .from('app_files')
    .download(filePath);

  if (error) throw error;
  return data;
}
