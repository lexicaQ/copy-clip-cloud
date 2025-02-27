
import { supabase } from "@/integrations/supabase/client";
import type { AppVersion } from "./types";

export async function uploadAppVersion(
  file: File,
  version: string,
  releaseNotes?: string,
  makeLatest: boolean = true
): Promise<AppVersion> {
  console.log('Starting app version upload process...');
  
  // Step 1: Upload the file to storage
  const filePath = `versions/${version}/${file.name}`;
  console.log('Uploading file to path:', filePath);
  
  const { data: storageData, error: storageError } = await supabase.storage
    .from('app_files')
    .upload(filePath, file, {
      cacheControl: '3600',
      upsert: false
    });

  if (storageError) {
    console.error('Storage upload error:', storageError);
    throw new Error(`Failed to upload file: ${storageError.message}`);
  }
  
  console.log('File uploaded successfully:', storageData?.path);

  // Step 2: If making this the latest version, update all other versions
  if (makeLatest) {
    console.log('Setting this as the latest version...');
    const { error: updateError } = await supabase
      .from('app_versions')
      .update({ is_latest: false })
      .eq('is_latest', true);
      
    if (updateError) {
      console.error('Error updating other versions:', updateError);
      throw new Error(`Failed to update version status: ${updateError.message}`);
    }
  }

  // Step 3: Create the app version record
  const versionRecord = {
    version,
    filename: file.name,
    file_path: filePath,
    is_latest: makeLatest,
    release_notes: releaseNotes || null
  };
  
  console.log('Creating version record:', versionRecord);
  
  const { data: versionData, error: versionError } = await supabase
    .from('app_versions')
    .insert(versionRecord)
    .select()
    .single();

  if (versionError) {
    console.error('Error creating version record:', versionError);
    throw new Error(`Failed to create version record: ${versionError.message}`);
  }
  
  console.log('Version record created successfully:', versionData);
  return versionData;
}

export async function getAppVersions(): Promise<AppVersion[]> {
  console.log('Fetching all app versions...');
  
  const { data, error } = await supabase
    .from('app_versions')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching versions:', error);
    throw new Error(`Failed to fetch versions: ${error.message}`);
  }
  
  console.log(`Found ${data?.length || 0} versions`);
  return data || [];
}

export async function setLatestVersion(versionId: string): Promise<void> {
  console.log('Setting version as latest:', versionId);
  
  // Step 1: Update all versions to not be latest
  const { error: updateAllError } = await supabase
    .from('app_versions')
    .update({ is_latest: false })
    .eq('is_latest', true);
    
  if (updateAllError) {
    console.error('Error updating all versions:', updateAllError);
    throw new Error(`Failed to update version status: ${updateAllError.message}`);
  }
  
  // Step 2: Set the specified version as latest
  const { error: updateError } = await supabase
    .from('app_versions')
    .update({ is_latest: true })
    .eq('id', versionId);
    
  if (updateError) {
    console.error('Error setting latest version:', updateError);
    throw new Error(`Failed to set latest version: ${updateError.message}`);
  }
  
  console.log('Version set as latest successfully');
}
