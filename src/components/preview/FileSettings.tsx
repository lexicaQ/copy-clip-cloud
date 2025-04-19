
import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle,
  DialogDescription,
  DialogFooter
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Settings, FileImage, Link } from "lucide-react";
import { FileType } from "./FilePreview";

interface FileSettingsProps {
  isOpen: boolean;
  onClose: () => void;
  file: {
    id: string;
    name: string;
    type: FileType;
    url: string;
    thumbnail?: string;
  } | null;
  onSaveSettings: (fileId: string, settings: any) => void;
}

const FileSettings: React.FC<FileSettingsProps> = ({ 
  isOpen, 
  onClose, 
  file, 
  onSaveSettings 
}) => {
  const [settings, setSettings] = useState({
    showPreview: true,
    showMetadata: true,
    enableDownload: true,
    autoPlay: false,
    quality: "medium",
    shareEnabled: false
  });

  const handleSave = () => {
    if (file) {
      onSaveSettings(file.id, settings);
      onClose();
    }
  };

  if (!file) return null;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="bg-black/90 backdrop-blur-xl border-white/10 text-white sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Settings className="w-5 h-5" /> File Display Settings
          </DialogTitle>
          <DialogDescription className="text-white/70">
            Customize how this file is displayed and behaves
          </DialogDescription>
        </DialogHeader>

        <Tabs defaultValue="display" className="py-4">
          <TabsList className="grid grid-cols-3 bg-white/5">
            <TabsTrigger value="display">Display</TabsTrigger>
            <TabsTrigger value="metadata">Metadata</TabsTrigger>
            <TabsTrigger value="sharing">Sharing</TabsTrigger>
          </TabsList>
          
          <TabsContent value="display" className="mt-4 space-y-4">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="show-preview" className="flex items-center gap-2 cursor-pointer">
                  <FileImage className="w-4 h-4" />
                  <span>Show preview</span>
                </Label>
                <Switch 
                  id="show-preview" 
                  checked={settings.showPreview}
                  onCheckedChange={(checked) => setSettings({...settings, showPreview: checked})}
                />
              </div>

              {file.type === 'video' && (
                <div className="flex items-center justify-between">
                  <Label htmlFor="auto-play" className="cursor-pointer">
                    Auto-play video
                  </Label>
                  <Switch 
                    id="auto-play" 
                    checked={settings.autoPlay}
                    onCheckedChange={(checked) => setSettings({...settings, autoPlay: checked})}
                  />
                </div>
              )}
              
              <div className="space-y-2">
                <Label>Preview quality</Label>
                <div className="grid grid-cols-3 gap-2">
                  {['low', 'medium', 'high'].map(quality => (
                    <Button 
                      key={quality}
                      variant={settings.quality === quality ? "default" : "outline"}
                      className={settings.quality === quality 
                        ? "bg-white/20 hover:bg-white/30" 
                        : "bg-white/5 border-white/10 hover:bg-white/10"}
                      onClick={() => setSettings({...settings, quality})}
                    >
                      <span className="capitalize">{quality}</span>
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="metadata" className="mt-4 space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="show-metadata" className="cursor-pointer">
                Show file information
              </Label>
              <Switch 
                id="show-metadata" 
                checked={settings.showMetadata}
                onCheckedChange={(checked) => setSettings({...settings, showMetadata: checked})}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <Label htmlFor="enable-download" className="cursor-pointer">
                Enable download
              </Label>
              <Switch 
                id="enable-download" 
                checked={settings.enableDownload}
                onCheckedChange={(checked) => setSettings({...settings, enableDownload: checked})}
              />
            </div>
          </TabsContent>
          
          <TabsContent value="sharing" className="mt-4 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="share-enabled" className="flex items-center gap-2 cursor-pointer">
                  <Link className="w-4 h-4" />
                  <span>Enable sharing</span>
                </Label>
                <p className="text-xs text-white/60 mt-1">Allow others to view this file via link</p>
              </div>
              <Switch 
                id="share-enabled" 
                checked={settings.shareEnabled}
                onCheckedChange={(checked) => setSettings({...settings, shareEnabled: checked})}
              />
            </div>
            
            {settings.shareEnabled && (
              <div className="p-3 bg-white/5 border border-white/10 rounded-md">
                <p className="text-xs text-white/80 mb-2">Share URL:</p>
                <div className="flex items-center">
                  <div className="flex-1 bg-white/10 text-white/80 text-xs py-1.5 px-2 rounded-l-md truncate">
                    https://copyclipcloud.com/share/{file.id}
                  </div>
                  <Button size="sm" className="rounded-l-none bg-white/20 hover:bg-white/30">
                    Copy
                  </Button>
                </div>
              </div>
            )}
          </TabsContent>
        </Tabs>

        <Separator className="bg-white/10" />
        
        <DialogFooter className="sm:justify-end">
          <Button variant="ghost" onClick={onClose}>
            Cancel
          </Button>
          <Button 
            className="bg-white text-black hover:bg-white/90"
            onClick={handleSave}
          >
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default FileSettings;
