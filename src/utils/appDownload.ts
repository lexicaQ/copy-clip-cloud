
import { supabase } from "@/integrations/supabase/client";
import type { AppVersion } from "./types";

export async function getLatestAppVersion(): Promise<AppVersion | null> {
  const { data, error } = await supabase
    .from('app_versions')
    .select()
    .eq('is_latest', true)
    .maybeSingle();

  if (error) {
    console.error('Error fetching latest version:', error);
    throw error;
  }
  
  console.log('Latest version data:', data);
  return data;
}

export async function downloadApp(filePath: string): Promise<Blob> {
  console.log('Attempting to download file from path:', filePath);
  
  const { data, error } = await supabase.storage
    .from('app_files')
    .download(filePath);

  if (error) {
    console.error('Error downloading file:', error);
    throw error;
  }

  if (!data) {
    throw new Error('No file data received');
  }

  console.log('File download successful');
  return data;
}
