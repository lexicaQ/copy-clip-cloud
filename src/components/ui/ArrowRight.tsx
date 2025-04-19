
import { ArrowRight as LucideArrowRight } from "lucide-react";
import React from "react";

interface ArrowRightProps {
  className?: string;
}

const ArrowRight = ({ className }: ArrowRightProps) => {
  return <LucideArrowRight className={className} />;
};

export default ArrowRight;
