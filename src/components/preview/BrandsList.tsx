
import React from "react";
import { motion } from "framer-motion";

export interface Brand {
  id: string;
  name: string;
  logo?: string;
  testimonial?: string;
  rating?: number;
}

interface BrandsListProps {
  brands: Brand[];
  onSelect?: (brand: Brand) => void;
  selectedId?: string;
  className?: string;
}

const BrandsList: React.FC<BrandsListProps> = ({ 
  brands, 
  onSelect, 
  selectedId,
  className 
}) => {
  return (
    <motion.div 
      className={`space-y-1 ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      {brands.map((brand) => (
        <motion.button
          key={brand.id}
          className={`w-full px-3 py-2 flex items-center gap-3 rounded-lg text-left transition-all ${
            selectedId === brand.id 
              ? 'bg-white/10 text-white' 
              : 'hover:bg-white/5 text-white/70'
          }`}
          onClick={() => onSelect?.(brand)}
          whileHover={{ x: 3 }}
          whileTap={{ scale: 0.98 }}
        >
          {brand.logo ? (
            <img 
              src={brand.logo} 
              alt={brand.name} 
              className="w-6 h-6 rounded-md object-cover"
            />
          ) : (
            <div className="w-6 h-6 rounded-md bg-white/10 flex items-center justify-center text-xs font-medium">
              {brand.name.charAt(0)}
            </div>
          )}
          <div className="min-w-0 flex-1">
            <h3 className="text-sm font-medium truncate">{brand.name}</h3>
            {brand.rating && (
              <div className="flex items-center gap-0.5 mt-1">
                {[...Array(5)].map((_, i) => (
                  <div 
                    key={i} 
                    className={`w-1.5 h-1.5 rounded-full ${i < brand.rating! ? 'bg-white/80' : 'bg-white/10'}`}
                  />
                ))}
              </div>
            )}
          </div>
        </motion.button>
      ))}
    </motion.div>
  );
};

export default BrandsList;
