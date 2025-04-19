
import React from "react";
import { motion } from "framer-motion";
import { Eye, FileImage, FileText, FileVideo, Image, Settings, Sliders } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";

export type FileType = "image" | "document" | "video" | "audio" | "pdf" | "other";

interface PreviewThumbnailProps {
  title: string;
  description?: string;
  type: FileType;
  thumbnail?: string;
  size?: string;
  date?: string;
  author?: string;
  company?: string;
  companyLogo?: string;
  rating?: number;
  testimonial?: string;
  className?: string;
}

const getFileIcon = (type: FileType) => {
  switch (type) {
    case "image":
      return Image;
    case "document":
      return FileText;
    case "video":
      return FileVideo;
    case "pdf":
      return FileText;
    default:
      return FileImage;
  }
};

const PreviewThumbnail: React.FC<PreviewThumbnailProps> = ({
  title,
  description,
  type,
  thumbnail,
  size,
  date,
  author,
  company,
  companyLogo,
  rating,
  testimonial,
  className,
}) => {
  const FileIcon = getFileIcon(type);
  
  return (
    <motion.div 
      className={`rounded-lg overflow-hidden bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all ${className}`}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 500, damping: 30 }}
    >
      <div className="p-4 flex flex-col h-full">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className="bg-white/5 p-1.5 rounded-md">
              <FileIcon className="w-4 h-4 text-white/80" />
            </div>
            <h3 className="text-sm font-medium text-white truncate max-w-[120px]">{title}</h3>
          </div>
          
          <div className="flex items-center gap-1">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Dialog>
                    <DialogTrigger asChild>
                      <button className="p-1 rounded-full hover:bg-white/10 transition-colors">
                        <Eye className="w-3.5 h-3.5 text-white/70" />
                      </button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[550px] bg-black/95 border border-white/10 text-white">
                      <DialogHeader>
                        <DialogTitle className="text-xl flex items-center gap-2">
                          <FileIcon className="w-5 h-5" />
                          <span>{title}</span>
                        </DialogTitle>
                      </DialogHeader>
                      <div className="mt-4">
                        {thumbnail ? (
                          <div className="rounded-lg overflow-hidden border border-white/10">
                            <img 
                              src={thumbnail} 
                              alt={title} 
                              className="w-full object-cover aspect-video"
                            />
                          </div>
                        ) : (
                          <div className="aspect-video w-full rounded-lg border border-white/10 flex items-center justify-center bg-white/5">
                            <FileIcon className="w-16 h-16 text-white/30" />
                          </div>
                        )}
                        
                        <div className="mt-4 space-y-3">
                          {description && (
                            <p className="text-sm text-white/70 leading-relaxed">{description}</p>
                          )}
                          
                          <div className="grid grid-cols-2 gap-3 text-xs text-white/60">
                            {size && (
                              <div>
                                <span className="block text-white/40">Size</span>
                                <span>{size}</span>
                              </div>
                            )}
                            {date && (
                              <div>
                                <span className="block text-white/40">Created</span>
                                <span>{date}</span>
                              </div>
                            )}
                            {author && (
                              <div>
                                <span className="block text-white/40">Author</span>
                                <span>{author}</span>
                              </div>
                            )}
                          </div>
                          
                          {company && (
                            <div className="pt-3 mt-3 border-t border-white/10">
                              <div className="flex items-center gap-2">
                                {companyLogo ? (
                                  <img 
                                    src={companyLogo} 
                                    alt={company} 
                                    className="w-6 h-6 rounded-full object-cover"
                                  />
                                ) : (
                                  <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-xs font-medium">
                                    {company.charAt(0)}
                                  </div>
                                )}
                                <span className="text-sm font-medium">{company}</span>
                              </div>
                              {testimonial && (
                                <p className="text-sm italic text-white/60 mt-2">"{testimonial}"</p>
                              )}
                              {rating && (
                                <div className="flex items-center gap-1 mt-2">
                                  {[...Array(5)].map((_, i) => (
                                    <div 
                                      key={i} 
                                      className={`w-3 h-3 rounded-full ${i < rating ? 'bg-white/80' : 'bg-white/10'}`}
                                    />
                                  ))}
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </TooltipTrigger>
                <TooltipContent side="bottom">
                  <p>Preview</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Popover>
                    <PopoverTrigger asChild>
                      <button className="p-1 rounded-full hover:bg-white/10 transition-colors">
                        <Settings className="w-3.5 h-3.5 text-white/70" />
                      </button>
                    </PopoverTrigger>
                    <PopoverContent className="w-64 p-3 bg-black/95 border border-white/10 text-white">
                      <div className="space-y-3">
                        <h4 className="text-sm font-medium flex items-center gap-2">
                          <Sliders className="w-4 h-4" />
                          Display Settings
                        </h4>
                        
                        <div className="grid gap-2 text-xs">
                          <Button size="sm" variant="outline" className="h-8 justify-start text-xs bg-white/5 hover:bg-white/10 text-white border-white/10">
                            Replace
                          </Button>
                          <Button size="sm" variant="outline" className="h-8 justify-start text-xs bg-white/5 hover:bg-white/10 text-white border-white/10">
                            Edit Metadata
                          </Button>
                          <Button size="sm" variant="outline" className="h-8 justify-start text-xs bg-white/5 hover:bg-white/10 text-white border-white/10">
                            Change Display
                          </Button>
                          <Button size="sm" variant="outline" className="h-8 justify-start text-xs bg-transparent hover:bg-white/10 text-white/60 hover:text-white border-white/10">
                            Remove
                          </Button>
                        </div>
                      </div>
                    </PopoverContent>
                  </Popover>
                </TooltipTrigger>
                <TooltipContent side="bottom">
                  <p>Settings</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>

        <div className="flex-1 mb-3">
          {thumbnail ? (
            <div className="aspect-video rounded-md overflow-hidden bg-white/5">
              <img 
                src={thumbnail} 
                alt={title}
                className="w-full h-full object-cover"
              />
            </div>
          ) : (
            <div className="aspect-video flex items-center justify-center rounded-md bg-white/5">
              <FileIcon className="w-8 h-8 text-white/20" />
            </div>
          )}
        </div>
        
        <div className="mt-auto">
          {company && (
            <div className="flex items-center gap-2">
              {companyLogo ? (
                <img 
                  src={companyLogo} 
                  alt={company} 
                  className="w-4 h-4 rounded-full object-cover"
                />
              ) : (
                <div className="w-4 h-4 rounded-full bg-white/10 flex items-center justify-center text-[8px] font-medium">
                  {company.charAt(0)}
                </div>
              )}
              <span className="text-xs text-white/60 truncate">{company}</span>
            </div>
          )}
          
          {rating && (
            <div className="flex items-center gap-0.5 mt-1">
              {[...Array(5)].map((_, i) => (
                <div 
                  key={i} 
                  className={`w-2 h-2 rounded-full ${i < rating ? 'bg-white/60' : 'bg-white/10'}`}
                />
              ))}
            </div>
          )}
          
          {size && (
            <div className="text-[10px] text-white/40 mt-1">
              {size}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default PreviewThumbnail;
