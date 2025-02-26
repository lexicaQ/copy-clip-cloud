
import { supabase } from "@/integrations/supabase/client";
import type { AppVersion } from "./types";

export async function getLatestAppVersion(): Promise<AppVersion | null> {
  console.log('Fetching latest app version...');
  
  const { data, error } = await supabase
    .from('app_versions')
    .select()
    .eq('is_latest', true)
    .maybeSingle();

  if (error) {
    console.error('Error fetching latest version:', error);
    throw new Error(`Failed to fetch latest version: ${error.message}`);
  }
  
  console.log('Latest version data:', data);
  
  if (!data) {
    console.warn('No latest version found');
    return null;
  }

  return data;
}

export async function downloadApp(filePath: string): Promise<Blob> {
  console.log('Starting app download from path:', filePath);
  
  if (!filePath) {
    throw new Error('No file path provided for download');
  }

  const { data, error } = await supabase.storage
    .from('app_files')
    .download(filePath);

  if (error) {
    console.error('Error downloading file:', error);
    throw new Error(`Failed to download file: ${error.message}`);
  }

  if (!data) {
    throw new Error('No file data received from storage');
  }

  console.log('File download successful');
  return data;
}
