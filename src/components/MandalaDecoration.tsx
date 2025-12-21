import { motion } from "framer-motion";

interface MandalaDecorationProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  color?: string;
}

export const MandalaDecoration = ({ 
  className = "", 
  size = "md",
  color = "gold" 
}: MandalaDecorationProps) => {
  const sizeClasses = {
    sm: "w-32 h-32",
    md: "w-48 h-48",
    lg: "w-64 h-64",
  };

  const colorClass = color === "gold" ? "text-gold" : color === "maroon" ? "text-royal-maroon" : "text-current";

  return (
    <motion.div 
      className={`${sizeClasses[size]} ${colorClass} ${className}`}
      initial={{ opacity: 0, scale: 0.8, rotate: -180 }}
      animate={{ opacity: 0.15, scale: 1, rotate: 0 }}
      transition={{ duration: 2, ease: "easeOut" }}
    >
      <motion.svg 
        viewBox="0 0 200 200" 
        className="w-full h-full animate-spin-slow"
        style={{ animationDuration: "60s" }}
      >
        {/* Outer circle */}
        <circle cx="100" cy="100" r="95" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.6" />
        <circle cx="100" cy="100" r="85" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
        <circle cx="100" cy="100" r="75" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.4" />
        <circle cx="100" cy="100" r="65" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
        
        {/* Petals */}
        {Array.from({ length: 12 }).map((_, i) => (
          <g key={i} transform={`rotate(${i * 30} 100 100)`}>
            <path
              d="M100 10 Q115 50 100 100 Q85 50 100 10"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              opacity="0.5"
            />
          </g>
        ))}
        
        {/* Inner decorative elements */}
        {Array.from({ length: 8 }).map((_, i) => (
          <g key={`inner-${i}`} transform={`rotate(${i * 45} 100 100)`}>
            <circle cx="100" cy="30" r="3" fill="currentColor" opacity="0.4" />
          </g>
        ))}
        
        {/* Center */}
        <circle cx="100" cy="100" r="15" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.6" />
        <circle cx="100" cy="100" r="8" fill="currentColor" opacity="0.3" />
      </motion.svg>
    </motion.div>
  );
};
