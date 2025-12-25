import { motion } from "framer-motion";

interface FestiveCoupleProps {
  variant?: "mehndi" | "haldi" | "night";
  className?: string;
}

export const FestiveCouple = ({ variant = "mehndi", className = "" }: FestiveCoupleProps) => {
  const colorSchemes = {
    mehndi: { 
      bride: "#3b82f6", 
      brideAccent: "#1d4ed8",
      groom: "#1e40af", 
      groomAccent: "#2563eb",
      accent: "#c9a050", 
      glow: "#60a5fa",
      jewelry: "#fbbf24",
      dupatta: "#93c5fd"
    },
    haldi: { 
      bride: "#ec4899", 
      brideAccent: "#db2777",
      groom: "#be185d", 
      groomAccent: "#f472b6",
      accent: "#c9a050", 
      glow: "#f9a8d4",
      jewelry: "#fbbf24",
      dupatta: "#fbcfe8"
    },
    night: { 
      bride: "#c9a050", 
      brideAccent: "#a3832e",
      groom: "#8b5cf6", 
      groomAccent: "#a78bfa",
      accent: "#e0c080", 
      glow: "#c9a050",
      jewelry: "#fef3c7",
      dupatta: "#ddd6fe"
    },
  };

  const scheme = colorSchemes[variant];

  return (
    <motion.div
      className={`relative pointer-events-none ${className}`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5, duration: 0.8 }}
    >
      {/* Multi-layered glow effect */}
      <motion.div
        className="absolute inset-0 blur-3xl"
        style={{
          background: `radial-gradient(ellipse, ${scheme.glow}40 0%, transparent 70%)`,
        }}
        animate={{ opacity: [0.5, 0.8, 0.5], scale: [1, 1.1, 1] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div
        className="absolute inset-0 blur-xl"
        style={{
          background: `radial-gradient(ellipse, ${scheme.accent}30 0%, transparent 60%)`,
        }}
        animate={{ opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
      />

      <svg
        viewBox="0 0 140 160"
        className="w-full h-full"
        fill="none"
      >
        {/* Decorative backdrop circle */}
        <motion.circle
          cx="70"
          cy="85"
          r="55"
          fill="none"
          stroke={scheme.accent}
          strokeWidth="0.5"
          opacity="0.3"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        />
        <motion.circle
          cx="70"
          cy="85"
          r="48"
          fill="none"
          stroke={scheme.accent}
          strokeWidth="0.3"
          opacity="0.2"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        />

        {/* Bride silhouette with detailed lehenga */}
        <g>
          {/* Hair bun with flowers */}
          <motion.ellipse
            cx="45"
            cy="22"
            rx="10"
            ry="8"
            fill={scheme.brideAccent}
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.55 }}
          />
          {/* Flowers in hair */}
          {[0, 1, 2].map((i) => (
            <motion.circle
              key={`hair-flower-${i}`}
              cx={38 + i * 7}
              cy={16}
              r={2}
              fill={scheme.jewelry}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.9 + i * 0.1, type: "spring" }}
            />
          ))}
          
          {/* Head */}
          <motion.ellipse
            cx="45"
            cy="32"
            rx="11"
            ry="13"
            fill={scheme.bride}
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          />
          
          {/* Maang tikka chain */}
          <motion.path
            d="M38 22 Q45 18 52 22"
            fill="none"
            stroke={scheme.jewelry}
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 0.85 }}
          />
          {/* Maang tikka pendant */}
          <motion.circle
            cx="45"
            cy="20"
            r="2.5"
            fill={scheme.jewelry}
            initial={{ scale: 0 }}
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ delay: 0.9, duration: 2, repeat: Infinity }}
          />
          
          {/* Jhumka earrings */}
          {[34, 56].map((x, i) => (
            <motion.g key={`earring-${i}`}>
              <motion.circle
                cx={x}
                cy={35}
                r={2}
                fill={scheme.jewelry}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1 + i * 0.1 }}
              />
              <motion.ellipse
                cx={x}
                cy={39}
                rx={2.5}
                ry={3}
                fill={scheme.jewelry}
                initial={{ scale: 0 }}
                animate={{ scale: 1, y: [0, 1, 0] }}
                transition={{ delay: 1.1 + i * 0.1, y: { duration: 2, repeat: Infinity } }}
              />
            </motion.g>
          ))}
          
          {/* Necklace */}
          <motion.path
            d="M35 48 Q45 55 55 48"
            fill="none"
            stroke={scheme.jewelry}
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 0.95 }}
          />
          
          {/* Dupatta flowing elegantly */}
          <motion.path
            d="M30 42 Q18 55 15 85 Q12 110 18 140 L58 150 Q62 115 55 85 Q52 60 48 45 Z"
            fill={scheme.dupatta}
            opacity="0.6"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.6 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          />
          {/* Dupatta border */}
          <motion.path
            d="M15 85 Q12 110 18 140"
            fill="none"
            stroke={scheme.accent}
            strokeWidth="1.5"
            opacity="0.8"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 1.2 }}
          />
          
          {/* Blouse with detailing */}
          <motion.path
            d="M32 45 Q30 55 32 65 L58 65 Q60 55 58 45 Z"
            fill={scheme.bride}
            initial={{ y: -5, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.65 }}
          />
          {/* Blouse embroidery */}
          <motion.path
            d="M38 50 Q45 48 52 50"
            stroke={scheme.accent}
            strokeWidth="0.8"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 1.1 }}
          />
          
          {/* Lehenga with flare and layers */}
          <motion.path
            d="M28 65 Q15 100 8 150 L82 150 Q75 100 62 65 Z"
            fill={scheme.bride}
            initial={{ scaleY: 0, originY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          />
          {/* Lehenga embroidery layers */}
          <motion.path
            d="M12 135 Q45 128 78 135"
            stroke={scheme.accent}
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 1.1, duration: 0.5 }}
          />
          <motion.path
            d="M15 145 Q45 140 75 145"
            stroke={scheme.accent}
            strokeWidth="1.5"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
          />
          {/* Lehenga pattern dots */}
          {[25, 35, 45, 55, 65].map((x, i) => (
            <motion.circle
              key={`lehenga-dot-${i}`}
              cx={x}
              cy={120 + (i % 2) * 5}
              r={1.5}
              fill={scheme.accent}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.3 + i * 0.05 }}
            />
          ))}
          
          {/* Arm with bangles */}
          <motion.path
            d="M30 50 Q18 62 22 80"
            stroke={scheme.bride}
            strokeWidth="6"
            strokeLinecap="round"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 0.8 }}
          />
          {/* Bangles stack */}
          {[65, 70, 75, 80].map((y, i) => (
            <motion.circle
              key={`bangle-${i}`}
              cx="22"
              cy={y}
              r={2.5}
              fill={i % 2 === 0 ? scheme.jewelry : scheme.accent}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1 + i * 0.08 }}
            />
          ))}
        </g>

        {/* Groom silhouette with detailed sherwani */}
        <g>
          {/* Head with turban */}
          <motion.ellipse
            cx="95"
            cy="28"
            rx="10"
            ry="12"
            fill={scheme.groom}
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          />
          
          {/* Elaborate Pagdi/Turban */}
          <motion.path
            d="M85 22 Q88 10 95 8 Q102 10 105 22 Q100 16 95 15 Q90 16 85 22 Z"
            fill={scheme.groomAccent}
            initial={{ y: -5, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.75 }}
          />
          {/* Turban folds */}
          <motion.path
            d="M87 18 Q91 14 95 13 Q99 14 103 18"
            fill="none"
            stroke={scheme.groom}
            strokeWidth="0.8"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 0.85 }}
          />
          {/* Kalgi (turban ornament) */}
          <motion.path
            d="M105 12 Q112 8 115 15 Q112 12 108 14"
            fill={scheme.jewelry}
            initial={{ scale: 0 }}
            animate={{ scale: 1, rotate: [0, 5, 0] }}
            transition={{ delay: 0.9, rotate: { duration: 3, repeat: Infinity } }}
          />
          {/* Safa tail flowing */}
          <motion.path
            d="M105 20 Q110 28 108 42 Q106 50 110 55"
            stroke={scheme.groomAccent}
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 0.85 }}
          />
          
          {/* Sehra beads hint */}
          <motion.path
            d="M85 25 Q85 28 86 30 M105 25 Q105 28 104 30"
            stroke={scheme.jewelry}
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 1 }}
          />
          
          {/* Sherwani body with details */}
          <motion.path
            d="M82 42 Q78 80 78 150 L112 150 Q112 80 108 42 Z"
            fill={scheme.groom}
            initial={{ scaleY: 0, originY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          />
          
          {/* Sherwani collar/neckline */}
          <motion.path
            d="M85 42 L95 55 L105 42"
            stroke={scheme.accent}
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 0.9 }}
          />
          
          {/* Sherwani button line with embroidery */}
          <motion.line
            x1="95"
            y1="55"
            x2="95"
            y2="120"
            stroke={scheme.accent}
            strokeWidth="1.5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 1 }}
          />
          {/* Button details */}
          {[60, 70, 80, 90, 100, 110].map((y, i) => (
            <motion.circle
              key={`button-${i}`}
              cx="95"
              cy={y}
              r={1.2}
              fill={scheme.jewelry}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.1 + i * 0.05 }}
            />
          ))}
          
          {/* Sherwani side embroidery */}
          <motion.path
            d="M82 60 Q80 90 80 120"
            stroke={scheme.accent}
            strokeWidth="1"
            strokeDasharray="3 3"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 1.2 }}
          />
          <motion.path
            d="M108 60 Q110 90 110 120"
            stroke={scheme.accent}
            strokeWidth="1"
            strokeDasharray="3 3"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 1.2 }}
          />
          
          {/* Arm */}
          <motion.path
            d="M108 50 Q118 62 115 80"
            stroke={scheme.groom}
            strokeWidth="6"
            strokeLinecap="round"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 0.8 }}
          />
        </g>

        {/* Hands joining with varmala/garland */}
        <motion.g initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.2, type: "spring" }}>
          <motion.ellipse
            cx="70"
            cy="88"
            rx="12"
            ry="6"
            fill={scheme.accent}
            opacity="0.9"
          />
          {/* Garland flowers */}
          {[58, 64, 70, 76, 82].map((x, i) => (
            <motion.circle
              key={`garland-flower-${i}`}
              cx={x}
              cy={88}
              r={2.5}
              fill={i % 2 === 0 ? scheme.jewelry : scheme.brideAccent}
              initial={{ scale: 0 }}
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ delay: 1.3 + i * 0.05, scale: { duration: 2, repeat: Infinity, delay: i * 0.2 } }}
            />
          ))}
        </motion.g>

        {/* Sparkle effects */}
        {[
          { x: 25, y: 45, delay: 1.5 },
          { x: 115, y: 35, delay: 1.7 },
          { x: 70, y: 15, delay: 1.9 },
          { x: 20, y: 120, delay: 2.1 },
          { x: 120, y: 100, delay: 2.3 },
        ].map((sparkle, i) => (
          <motion.g key={`sparkle-${i}`}>
            <motion.circle
              cx={sparkle.x}
              cy={sparkle.y}
              r={1.5}
              fill={scheme.jewelry}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: [0, 1, 0], scale: [0, 1, 0] }}
              transition={{ delay: sparkle.delay, duration: 2, repeat: Infinity }}
            />
            <motion.path
              d={`M${sparkle.x - 4} ${sparkle.y} L${sparkle.x + 4} ${sparkle.y} M${sparkle.x} ${sparkle.y - 4} L${sparkle.x} ${sparkle.y + 4}`}
              stroke={scheme.jewelry}
              strokeWidth="0.5"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.8, 0] }}
              transition={{ delay: sparkle.delay, duration: 2, repeat: Infinity }}
            />
          </motion.g>
        ))}
      </svg>
    </motion.div>
  );
};
