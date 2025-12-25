import { motion } from "framer-motion";

interface FloralGarlandProps {
  variant?: "top" | "bottom";
  color?: "green" | "gold" | "yellow" | "pink" | "blue";
}

export const FloralGarland = ({ variant = "top", color = "green" }: FloralGarlandProps) => {
  const colorSchemes = {
    green: { primary: "#6b7c5c", secondary: "#8fa07a", accent: "#d4a634" },
    gold: { primary: "#c9a050", secondary: "#e0c080", accent: "#8b5cf6" },
    yellow: { primary: "#d4a634", secondary: "#f5c542", accent: "#e6b832" },
    pink: { primary: "#ec4899", secondary: "#f472b6", accent: "#c9a050" },
    blue: { primary: "#3b82f6", secondary: "#60a5fa", accent: "#c9a050" },
  };

  const scheme = colorSchemes[color];
  const isTop = variant === "top";

  return (
    <motion.div
      className={`absolute left-0 right-0 h-16 md:h-20 pointer-events-none overflow-hidden ${
        isTop ? "top-0" : "bottom-0"
      }`}
      initial={{ opacity: 0, y: isTop ? -20 : 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.8 }}
    >
      <svg
        className="w-full h-full"
        viewBox="0 0 400 60"
        preserveAspectRatio="xMidYMid meet"
        style={{ transform: isTop ? "none" : "rotate(180deg)" }}
      >
        {/* Main garland curve */}
        <motion.path
          d="M0,10 Q50,30 100,20 T200,25 T300,20 T400,10"
          fill="none"
          stroke={scheme.primary}
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 0.8, duration: 1.5 }}
        />
        
        {/* Hanging flowers */}
        {[40, 100, 160, 240, 300, 360].map((x, i) => (
          <g key={i}>
            {/* Flower stem */}
            <motion.line
              x1={x}
              y1={15 + (i % 2) * 5}
              x2={x}
              y2={30 + (i % 2) * 8}
              stroke={scheme.primary}
              strokeWidth="1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              transition={{ delay: 1 + i * 0.1 }}
            />
            {/* Marigold flower */}
            <motion.circle
              cx={x}
              cy={35 + (i % 2) * 8}
              r={6 + (i % 2) * 2}
              fill={scheme.accent}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.2 + i * 0.1, type: "spring" }}
            />
            {/* Inner petals */}
            <motion.circle
              cx={x}
              cy={35 + (i % 2) * 8}
              r={3 + (i % 2)}
              fill={scheme.secondary}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.3 + i * 0.1, type: "spring" }}
            />
          </g>
        ))}

        {/* Small leaf decorations */}
        {[70, 130, 200, 270, 330].map((x, i) => (
          <motion.ellipse
            key={`leaf-${i}`}
            cx={x}
            cy={18 + (i % 2) * 3}
            rx="8"
            ry="4"
            fill={scheme.primary}
            opacity="0.6"
            transform={`rotate(${i % 2 === 0 ? 30 : -30} ${x} ${18 + (i % 2) * 3})`}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.9 + i * 0.1 }}
          />
        ))}
      </svg>
    </motion.div>
  );
};
