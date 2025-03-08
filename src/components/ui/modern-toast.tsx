
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { toast, Toaster as SonnerToaster, ToasterProps } from "sonner";
import { useTheme } from "next-themes";
import { X, CheckCircle, AlertCircle, Info, AlertTriangle } from "lucide-react";

const ModernToaster = (props: ToasterProps) => {
  const { theme = "system" } = useTheme();
  
  return (
    <SonnerToaster
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast: "group toast group-[.toaster]:bg-black/95 group-[.toaster]:backdrop-blur-md group-[.toaster]:border-white/15 group-[.toaster]:text-white group-[.toaster]:shadow-2xl",
          description: "group-[.toast]:text-gray-300",
          actionButton: "group-[.toast]:bg-white group-[.toast]:text-black",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
          closeButton: "group-[.toast]:bg-white/10 group-[.toast]:text-white group-[.toast]:hover:bg-white/20"
        },
        duration: 4000,
      }}
      {...props}
    />
  );
};

// Enhanced toast with animation
export function showToast(message: string, type: "success" | "error" | "info" | "warning" = "success", description?: string) {
  const toastContent = (
    <div className="flex items-start">
      <div className="flex-shrink-0 mr-3 mt-0.5">
        {type === "success" && (
          <motion.div 
            initial={{ scale: 0, rotate: -30 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <CheckCircle className="w-5 h-5 text-white" />
          </motion.div>
        )}
        {type === "error" && (
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: [0, 1.2, 1] }}
            transition={{ duration: 0.4 }}
          >
            <AlertCircle className="w-5 h-5 text-white" />
          </motion.div>
        )}
        {type === "info" && <Info className="w-5 h-5 text-white" />}
        {type === "warning" && (
          <motion.div
            animate={{ rotate: [-5, 5, -5, 5, 0] }}
            transition={{ duration: 0.5 }}
          >
            <AlertTriangle className="w-5 h-5 text-white" />
          </motion.div>
        )}
      </div>
      <div className="flex-1">
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <p className="font-medium text-white">{message}</p>
          {description && <p className="text-sm text-gray-300 mt-1">{description}</p>}
        </motion.div>
      </div>
    </div>
  );

  switch (type) {
    case "success":
      toast.success(toastContent);
      break;
    case "error":
      toast.error(toastContent);
      break;
    case "info":
      toast.info(toastContent);
      break;
    case "warning":
      toast.warning(toastContent);
      break;
    default:
      toast(toastContent);
  }
}

export { ModernToaster };
