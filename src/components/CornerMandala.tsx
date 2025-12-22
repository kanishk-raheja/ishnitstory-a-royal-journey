import { motion } from "framer-motion";

interface CornerMandalaProps {
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  color?: string;
  size?: "sm" | "md" | "lg";
  delay?: number;
}

export const CornerMandala = ({ 
  position, 
  color = "#c9a050", 
  size = "md",
  delay = 0.4 
}: CornerMandalaProps) => {
  const sizeClasses = {
    sm: "w-16 h-16 md:w-20 md:h-20",
    md: "w-20 h-20 md:w-28 md:h-28",
    lg: "w-24 h-24 md:w-32 md:h-32",
  };

  const positionClasses = {
    "top-left": "top-0 left-0",
    "top-right": "top-0 right-0",
    "bottom-left": "bottom-0 left-0",
    "bottom-right": "bottom-0 right-0",
  };

  const transforms = {
    "top-left": { rotate: 0 },
    "top-right": { rotate: 90 },
    "bottom-left": { rotate: -90 },
    "bottom-right": { rotate: 180 },
  };

  const initialPos = {
    "top-left": { x: -20, y: -20 },
    "top-right": { x: 20, y: -20 },
    "bottom-left": { x: -20, y: 20 },
    "bottom-right": { x: 20, y: 20 },
  };

  return (
    <motion.div
      className={`absolute ${positionClasses[position]} ${sizeClasses[size]} pointer-events-none z-10`}
      initial={{ opacity: 0, ...initialPos[position] }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ delay, duration: 0.8 }}
      style={{ transform: `rotate(${transforms[position].rotate}deg)` }}
    >
      <svg viewBox="0 0 100 100" className="w-full h-full">
        {/* Outer decorative arc */}
        <path
          d="M5 50 Q5 5 50 5"
          stroke={color}
          strokeWidth="1.5"
          fill="none"
          opacity="0.7"
        />
        <path
          d="M10 50 Q10 10 50 10"
          stroke={color}
          strokeWidth="1"
          fill="none"
          opacity="0.5"
        />
        
        {/* Mandala petals */}
        <g opacity="0.6">
          <ellipse cx="20" cy="20" rx="8" ry="14" fill={color} opacity="0.4" transform="rotate(-45 20 20)" />
          <ellipse cx="30" cy="15" rx="6" ry="12" fill={color} opacity="0.3" transform="rotate(-30 30 15)" />
          <ellipse cx="15" cy="30" rx="6" ry="12" fill={color} opacity="0.3" transform="rotate(-60 15 30)" />
        </g>
        
        {/* Center floral detail */}
        <circle cx="12" cy="12" r="4" fill={color} opacity="0.6" />
        <circle cx="12" cy="12" r="2" fill={color} opacity="0.8" />
        
        {/* Small decorative dots */}
        <circle cx="25" cy="8" r="2" fill={color} opacity="0.5" />
        <circle cx="8" cy="25" r="2" fill={color} opacity="0.5" />
        <circle cx="35" cy="12" r="1.5" fill={color} opacity="0.4" />
        <circle cx="12" cy="35" r="1.5" fill={color} opacity="0.4" />
        
        {/* Decorative curves */}
        <path
          d="M20 5 Q25 15 15 20"
          stroke={color}
          strokeWidth="0.8"
          fill="none"
          opacity="0.4"
        />
        <path
          d="M5 20 Q15 25 20 15"
          stroke={color}
          strokeWidth="0.8"
          fill="none"
          opacity="0.4"
        />
      </svg>
    </motion.div>
  );
};
