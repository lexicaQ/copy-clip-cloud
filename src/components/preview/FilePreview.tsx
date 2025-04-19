import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { 
  FileText, 
  FileImage, 
  File,
  FileVideo,
  FileAudio,
  Settings,
  Info
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";

export type FileType = 'image' | 'pdf' | 'document' | 'audio' | 'video' | 'other';

interface FilePreviewProps {
  file: {
    id: string;
    name: string;
    type: FileType;
    url: string;
    thumbnail?: string;
    createdAt?: string;
    size?: number;
  };
  onOpenSettings: (file: any) => void;
}

const formatFileSize = (bytes: number): string => {
  if (bytes < 1024) return bytes + ' B';
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
  return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
};

const getFileIcon = (type: FileType) => {
  switch (type) {
    case 'document':
      return <FileText className="w-6 h-6 text-blue-400" />;
    case 'image':
      return <FileImage className="w-6 h-6 text-green-400" />;
    case 'pdf':
      return <FileText className="w-6 h-6 text-red-400" />;
    case 'audio':
      return <FileAudio className="w-6 h-6 text-purple-400" />;
    case 'video':
      return <FileVideo className="w-6 h-6 text-yellow-400" />;
    default:
      return <File className="w-6 h-6 text-gray-400" />;
  }
};

const FilePreview: React.FC<FilePreviewProps> = ({ file, onOpenSettings }) => {
  const renderPreview = () => {
    switch (file.type) {
      case 'image':
        return (
          <div className="w-full h-[300px] flex items-center justify-center bg-black/20 rounded-lg overflow-hidden">
            <img 
              src={file.thumbnail || file.url} 
              alt={file.name} 
              className="max-w-full max-h-full object-contain" 
            />
          </div>
        );
      case 'pdf':
        return (
          <div className="w-full h-[300px] flex flex-col items-center justify-center bg-black/20 rounded-lg p-4">
            <FileText className="w-12 h-12 text-red-400 mb-3" />
            <div className="text-center">
              <div className="text-sm font-medium">{file.name}</div>
              <div className="text-xs text-white/60">PDF Document</div>
              {file.size && <div className="text-xs text-white/60 mt-1">{formatFileSize(file.size)}</div>}
            </div>
          </div>
        );
      case 'document':
        return (
          <div className="w-full h-[300px] flex flex-col items-center justify-center bg-black/20 rounded-lg p-4 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-14 bg-white/5 flex items-center px-4">
              <div className="w-2 h-2 rounded-full bg-red-400 mr-1.5"></div>
              <div className="w-2 h-2 rounded-full bg-yellow-400 mr-1.5"></div>
              <div className="w-2 h-2 rounded-full bg-green-400"></div>
            </div>
            <div className="absolute top-14 left-0 right-0 bottom-0 flex flex-col p-4">
              <div className="bg-white/5 w-3/4 h-4 mb-3 rounded"></div>
              <div className="bg-white/5 w-1/2 h-4 mb-6 rounded"></div>
              <div className="space-y-2">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="bg-white/5 w-full h-3 rounded"></div>
                ))}
              </div>
            </div>
          </div>
        );
      case 'audio':
      case 'video':
      default:
        return (
          <div className="w-full h-[300px] flex flex-col items-center justify-center bg-black/20 rounded-lg p-6">
            {getFileIcon(file.type)}
            <div className="mt-4 text-center">
              <div className="text-sm font-medium">{file.name}</div>
              <div className="text-xs text-white/60 capitalize">{file.type} File</div>
              {file.size && <div className="text-xs text-white/60 mt-1">{formatFileSize(file.size)}</div>}
            </div>
          </div>
        );
    }
  };

  return (
    <Card className="bg-white/5 border-white/10 backdrop-blur-sm overflow-hidden">
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            {getFileIcon(file.type)}
            <span className="ml-2 font-medium text-white truncate">{file.name}</span>
          </div>
          <div className="flex items-center gap-2">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Info className="h-4 w-4" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-80 bg-black/80 backdrop-blur-md border-white/10 text-white">
                <div className="space-y-2">
                  <h4 className="font-medium">File Information</h4>
                  <div className="text-sm text-white/80">
                    <div className="grid grid-cols-3 gap-1">
                      <span className="text-white/60">Name:</span>
                      <span className="col-span-2 truncate">{file.name}</span>
                    </div>
                    <div className="grid grid-cols-3 gap-1">
                      <span className="text-white/60">Type:</span>
                      <span className="col-span-2 capitalize">{file.type}</span>
                    </div>
                    {file.size && (
                      <div className="grid grid-cols-3 gap-1">
                        <span className="text-white/60">Size:</span>
                        <span className="col-span-2">{formatFileSize(file.size)}</span>
                      </div>
                    )}
                    {file.createdAt && (
                      <div className="grid grid-cols-3 gap-1">
                        <span className="text-white/60">Created:</span>
                        <span className="col-span-2">{file.createdAt}</span>
                      </div>
                    )}
                  </div>
                </div>
              </PopoverContent>
            </Popover>
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-8 w-8"
              onClick={() => onOpenSettings(file)}
            >
              <Settings className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {renderPreview()}
        </motion.div>
      </CardContent>
    </Card>
  );
};

export default FilePreview;
