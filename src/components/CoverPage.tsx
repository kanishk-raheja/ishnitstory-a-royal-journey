import { motion } from "framer-motion";
import { FloatingParticles } from "./FloatingParticles";
import { MandalaDecoration } from "./MandalaDecoration";
import { GoldOrnament } from "./GoldOrnament";

interface CoverPageProps {
  onOpen: () => void;
}

export const CoverPage = ({ onOpen }: CoverPageProps) => {
  return (
    <motion.div
      className="min-h-screen w-full bg-gradient-royal relative overflow-hidden flex items-center justify-center cursor-pointer"
      onClick={onOpen}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Royal Frame Border */}
      <GoldOrnament variant="frame" />

      {/* Floating Particles */}
      <FloatingParticles count={30} color="gold" />

      {/* Background Mandala Decorations */}
      <MandalaDecoration className="absolute top-[-5%] left-[-10%]" size="lg" />
      <MandalaDecoration className="absolute bottom-[-5%] right-[-10%]" size="lg" />
      <MandalaDecoration className="absolute top-1/4 right-[-5%]" size="md" />
      <MandalaDecoration className="absolute bottom-1/4 left-[-5%]" size="md" />

      {/* Pattern Overlay */}
      <div className="absolute inset-0 pattern-overlay" />

      {/* Content */}
      <div className="relative z-10 text-center px-8">
        {/* Top Ornament */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <svg className="w-20 h-10 mx-auto text-gold" viewBox="0 0 100 40">
            <path
              d="M5 20 Q25 5 50 20 Q75 5 95 20"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
            />
            <circle cx="50" cy="20" r="4" fill="currentColor" />
            <circle cx="5" cy="20" r="3" fill="currentColor" />
            <circle cx="95" cy="20" r="3" fill="currentColor" />
          </svg>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          className="font-body text-gold/80 text-sm md:text-base tracking-[0.3em] uppercase mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          The Royal Wedding of
        </motion.p>

        {/* Couple Names */}
        <motion.h1
          className="font-script text-gold text-6xl md:text-8xl lg:text-9xl font-light mb-2 text-shadow-gold"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          Gishika
        </motion.h1>

        <motion.div
          className="text-gold/70 text-3xl md:text-4xl font-script my-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.5 }}
        >
          &
        </motion.div>

        <motion.h1
          className="font-script text-gold text-6xl md:text-8xl lg:text-9xl font-light mb-6 text-shadow-gold"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          Gunit
        </motion.h1>

        {/* Brand Name */}
        <motion.div
          className="mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
        >
          <GoldOrnament className="mb-6" />
          <p className="font-display text-gold text-2xl md:text-3xl tracking-[0.2em] italic">
            IshnitStory
          </p>
        </motion.div>

        {/* Tap to Enter */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 0.8 }}
        >
          <motion.p
            className="font-body text-gold/60 text-sm tracking-widest uppercase"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Tap to Open
          </motion.p>
          <motion.div
            className="mt-4 w-6 h-10 mx-auto border-2 border-gold/40 rounded-full flex items-start justify-center p-1"
          >
            <motion.div
              className="w-1.5 h-3 bg-gold/60 rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>

        {/* Bottom Ornament */}
        <motion.div
          className="mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <svg className="w-20 h-10 mx-auto text-gold rotate-180" viewBox="0 0 100 40">
            <path
              d="M5 20 Q25 5 50 20 Q75 5 95 20"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
            />
            <circle cx="50" cy="20" r="4" fill="currentColor" />
            <circle cx="5" cy="20" r="3" fill="currentColor" />
            <circle cx="95" cy="20" r="3" fill="currentColor" />
          </svg>
        </motion.div>
      </div>
    </motion.div>
  );
};
