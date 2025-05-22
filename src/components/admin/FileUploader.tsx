
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Upload, CheckCircle, AlertCircle } from "lucide-react";
import { toast } from "sonner";

const FileUploader = () => {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [uploadStatus, setUploadStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      
      // Validate file type
      const validTypes = ['application/x-apple-diskimage', 'application/zip', 'application/x-apple-pkg'];
      const fileName = selectedFile.name.toLowerCase();
      const isValidExtension = fileName.endsWith('.dmg') || fileName.endsWith('.zip') || fileName.endsWith('.pkg');
      
      if (!validTypes.includes(selectedFile.type) && !isValidExtension) {
        toast.error("Invalid file type", {
          description: "Only DMG, ZIP, or PKG files are allowed."
        });
        return;
      }
      
      // Validate file size (500MB max)
      if (selectedFile.size > 500 * 1024 * 1024) {
        toast.error("File too large", {
          description: "Maximum file size is 500MB."
        });
        return;
      }
      
      setFile(selectedFile);
      setUploadStatus('idle');
      setErrorMessage(null);
    }
  };

  const handleUpload = async () => {
    if (!file) {
      toast.error("Please select a file to upload");
      return;
    }

    setUploading(true);
    setUploadStatus('idle');
    setErrorMessage(null);

    try {
      const formData = new FormData();
      formData.append('file', file);

      console.log("Starting file upload...");
      const response = await fetch('/api/admin-upload', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Upload failed');
      }

      console.log("Upload successful:", data);
      setUploadStatus('success');
      toast.success("File uploaded successfully", {
        description: `${file.name} has been uploaded and is now available for download.`
      });

      // Clear the file input
      setFile(null);
      if (document.getElementById('file-upload') as HTMLInputElement) {
        (document.getElementById('file-upload') as HTMLInputElement).value = '';
      }
    } catch (error: any) {
      console.error("Upload error:", error);
      setUploadStatus('error');
      setErrorMessage(error.message || 'An unexpected error occurred');
      toast.error("Upload failed", {
        description: error.message || 'Please try again later.'
      });
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="max-w-md w-full glass-panel p-6 rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Upload Application File</h2>
      
      <div className="space-y-4">
        <div className="flex items-center justify-center w-full">
          <label htmlFor="file-upload" className="w-full">
            <div className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg border-white/20 cursor-pointer bg-white/5 hover:bg-white/10 transition-colors">
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <Upload className="w-8 h-8 mb-2 text-white/60" />
                <p className="mb-2 text-sm text-white/80">
                  <span className="font-semibold">Click to upload</span> or drag and drop
                </p>
                <p className="text-xs text-white/60">
                  DMG, ZIP, or PKG (max 500MB)
                </p>
              </div>
              <input
                id="file-upload"
                type="file"
                className="hidden"
                onChange={handleFileChange}
                accept=".dmg,.zip,.pkg"
              />
            </div>
          </label>
        </div>
        
        {file && (
          <div className="flex items-center justify-between p-3 bg-white/10 rounded-md">
            <span className="text-sm truncate max-w-[200px]">{file.name}</span>
            <span className="text-xs text-white/60">{(file.size / (1024 * 1024)).toFixed(2)} MB</span>
          </div>
        )}
        
        {uploadStatus === 'success' && (
          <div className="flex items-center gap-2 p-3 bg-green-500/20 rounded-md text-green-300">
            <CheckCircle className="w-4 h-4" />
            <span className="text-sm">Upload successful!</span>
          </div>
        )}
        
        {uploadStatus === 'error' && (
          <div className="flex items-center gap-2 p-3 bg-red-500/20 rounded-md text-red-300">
            <AlertCircle className="w-4 h-4" />
            <span className="text-sm">{errorMessage || 'Upload failed'}</span>
          </div>
        )}
        
        <Button 
          onClick={handleUpload}
          disabled={!file || uploading}
          className="w-full"
        >
          {uploading ? (
            <>
              <span className="animate-spin mr-2">○</span>
              Uploading...
            </>
          ) : (
            <>
              <Upload className="w-4 h-4 mr-2" />
              Upload File
            </>
          )}
        </Button>
      </div>
      
      <p className="text-xs text-white/60 mt-4">
        Note: Only DMG, ZIP, or PKG files up to 500MB are accepted. Files uploaded will be available for public download.
      </p>
    </div>
  );
};

export default FileUploader;
