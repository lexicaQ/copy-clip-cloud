
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, FileImage, FileText, FileVideo, Image } from "lucide-react";
import { Button } from "@/components/ui/button";
import BrandsList from "../preview/BrandsList";
import PreviewGrid from "../preview/PreviewGrid";
import FeaturedPreview from "../preview/FeaturedPreview";
import { Brand } from "../preview/BrandsList";
import { PreviewItem } from "../preview/PreviewGrid";

// Sample data - in real application, this would come from an API
const brands: Brand[] = [
  { 
    id: "brand1", 
    name: "Acme Inc", 
    testimonial: "This tool transformed our workflow completely. The interface is intuitive and the features are powerful.", 
    rating: 5 
  },
  { 
    id: "brand2", 
    name: "TechGiant", 
    testimonial: "We've increased productivity by 35% since implementing this solution.", 
    rating: 5 
  },
  { 
    id: "brand3", 
    name: "StartupHQ", 
    testimonial: "As a startup, we needed something flexible yet powerful - this exceeded our expectations.",
    rating: 4 
  },
  { 
    id: "brand4", 
    name: "GlobalCorp", 
    testimonial: "The secure environment and collaborative features make this our top choice.",
    rating: 5
  },
  { 
    id: "brand5", 
    name: "Design Studio", 
    testimonial: "The design system is elegant and the customization options are exactly what we needed.",
    rating: 4
  },
  { 
    id: "brand6", 
    name: "DataSystems", 
    testimonial: "We process thousands of files daily and this system handles it flawlessly.",
    rating: 5
  },
  { 
    id: "brand7", 
    name: "CreativeTeam", 
    testimonial: "The preview functionality has revolutionized how we share and approve creative assets.",
    rating: 4
  },
  { 
    id: "brand8", 
    name: "Enterprise Solutions", 
    testimonial: "After extensive evaluation, this solution provided the best balance of features, security and performance.",
    rating: 5
  },
  { 
    id: "brand9", 
    name: "CloudServices", 
    testimonial: "Implementation was smooth and the system scales perfectly with our growing team.",
    rating: 4
  },
  { 
    id: "brand10", 
    name: "MediaGroup", 
    testimonial: "The media preview system is outstanding - it handles all our formats effortlessly.",
    rating: 5
  }
];

// Sample preview items
const getPreviewItems = (brandId: string): PreviewItem[] => {
  const baseItems: PreviewItem[] = [
    {
      id: "item1",
      title: "Project Overview.pdf",
      type: "pdf",
      size: "2.4 MB",
      date: "2023-09-15",
      author: "Alex Johnson",
      company: brandId === "brand1" ? "Acme Inc" : brandId === "brand2" ? "TechGiant" : "StartupHQ"
    },
    {
      id: "item2",
      title: "Presentation.pdf",
      type: "pdf",
      size: "8.7 MB",
      date: "2023-10-20",
      author: "Maria Garcia",
      company: brandId === "brand1" ? "Acme Inc" : brandId === "brand2" ? "TechGiant" : "StartupHQ"
    },
    {
      id: "item3",
      title: "Dashboard Mockup",
      type: "image",
      thumbnail: "https://source.unsplash.com/random/800x600/?dashboard",
      size: "3.2 MB",
      date: "2023-11-05",
      author: "James Wilson",
      company: brandId === "brand1" ? "Acme Inc" : brandId === "brand2" ? "TechGiant" : "StartupHQ"
    },
    {
      id: "item4",
      title: "Product Demo",
      type: "video",
      thumbnail: "https://source.unsplash.com/random/800x600/?product",
      size: "18.5 MB",
      date: "2023-11-15",
      author: "Sarah Thompson",
      company: brandId === "brand1" ? "Acme Inc" : brandId === "brand2" ? "TechGiant" : "StartupHQ"
    },
    {
      id: "item5",
      title: "Analytics Report",
      type: "document",
      size: "1.3 MB",
      date: "2023-12-01",
      author: "David Chen",
      company: brandId === "brand1" ? "Acme Inc" : brandId === "brand2" ? "TechGiant" : "StartupHQ"
    },
    {
      id: "item6",
      title: "UI Components",
      type: "image",
      thumbnail: "https://source.unsplash.com/random/800x600/?ui",
      size: "2.8 MB",
      date: "2023-12-10",
      author: "Emily Rodriguez",
      company: brandId === "brand1" ? "Acme Inc" : brandId === "brand2" ? "TechGiant" : "StartupHQ"
    },
    {
      id: "item7",
      title: "Customer Journey Map",
      type: "image",
      thumbnail: "https://source.unsplash.com/random/800x600/?journey",
      size: "1.5 MB",
      date: "2024-01-05",
      author: "Michael Brown",
      company: brandId === "brand1" ? "Acme Inc" : brandId === "brand2" ? "TechGiant" : "StartupHQ"
    },
    {
      id: "item8",
      title: "Feature Roadmap",
      type: "document",
      size: "890 KB",
      date: "2024-01-20",
      author: "Jennifer Lee",
      company: brandId === "brand1" ? "Acme Inc" : brandId === "brand2" ? "TechGiant" : "StartupHQ"
    },
    {
      id: "item9",
      title: "Training Materials",
      type: "pdf",
      size: "5.2 MB",
      date: "2024-02-01",
      author: "Robert Taylor",
      company: brandId === "brand1" ? "Acme Inc" : brandId === "brand2" ? "TechGiant" : "StartupHQ"
    },
    {
      id: "item10",
      title: "System Architecture",
      type: "image",
      thumbnail: "https://source.unsplash.com/random/800x600/?architecture",
      size: "1.9 MB",
      date: "2024-02-15",
      author: "Amanda Wilson",
      company: brandId === "brand1" ? "Acme Inc" : brandId === "brand2" ? "TechGiant" : "StartupHQ"
    }
  ];

  // Customize thumbnails based on brandId for more variety
  return baseItems.map(item => ({
    ...item,
    thumbnail: item.thumbnail || 
      (item.type === "image" ? `https://source.unsplash.com/random/800x600/?${brandId}-${item.id}` : undefined)
  }));
};

const FeaturePreview = () => {
  const [selectedBrand, setSelectedBrand] = useState<Brand>(brands[0]);
  const [previewItems, setPreviewItems] = useState<PreviewItem[]>(getPreviewItems(brands[0].id));

  const handleSelectBrand = (brand: Brand) => {
    setSelectedBrand(brand);
    setPreviewItems(getPreviewItems(brand.id));
  };

  return (
    <div className="py-24 relative">
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl font-bold mb-4 text-gradient"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Selected By Leading Organizations
          </motion.h2>
          <motion.p
            className="text-white/70 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            See how organizations like yours use our platform to enhance productivity, 
            streamline workflows, and collaborate more effectively.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left sidebar with brands list */}
          <motion.div 
            className="lg:col-span-3"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="sticky top-24">
              <h3 className="text-lg font-medium mb-4 text-white">Organizations</h3>
              <BrandsList 
                brands={brands}
                onSelect={handleSelectBrand}
                selectedId={selectedBrand.id}
                className="mb-6"
              />
              
              {selectedBrand && (
                <motion.div 
                  className="mt-8 p-4 rounded-xl border border-white/10 bg-white/5"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <h4 className="text-sm font-medium mb-2">Testimonial</h4>
                  <p className="text-sm text-white/70 italic">"{selectedBrand.testimonial}"</p>
                  
                  <div className="flex items-center gap-0.5 mt-4">
                    {[...Array(5)].map((_, i) => (
                      <div 
                        key={i} 
                        className={`w-2 h-2 rounded-full ${i < (selectedBrand.rating || 0) ? 'bg-white/80' : 'bg-white/10'}`}
                      />
                    ))}
                    <span className="text-xs text-white/50 ml-2">{selectedBrand.rating}/5</span>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
          
          {/* Main content area */}
          <motion.div 
            className="lg:col-span-9"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {/* Featured preview */}
            <FeaturedPreview
              image="https://source.unsplash.com/random/1200x800/?dashboard"
              title={`${selectedBrand.name} Dashboard`}
              subtitle="Enterprise Solution"
              description="Interactive visualization of data streams with real-time analytics and collaborative editing features."
              className="mb-8"
            />
            
            {/* Grid of preview items */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium text-white">Recent Files</h3>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="text-xs h-8 px-3 bg-white/5 hover:bg-white/10 border-white/10"
                >
                  View All
                  <ArrowRight className="w-3 h-3 ml-2" />
                </Button>
              </div>
              <PreviewGrid items={previewItems} />
            </div>
            
            {/* Additional info section */}
            <motion.div 
              className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              {[
                { 
                  icon: Image,
                  title: "Media Preview",
                  description: "High-quality thumbnails and previews for all media types."
                },
                { 
                  icon: FileText,
                  title: "Document Viewer",
                  description: "Instantly preview documents without downloading."
                },
                { 
                  icon: FileVideo,
                  title: "Video Playback",
                  description: "Seamless video playback with advanced controls."
                }
              ].map((feature, i) => (
                <div 
                  key={i}
                  className="p-5 rounded-xl border border-white/10 bg-white/5"
                >
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center mb-4">
                    <feature.icon className="w-5 h-5 text-white/80" />
                  </div>
                  <h3 className="text-lg font-medium mb-2">{feature.title}</h3>
                  <p className="text-sm text-white/70">{feature.description}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default FeaturePreview;
