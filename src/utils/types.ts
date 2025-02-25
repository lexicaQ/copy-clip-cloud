
export interface AppVersion {
  id: string;  // This must be string to match Supabase's UUID type
  created_at: string;
  version: string;
  filename: string;
  file_path: string;
  is_latest: boolean | null;  // Made nullable to match Supabase schema
  release_notes?: string | null;  // Added to match Supabase schema
}
