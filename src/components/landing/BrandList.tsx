
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

interface Brand {
  id: string;
  name: string;
  logo: string;
  description: string;
}

interface BrandListProps {
  brands: Brand[];
  onSelectBrand: (brand: Brand) => void;
}

const BrandList = ({ brands, onSelectBrand }: BrandListProps) => {
  return (
    <Card className="bg-white/5 border-white/10 backdrop-blur-sm h-[500px] overflow-auto scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
      <CardContent className="p-0">
        <div className="p-4 text-sm font-medium text-white/80">
          Selected by leading brands
        </div>
        <Separator className="bg-white/10" />
        
        <div className="py-1">
          {brands.map((brand, index) => (
            <motion.div
              key={brand.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}
              className="px-4 py-3 cursor-pointer border-b border-white/5 last:border-0"
              onClick={() => onSelectBrand(brand)}
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center overflow-hidden">
                  {brand.logo ? (
                    <img 
                      src={brand.logo} 
                      alt={`${brand.name} logo`} 
                      className="w-full h-full object-cover" 
                    />
                  ) : (
                    <span className="text-xs font-semibold text-white/90">
                      {brand.name.substring(0, 2).toUpperCase()}
                    </span>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium text-white truncate">{brand.name}</div>
                  <div className="text-xs text-white/60 line-clamp-1">{brand.description}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default BrandList;
