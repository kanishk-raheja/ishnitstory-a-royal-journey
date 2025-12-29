import { motion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";

interface MusicToggleProps {
  isPlaying: boolean;
  onToggle: () => void;
  themeColor?: string;
}

export const MusicToggle = ({ isPlaying, onToggle, themeColor = "#c9a050" }: MusicToggleProps) => {
  return (
    <motion.button
      onClick={onToggle}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full backdrop-blur-sm border-2 flex items-center justify-center shadow-lg transition-colors"
      style={{
        backgroundColor: `${themeColor}20`,
        borderColor: `${themeColor}80`,
      }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      whileHover={{ scale: 1.1, backgroundColor: `${themeColor}30` }}
      whileTap={{ scale: 0.95 }}
      aria-label={isPlaying ? "Mute music" : "Play music"}
    >
      {isPlaying ? (
        <Volume2 className="w-6 h-6" style={{ color: themeColor }} />
      ) : (
        <VolumeX className="w-6 h-6" style={{ color: themeColor, opacity: 0.7 }} />
      )}
      
      {/* Sound waves animation when playing */}
      {isPlaying && (
        <motion.div
          className="absolute inset-0 rounded-full border-2"
          style={{ borderColor: `${themeColor}50` }}
          animate={{
            scale: [1, 1.5, 1.5],
            opacity: [0.5, 0, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
      )}
    </motion.button>
  );
};
