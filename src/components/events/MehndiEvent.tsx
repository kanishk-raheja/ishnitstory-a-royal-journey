import { motion } from "framer-motion";
import { MapPin, Calendar, ChevronRight } from "lucide-react";
import mehndiIllustration from "@/assets/mehndi-illustration.png";

interface MehndiEventProps {
  onNext: () => void;
}

export const MehndiEvent = ({ onNext }: MehndiEventProps) => {
  const mapsUrl = "https://www.google.com/maps/search/?api=1&query=Narula+Residence+Yamunanagar+Haryana";
  const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=Mehndi+Ceremony+-+IshnitStory&dates=20260130T053000Z/20260130T103000Z&details=Join+us+for+the+Mehndi+Ceremony+of+Gishika+%26+Gunit&location=At+our+residence`;

  return (
    <motion.div
      className="min-h-screen w-full relative overflow-hidden flex items-center justify-center p-4 md:p-8"
      style={{
        background: "linear-gradient(135deg, #fef9f3 0%, #fdf6ed 50%, #fcf3e7 100%)"
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Gold texture overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          background: "radial-gradient(ellipse at top right, #c9a050 0%, transparent 50%), radial-gradient(ellipse at bottom left, #c9a050 0%, transparent 50%)"
        }}
      />

      {/* Main Card */}
      <motion.div
        className="relative w-full max-w-md md:max-w-lg aspect-[3/4] md:aspect-[4/5]"
        initial={{ y: 50, opacity: 0, scale: 0.95 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        {/* Outer Gold Border */}
        <div className="absolute inset-0 border-2 border-gold/60 rounded-sm" />
        <div className="absolute inset-2 md:inset-3 border border-gold/40 rounded-sm" />

        {/* Inner cream background */}
        <div 
          className="absolute inset-4 md:inset-6 rounded-sm"
          style={{
            background: "linear-gradient(180deg, #fdfbf7 0%, #faf7f2 100%)"
          }}
        />

        {/* Corner Floral Decorations - Top Left */}
        <motion.div
          className="absolute top-0 left-0 w-24 md:w-32 h-24 md:h-32 pointer-events-none z-10"
          initial={{ opacity: 0, x: -20, y: -20 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            {/* Leaves */}
            <ellipse cx="25" cy="30" rx="12" ry="20" fill="#6b7c5c" opacity="0.7" transform="rotate(-30 25 30)" />
            <ellipse cx="35" cy="20" rx="10" ry="18" fill="#8b9a7c" opacity="0.6" transform="rotate(-15 35 20)" />
            <ellipse cx="45" cy="35" rx="8" ry="15" fill="#7a8a6c" opacity="0.5" transform="rotate(-45 45 35)" />
            <ellipse cx="15" cy="45" rx="10" ry="17" fill="#5b6c4c" opacity="0.8" transform="rotate(-50 15 45)" />
            <ellipse cx="30" cy="50" rx="7" ry="12" fill="#9baa8c" opacity="0.4" transform="rotate(-60 30 50)" />
          </svg>
        </motion.div>

        {/* Corner Floral Decorations - Bottom Left */}
        <motion.div
          className="absolute bottom-0 left-0 w-20 md:w-28 h-20 md:h-28 pointer-events-none z-10"
          initial={{ opacity: 0, x: -20, y: 20 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <ellipse cx="25" cy="70" rx="12" ry="20" fill="#6b7c5c" opacity="0.7" transform="rotate(30 25 70)" />
            <ellipse cx="40" cy="80" rx="10" ry="16" fill="#8b9a7c" opacity="0.6" transform="rotate(15 40 80)" />
            <ellipse cx="15" cy="55" rx="8" ry="14" fill="#7a8a6c" opacity="0.5" transform="rotate(50 15 55)" />
          </svg>
        </motion.div>

        {/* Corner Floral Decorations - Top Right */}
        <motion.div
          className="absolute top-0 right-0 w-20 md:w-28 h-20 md:h-28 pointer-events-none z-10"
          initial={{ opacity: 0, x: 20, y: -20 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <ellipse cx="75" cy="30" rx="12" ry="20" fill="#6b7c5c" opacity="0.7" transform="rotate(30 75 30)" />
            <ellipse cx="65" cy="20" rx="10" ry="18" fill="#8b9a7c" opacity="0.6" transform="rotate(15 65 20)" />
            <ellipse cx="85" cy="45" rx="8" ry="14" fill="#7a8a6c" opacity="0.5" transform="rotate(50 85 45)" />
          </svg>
        </motion.div>

        {/* Content */}
        <div className="absolute inset-6 md:inset-8 flex flex-col">
          {/* Title - Cursive */}
          <motion.h2
            className="font-script text-mehndi-green text-4xl md:text-5xl lg:text-6xl text-center mt-4 md:mt-8"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Mehndi Ceremony
          </motion.h2>

          {/* Event Details */}
          <motion.div
            className="flex-1 flex flex-col items-center justify-center text-center px-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <p className="font-display text-2xl md:text-3xl font-semibold text-royal-maroon mb-2">
              30 January 2026
            </p>
            <p className="font-body text-base md:text-lg text-muted-foreground mb-4">
              11:00 a.m.
            </p>
            <p className="font-display text-lg md:text-xl text-foreground font-medium">
              At our residence
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center mt-6 md:mt-8">
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-mehndi-green hover:bg-mehndi-green/90 text-ivory px-5 py-2.5 rounded-full font-body text-sm font-medium flex items-center justify-center gap-2 transition-all shadow-lg"
              >
                <MapPin className="w-4 h-4" />
                View Location
              </a>
              <a
                href={calendarUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-mehndi-green text-mehndi-green hover:bg-mehndi-green/10 px-5 py-2.5 rounded-full font-body text-sm font-medium flex items-center justify-center gap-2 transition-all"
              >
                <Calendar className="w-4 h-4" />
                Add to Calendar
              </a>
            </div>
          </motion.div>

          {/* Couple Illustration - Bottom Right */}
          <motion.div
            className="absolute bottom-0 right-0 pointer-events-none"
            initial={{ opacity: 0, x: 30, y: 30 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <img 
              src={mehndiIllustration} 
              alt="" 
              className="w-36 md:w-48 lg:w-56 h-auto object-contain"
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Next Button */}
      <motion.button
        onClick={onNext}
        className="absolute bottom-6 md:bottom-10 flex items-center gap-2 text-mehndi-green font-body font-semibold group bg-ivory/90 px-6 py-3 rounded-full shadow-lg border border-mehndi-green/20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <span>DJ Night</span>
        <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </motion.button>
    </motion.div>
  );
};
