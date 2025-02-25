
export interface AppVersion {
  id: number;
  created_at: string;
  version: string;
  filename: string;
  file_path: string;
  is_latest: boolean;
  changelog?: string;
}
