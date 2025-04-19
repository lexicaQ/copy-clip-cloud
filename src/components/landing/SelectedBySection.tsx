
import React, { useState } from "react";
import { motion } from "framer-motion";
import BrandList from "./BrandList";
import FilePreview from "../preview/FilePreview";
import FileSettings from "../preview/FileSettings";
import { FileType } from "../preview/FilePreview";

interface Brand {
  id: string;
  name: string;
  logo: string;
  description: string;
  file: {
    id: string;
    name: string;
    type: FileType;
    url: string;
    thumbnail?: string;
    size?: number;
    createdAt?: string;
  };
}

const dummyBrands: Brand[] = [
  {
    id: "1",
    name: "TechCorp Global",
    logo: "",
    description: "Leading software development company",
    file: {
      id: "file1",
      name: "Product Showcase.pdf",
      type: "pdf",
      url: "/placeholder.svg",
      size: 4582400,
      createdAt: "2023-12-10"
    }
  },
  {
    id: "2",
    name: "Infinite Solutions",
    logo: "",
    description: "Business intelligence and analytics",
    file: {
      id: "file2",
      name: "Analytics Dashboard.png",
      type: "image",
      url: "/placeholder.svg",
      thumbnail: "/placeholder.svg",
      size: 1843200,
      createdAt: "2023-11-25"
    }
  },
  {
    id: "3",
    name: "Nexus Creative",
    logo: "",
    description: "Digital design and marketing agency",
    file: {
      id: "file3",
      name: "Brand Guidelines.pdf",
      type: "pdf",
      url: "/placeholder.svg",
      size: 7864320,
      createdAt: "2024-01-05"
    }
  },
  {
    id: "4",
    name: "Quantum Dynamics",
    logo: "",
    description: "Advanced engineering solutions",
    file: {
      id: "file4",
      name: "Technical Specifications.docx",
      type: "document",
      url: "/placeholder.svg",
      size: 2457600,
      createdAt: "2024-02-14"
    }
  },
  {
    id: "5",
    name: "Aurora Systems",
    logo: "",
    description: "Cloud infrastructure and services",
    file: {
      id: "file5",
      name: "System Architecture.png",
      type: "image",
      url: "/placeholder.svg",
      thumbnail: "/placeholder.svg",
      size: 3686400,
      createdAt: "2023-12-30"
    }
  },
  {
    id: "6",
    name: "Vertex Media",
    logo: "",
    description: "Content creation and distribution",
    file: {
      id: "file6",
      name: "Media Presentation.mp4",
      type: "video",
      url: "/placeholder.svg",
      size: 12582912,
      createdAt: "2024-03-02"
    }
  },
  {
    id: "7",
    name: "Synergy Innovations",
    logo: "",
    description: "Product development and research",
    file: {
      id: "file7",
      name: "Research Findings.pdf",
      type: "pdf",
      url: "/placeholder.svg",
      size: 5435520,
      createdAt: "2024-02-18"
    }
  },
  {
    id: "8",
    name: "Horizon Partners",
    logo: "",
    description: "Strategic consulting and investments",
    file: {
      id: "file8",
      name: "Investment Strategy.docx",
      type: "document",
      url: "/placeholder.svg",
      size: 3145728,
      createdAt: "2024-01-22"
    }
  }
];

const SelectedBySection: React.FC = () => {
  const [selectedBrand, setSelectedBrand] = useState<Brand>(dummyBrands[0]);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const handleSaveSettings = (fileId: string, settings: any) => {
    console.log("Saving settings for file", fileId, settings);
    // In a real application, this would update the file settings in the database
  };

  // Create a handler function that accepts a Brand and sets it as the selected brand
  const handleSelectBrand = (brand: Brand) => {
    setSelectedBrand(brand);
  };

  return (
    <motion.section
      className="py-24"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <h2 className="text-3xl font-bold text-gradient mb-4">
            Selected by Leading Brands
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Trusted by innovative companies worldwide to streamline content management 
            and enhance workflow efficiency
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-1"
          >
            <BrandList 
              brands={dummyBrands} 
              onSelectBrand={handleSelectBrand} // Using the new handler function
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-span-2"
          >
            <FilePreview 
              file={selectedBrand.file}
              onOpenSettings={() => setIsSettingsOpen(true)}
            />
            
            <motion.div
              className="mt-4 p-4 bg-white/5 border border-white/10 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <span className="text-sm font-semibold">
                    {selectedBrand.name.substring(0, 2).toUpperCase()}
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-medium">{selectedBrand.name}</h3>
                  <p className="text-sm text-white/70">{selectedBrand.description}</p>
                  <p className="text-xs text-white/50 mt-1">
                    Using CopyClipCloud for streamlined content management and sharing
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      <FileSettings 
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        file={selectedBrand?.file || null}
        onSaveSettings={handleSaveSettings}
      />
    </motion.section>
  );
};

export default SelectedBySection;
