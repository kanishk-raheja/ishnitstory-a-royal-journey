import { motion } from "framer-motion";

interface CurtainRevealProps {
  isOpen: boolean;
  onAnimationComplete?: () => void;
}

export const CurtainReveal = ({ isOpen, onAnimationComplete }: CurtainRevealProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-40 pointer-events-none">
      {/* Left Curtain */}
      <motion.div
        className="absolute top-0 left-0 w-1/2 h-full bg-gradient-royal"
        initial={{ x: 0 }}
        animate={{ x: "-100%" }}
        transition={{ duration: 1.2, ease: [0.645, 0.045, 0.355, 1] }}
        onAnimationComplete={onAnimationComplete}
      >
        {/* Decorative Pattern */}
        <div className="absolute inset-0 pattern-overlay" />
        
        {/* Gold Edge */}
        <div className="absolute top-0 right-0 w-8 h-full bg-gradient-to-l from-gold/30 to-transparent" />
        
        {/* Decorative Line */}
        <motion.div
          className="absolute top-0 right-4 w-0.5 h-full bg-gold/50"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.5 }}
        />
      </motion.div>

      {/* Right Curtain */}
      <motion.div
        className="absolute top-0 right-0 w-1/2 h-full bg-gradient-royal"
        initial={{ x: 0 }}
        animate={{ x: "100%" }}
        transition={{ duration: 1.2, ease: [0.645, 0.045, 0.355, 1] }}
      >
        {/* Decorative Pattern */}
        <div className="absolute inset-0 pattern-overlay" />
        
        {/* Gold Edge */}
        <div className="absolute top-0 left-0 w-8 h-full bg-gradient-to-r from-gold/30 to-transparent" />
        
        {/* Decorative Line */}
        <motion.div
          className="absolute top-0 left-4 w-0.5 h-full bg-gold/50"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.5 }}
        />
      </motion.div>
    </div>
  );
};
