
-- Function to ensure the download_stats table exists
CREATE OR REPLACE FUNCTION public.ensure_download_stats_table()
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  -- Create the downloads table if it doesn't exist
  CREATE TABLE IF NOT EXISTS public.download_stats (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    version TEXT NOT NULL,
    download_count INTEGER DEFAULT 0,
    last_downloaded_at TIMESTAMP WITH TIME ZONE DEFAULT now()
  );
END;
$$;

-- Function to get the total download count
CREATE OR REPLACE FUNCTION public.get_total_downloads()
RETURNS INTEGER
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  total INTEGER;
BEGIN
  -- Ensure the download_stats table exists
  PERFORM public.ensure_download_stats_table();
  
  -- Get the sum of all download counts
  SELECT COALESCE(SUM(download_count), 0) INTO total FROM public.download_stats;
  
  RETURN total;
END;
$$;
