
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

  // Create the full path with 'versions/' prefix if it's not already there
  const fullPath = filePath.startsWith('versions/') ? filePath : `versions/${filePath}`;
  console.log('Using full path for download:', fullPath);

  const { data, error } = await supabase.storage
    .from('app_files')
    .download(fullPath);

  if (error) {
    console.error('Error downloading file:', error);
    
    // Try alternative path without 'versions/' prefix as fallback
    if (filePath.startsWith('versions/')) {
      console.log('Attempting fallback download without versions/ prefix');
      const fallbackPath = filePath.replace('versions/', '');
      
      const fallbackResult = await supabase.storage
        .from('app_files')
        .download(fallbackPath);
        
      if (fallbackResult.error) {
        console.error('Fallback download also failed:', fallbackResult.error);
        throw new Error(`Failed to download file: ${error.message}`);
      }
      
      console.log('Fallback download successful');
      return fallbackResult.data;
    }
    
    throw new Error(`Failed to download file: ${error.message}`);
  }

  if (!data) {
    throw new Error('No file data received from storage');
  }

  console.log('File download successful');
  return data;
}
