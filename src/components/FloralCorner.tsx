import { motion } from "framer-motion";
import floralCorner from "@/assets/floral-corner.png";

interface FloralCornerProps {
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  size?: "sm" | "md" | "lg";
  delay?: number;
  opacity?: number;
}

export const FloralCorner = ({ 
  position, 
  size = "md",
  delay = 0.4,
  opacity = 0.8
}: FloralCornerProps) => {
  const sizeClasses = {
    sm: "w-20 h-20 md:w-24 md:h-24",
    md: "w-28 h-28 md:w-36 md:h-36",
    lg: "w-32 h-32 md:w-44 md:h-44",
  };

  const positionClasses = {
    "top-left": "top-0 left-0",
    "top-right": "top-0 right-0",
    "bottom-left": "bottom-0 left-0",
    "bottom-right": "bottom-0 right-0",
  };

  const rotations = {
    "top-left": 0,
    "top-right": 90,
    "bottom-left": -90,
    "bottom-right": 180,
  };

  const initialPos = {
    "top-left": { x: -20, y: -20 },
    "top-right": { x: 20, y: -20 },
    "bottom-left": { x: -20, y: 20 },
    "bottom-right": { x: 20, y: 20 },
  };

  return (
    <motion.div
      className={`absolute ${positionClasses[position]} ${sizeClasses[size]} pointer-events-none z-10 overflow-hidden`}
      initial={{ opacity: 0, ...initialPos[position] }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ delay, duration: 0.8 }}
    >
      <img 
        src={floralCorner} 
        alt="" 
        className="w-full h-full object-contain"
        style={{ 
          transform: `rotate(${rotations[position]}deg)`,
          opacity: opacity
        }}
      />
    </motion.div>
  );
};
