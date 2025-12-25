import { motion } from "framer-motion";
import { useMemo } from "react";

interface FloatingPetalsProps {
  count?: number;
  color?: "marigold" | "rose" | "gold" | "blue" | "pink";
  className?: string;
}

export const FloatingPetals = ({ 
  count = 12, 
  color = "marigold",
  className = "" 
}: FloatingPetalsProps) => {
  const petals = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 20 - 10,
      size: Math.random() * 12 + 8,
      duration: Math.random() * 8 + 10,
      delay: Math.random() * 5,
      rotation: Math.random() * 360,
      swayAmount: Math.random() * 30 + 20,
    }));
  }, [count]);

  const colorSchemes = {
    marigold: ["#f5a623", "#e8940f", "#d4820a"],
    rose: ["#ec4899", "#f472b6", "#db2777"],
    gold: ["#c9a050", "#e0c080", "#d4a634"],
    blue: ["#3b82f6", "#60a5fa", "#1d4ed8"],
    pink: ["#ec4899", "#f472b6", "#fbcfe8"],
  };

  const colors = colorSchemes[color];

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          className="absolute"
          style={{
            left: `${petal.x}%`,
            top: `${petal.y}%`,
          }}
          initial={{ y: 0, opacity: 0 }}
          animate={{
            y: ["0%", "120vh"],
            x: [0, petal.swayAmount, -petal.swayAmount, petal.swayAmount / 2, 0],
            rotate: [petal.rotation, petal.rotation + 360],
            opacity: [0, 0.8, 0.8, 0.6, 0],
          }}
          transition={{
            duration: petal.duration,
            repeat: Infinity,
            delay: petal.delay,
            ease: "linear",
          }}
        >
          <svg
            width={petal.size}
            height={petal.size}
            viewBox="0 0 24 24"
          >
            {/* Petal shape */}
            <motion.ellipse
              cx="12"
              cy="12"
              rx="8"
              ry="4"
              fill={colors[petal.id % colors.length]}
              opacity="0.8"
            />
            <motion.ellipse
              cx="12"
              cy="12"
              rx="4"
              ry="8"
              fill={colors[(petal.id + 1) % colors.length]}
              opacity="0.6"
            />
          </svg>
        </motion.div>
      ))}
    </div>
  );
};
