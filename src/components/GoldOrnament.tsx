import { motion } from "framer-motion";

interface GoldOrnamentProps {
  className?: string;
  variant?: "divider" | "corner" | "frame";
}

export const GoldOrnament = ({ className = "", variant = "divider" }: GoldOrnamentProps) => {
  if (variant === "divider") {
    return (
      <div className={`flex items-center justify-center gap-3 ${className}`}>
        <motion.div 
          className="h-px flex-1 max-w-[100px] bg-gradient-to-r from-transparent via-gold to-transparent"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
        <motion.div
          className="w-2 h-2 bg-gold rotate-45"
          initial={{ scale: 0, rotate: 0 }}
          animate={{ scale: 1, rotate: 45 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        />
        <motion.div 
          className="h-px flex-1 max-w-[100px] bg-gradient-to-r from-transparent via-gold to-transparent"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
      </div>
    );
  }

  if (variant === "corner") {
    return (
      <svg 
        className={`w-16 h-16 text-gold ${className}`}
        viewBox="0 0 100 100" 
        fill="none"
      >
        <path
          d="M10 90 L10 50 Q10 10 50 10 L90 10"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        />
        <circle cx="50" cy="10" r="4" fill="currentColor" />
        <circle cx="10" cy="50" r="4" fill="currentColor" />
      </svg>
    );
  }

  if (variant === "frame") {
    return (
      <div className={`absolute inset-0 pointer-events-none ${className}`}>
        {/* Top Left */}
        <div className="absolute top-4 left-4 w-20 h-20 border-l-2 border-t-2 border-gold/40" />
        {/* Top Right */}
        <div className="absolute top-4 right-4 w-20 h-20 border-r-2 border-t-2 border-gold/40" />
        {/* Bottom Left */}
        <div className="absolute bottom-4 left-4 w-20 h-20 border-l-2 border-b-2 border-gold/40" />
        {/* Bottom Right */}
        <div className="absolute bottom-4 right-4 w-20 h-20 border-r-2 border-b-2 border-gold/40" />
      </div>
    );
  }

  return null;
};
