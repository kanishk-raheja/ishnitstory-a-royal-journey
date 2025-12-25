import { motion } from "framer-motion";

interface FestiveCoupleProps {
  variant?: "mehndi" | "haldi" | "night";
  className?: string;
}

export const FestiveCouple = ({ variant = "mehndi", className = "" }: FestiveCoupleProps) => {
  const colorSchemes = {
    mehndi: { bride: "#8b2942", groom: "#6b7c5c", accent: "#d4a634", glow: "#6b7c5c" },
    haldi: { bride: "#d4a634", groom: "#8b2942", accent: "#f5c542", glow: "#f5c542" },
    night: { bride: "#c9a050", groom: "#8b5cf6", accent: "#e0c080", glow: "#c9a050" },
  };

  const scheme = colorSchemes[variant];

  return (
    <motion.div
      className={`relative pointer-events-none ${className}`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5, duration: 0.8 }}
    >
      {/* Soft glow behind couple */}
      <motion.div
        className="absolute inset-0 blur-2xl"
        style={{
          background: `radial-gradient(ellipse, ${scheme.glow}30 0%, transparent 70%)`,
        }}
        animate={{ opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 3, repeat: Infinity }}
      />

      <svg
        viewBox="0 0 120 140"
        className="w-full h-full"
        fill="none"
      >
        {/* Bride silhouette with lehenga */}
        <g>
          {/* Head */}
          <motion.ellipse
            cx="40"
            cy="28"
            rx="12"
            ry="14"
            fill={scheme.bride}
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          />
          {/* Maang tikka */}
          <motion.circle
            cx="40"
            cy="18"
            r="2"
            fill={scheme.accent}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.9 }}
          />
          {/* Dupatta flowing */}
          <motion.path
            d="M28 35 Q20 50 18 80 Q16 100 20 120 L50 130 Q55 100 50 80 Q48 55 45 40 Z"
            fill={scheme.accent}
            opacity="0.7"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.7 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          />
          {/* Body/Blouse */}
          <motion.path
            d="M30 40 Q28 50 30 60 L50 60 Q52 50 50 40 Z"
            fill={scheme.bride}
            initial={{ y: -5, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.65 }}
          />
          {/* Lehenga flare */}
          <motion.path
            d="M25 60 Q15 90 10 130 L70 130 Q65 90 55 60 Z"
            fill={scheme.bride}
            initial={{ scaleY: 0, originY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          />
          {/* Lehenga border decoration */}
          <motion.path
            d="M12 125 Q40 120 68 125"
            stroke={scheme.accent}
            strokeWidth="3"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 1.1, duration: 0.5 }}
          />
          {/* Arm with bangles */}
          <motion.path
            d="M28 45 Q18 55 22 70"
            stroke={scheme.bride}
            strokeWidth="5"
            strokeLinecap="round"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 0.8 }}
          />
          {/* Bangles */}
          {[60, 65, 70].map((y, i) => (
            <motion.circle
              key={i}
              cx="22"
              cy={y}
              r="2"
              fill={scheme.accent}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1 + i * 0.1 }}
            />
          ))}
        </g>

        {/* Groom silhouette with kurta */}
        <g>
          {/* Head with turban hint */}
          <motion.ellipse
            cx="80"
            cy="25"
            rx="11"
            ry="13"
            fill={scheme.groom}
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          />
          {/* Turban/Pagdi */}
          <motion.path
            d="M69 20 Q72 10 80 8 Q88 10 91 20 Q88 15 80 14 Q72 15 69 20 Z"
            fill={scheme.accent}
            initial={{ y: -5, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.75 }}
          />
          {/* Safa tail */}
          <motion.path
            d="M91 18 Q95 25 92 35"
            stroke={scheme.accent}
            strokeWidth="3"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 0.85 }}
          />
          {/* Body/Kurta */}
          <motion.path
            d="M68 38 Q65 70 65 130 L95 130 Q95 70 92 38 Z"
            fill={scheme.groom}
            initial={{ scaleY: 0, originY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          />
          {/* Kurta collar/neckline */}
          <motion.path
            d="M72 38 L80 50 L88 38"
            stroke={scheme.accent}
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 0.9 }}
          />
          {/* Kurta button line */}
          <motion.line
            x1="80"
            y1="50"
            x2="80"
            y2="100"
            stroke={scheme.accent}
            strokeWidth="1.5"
            strokeDasharray="4 6"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 1 }}
          />
          {/* Arm */}
          <motion.path
            d="M92 45 Q100 55 98 70"
            stroke={scheme.groom}
            strokeWidth="5"
            strokeLinecap="round"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 0.8 }}
          />
        </g>

        {/* Hands joining in the middle */}
        <motion.ellipse
          cx="60"
          cy="75"
          rx="8"
          ry="5"
          fill={scheme.accent}
          opacity="0.8"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.2, type: "spring" }}
        />
      </svg>
    </motion.div>
  );
};
