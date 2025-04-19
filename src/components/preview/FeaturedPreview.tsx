
import React from "react";
import { motion } from "framer-motion";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Eye, ZoomIn } from "lucide-react";

interface FeaturedPreviewProps {
  image: string;
  title: string;
  subtitle?: string;
  description?: string;
  className?: string;
}

const FeaturedPreview: React.FC<FeaturedPreviewProps> = ({
  image,
  title,
  subtitle,
  description,
  className,
}) => {
  return (
    <motion.div 
      className={`rounded-xl overflow-hidden glass-panel border border-white/10 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative aspect-[16/9] group">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover brightness-90 group-hover:brightness-100 transition-all duration-500"
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
          <Dialog>
            <DialogTrigger asChild>
              <Button 
                className="bg-white text-black rounded-full hover:bg-white/90 transition-all"
                size="sm"
              >
                <Eye className="w-4 h-4 mr-2" />
                View Full
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[800px] bg-black/95 border border-white/10 text-white">
              <DialogHeader>
                <DialogTitle className="text-xl">{title}</DialogTitle>
              </DialogHeader>
              <div className="mt-4">
                <img 
                  src={image} 
                  alt={title}
                  className="w-full rounded-lg object-contain max-h-[70vh]"
                />
                {description && (
                  <p className="mt-4 text-white/70">{description}</p>
                )}
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      
      <div className="p-5">
        <h3 className="text-xl font-medium text-white">{title}</h3>
        {subtitle && (
          <p className="text-white/60 mt-1">{subtitle}</p>
        )}
        {description && (
          <p className="text-white/70 text-sm mt-3 line-clamp-2">{description}</p>
        )}
      </div>
    </motion.div>
  );
};

export default FeaturedPreview;
