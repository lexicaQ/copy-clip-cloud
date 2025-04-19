
import React from "react";
import { motion } from "framer-motion";
import DocLayout from "@/components/docs/DocLayout";
import { Keyboard, Monitor, Smartphone, Laptop, Zap, Search, Info, Clipboard } from "lucide-react";

interface ShortcutProps {
  keys: string[];
  description: string;
  platform?: "mac" | "windows" | "universal";
}

const ShortcutCard = ({ keys, description, platform = "universal" }: ShortcutProps) => {
  return (
    <motion.div 
      className="glass-panel p-4 hover:bg-white/5 transition-colors"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -3 }}
    >
      <div className="flex items-center justify-between">
        <div className="flex flex-wrap items-center gap-1">
          {keys.map((key, index) => (
            <React.Fragment key={index}>
              <kbd className="px-2 py-1 bg-white/10 rounded text-sm border border-white/5 font-mono">
                {key}
              </kbd>
              {index < keys.length - 1 && <span className="text-white/40">+</span>}
            </React.Fragment>
          ))}
        </div>
        <div className="flex-shrink-0 ml-2">
          {platform === "mac" && <Monitor className="w-4 h-4 text-gray-400" />}
          {platform === "windows" && <Laptop className="w-4 h-4 text-gray-400" />}
          {platform === "universal" && <Zap className="w-4 h-4 text-gray-400" />}
        </div>
      </div>
      <p className="text-sm text-gray-400 mt-3">{description}</p>
    </motion.div>
  );
};

const ShortcutCategory = ({ title, shortcuts, icon: Icon = Keyboard }) => {
  return (
    <motion.section 
      className="mb-10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 rounded-lg bg-white/10">
          <Icon className="w-5 h-5" />
        </div>
        <h2 className="text-xl font-bold">{title}</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {shortcuts.map((shortcut, index) => (
          <ShortcutCard
            key={index}
            keys={shortcut.keys}
            description={shortcut.description}
            platform={shortcut.platform}
          />
        ))}
      </div>
    </motion.section>
  );
};

const KeyboardShortcuts = () => {
  const generalShortcuts = [
    { keys: ["⌘", "Shift", "V"], description: "Open clipboard history panel", platform: "mac" },
    { keys: ["Ctrl", "Shift", "V"], description: "Open clipboard history panel", platform: "windows" },
    { keys: ["⌘", "⌥", "C"], description: "Clear clipboard history", platform: "mac" },
    { keys: ["Ctrl", "Alt", "C"], description: "Clear clipboard history", platform: "windows" },
    { keys: ["⌘", ","], description: "Open preferences", platform: "mac" },
    { keys: ["Ctrl", ","], description: "Open preferences", platform: "windows" },
    { keys: ["⌘", "Q"], description: "Quit application", platform: "mac" },
    { keys: ["Alt", "F4"], description: "Exit application", platform: "windows" },
  ];
  
  const clipboardShortcuts = [
    { keys: ["⌘", "C"], description: "Copy selected item to clipboard", platform: "universal" },
    { keys: ["⌘", "X"], description: "Cut selected item to clipboard", platform: "universal" },
    { keys: ["⌘", "V"], description: "Paste most recent clipboard item", platform: "universal" },
    { keys: ["⌘", "⌥", "V"], description: "Paste as plain text", platform: "mac" },
    { keys: ["Ctrl", "Alt", "V"], description: "Paste as plain text", platform: "windows" },
    { keys: ["⌘", "Shift", "C"], description: "Copy current item with formatting preserved", platform: "mac" },
    { keys: ["Ctrl", "Shift", "C"], description: "Copy current item with formatting preserved", platform: "windows" },
    { keys: ["⌘", "⌥", "Shift", "V"], description: "Paste without formatting", platform: "mac" },
    { keys: ["Ctrl", "Alt", "Shift", "V"], description: "Paste without formatting", platform: "windows" },
  ];
  
  const navigationShortcuts = [
    { keys: ["↑"], description: "Navigate to previous clipboard item", platform: "universal" },
    { keys: ["↓"], description: "Navigate to next clipboard item", platform: "universal" },
    { keys: ["Tab"], description: "Navigate between sections", platform: "universal" },
    { keys: ["Shift", "Tab"], description: "Navigate backwards between sections", platform: "universal" },
    { keys: ["Enter"], description: "Select and paste the highlighted clipboard item", platform: "universal" },
    { keys: ["Esc"], description: "Close clipboard panel", platform: "universal" },
  ];
  
  const searchShortcuts = [
    { keys: ["⌘", "F"], description: "Focus on search field", platform: "mac" },
    { keys: ["Ctrl", "F"], description: "Focus on search field", platform: "windows" },
    { keys: ["⌘", "G"], description: "Find next match", platform: "mac" },
    { keys: ["Ctrl", "G"], description: "Find next match", platform: "windows" },
    { keys: ["⌘", "Shift", "G"], description: "Find previous match", platform: "mac" },
    { keys: ["Ctrl", "Shift", "G"], description: "Find previous match", platform: "windows" },
  ];
  
  return (
    <DocLayout 
      title="Keyboard Shortcuts" 
      description="Master CopyClipCloud with these keyboard shortcuts for efficient clipboard management"
      icon={Keyboard}
    >
      <div className="space-y-8">
        <motion.div
          className="bg-white/5 border border-white/10 rounded-lg p-4 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="flex items-start gap-3">
            <Info className="w-5 h-5 text-blue-400 mt-0.5" />
            <div>
              <h3 className="font-medium text-white mb-2">Platform-specific shortcuts</h3>
              <p className="text-sm text-gray-300">
                Shortcuts are displayed for both macOS and Windows. Look for the 
                <Monitor className="w-4 h-4 text-gray-400 inline-block mx-1" /> (macOS) or 
                <Laptop className="w-4 h-4 text-gray-400 inline-block mx-1" /> (Windows) 
                icon to identify platform-specific shortcuts. Shortcuts marked with 
                <Zap className="w-4 h-4 text-gray-400 inline-block mx-1" /> 
                work on all platforms.
              </p>
            </div>
          </div>
        </motion.div>
        
        <ShortcutCategory 
          title="General Application Shortcuts" 
          shortcuts={generalShortcuts} 
          icon={Monitor}
        />
        
        <ShortcutCategory 
          title="Clipboard Operations" 
          shortcuts={clipboardShortcuts} 
          icon={Clipboard}
        />
        
        <ShortcutCategory 
          title="Navigation Shortcuts" 
          shortcuts={navigationShortcuts} 
          icon={Smartphone}
        />
        
        <ShortcutCategory 
          title="Search Shortcuts" 
          shortcuts={searchShortcuts} 
          icon={Search}
        />
        
        <motion.div 
          className="bg-white/5 border border-white/10 rounded-lg p-5 mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <h3 className="font-medium mb-4 flex items-center gap-2">
            <Zap className="w-5 h-5" />
            Customize Your Shortcuts
          </h3>
          <p className="text-gray-300 mb-4">
            You can customize keyboard shortcuts to match your workflow preferences. Navigate to Settings > Keyboard Shortcuts to personalize your experience.
          </p>
          <motion.button
            className="px-4 py-2 bg-white text-black rounded-lg text-sm font-medium hover:bg-white/90 transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Open Shortcut Settings
          </motion.button>
        </motion.div>
      </div>
    </DocLayout>
  );
};

export default KeyboardShortcuts;
