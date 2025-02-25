
export interface AppVersion {
  id: string;  // Changed from number to string to match Supabase's UUID type
  created_at: string;
  version: string;
  filename: string;
  file_path: string;
  is_latest: boolean | null;  // Made nullable to match Supabase schema
  release_notes?: string | null;  // Added to match Supabase schema
}
