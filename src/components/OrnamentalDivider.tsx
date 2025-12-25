import { motion } from "framer-motion";

interface OrnamentalDividerProps {
  color?: string;
  className?: string;
}

export const OrnamentalDivider = ({ color = "#c9a050", className = "" }: OrnamentalDividerProps) => {
  return (
    <motion.div
      className={`flex items-center justify-center gap-2 ${className}`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5, duration: 0.6 }}
    >
      {/* Left decorative line */}
      <motion.div
        className="h-px w-8 md:w-12"
        style={{ background: `linear-gradient(90deg, transparent, ${color})` }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.6, duration: 0.4 }}
      />
      
      {/* Left paisley */}
      <motion.svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        initial={{ rotate: -90, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
      >
        <path
          d="M12 2C8 2 4 6 4 12C4 18 8 22 12 22C14 22 16 20 16 18C16 16 14 14 12 14C10 14 8 16 8 18"
          fill="none"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </motion.svg>

      {/* Center diamond */}
      <motion.div
        className="w-2 h-2 rotate-45"
        style={{ backgroundColor: color }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.75, type: "spring" }}
      />

      {/* Right paisley */}
      <motion.svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        style={{ transform: "scaleX(-1)" }}
        initial={{ rotate: 90, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
      >
        <path
          d="M12 2C8 2 4 6 4 12C4 18 8 22 12 22C14 22 16 20 16 18C16 16 14 14 12 14C10 14 8 16 8 18"
          fill="none"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </motion.svg>

      {/* Right decorative line */}
      <motion.div
        className="h-px w-8 md:w-12"
        style={{ background: `linear-gradient(90deg, ${color}, transparent)` }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.6, duration: 0.4 }}
      />
    </motion.div>
  );
};
