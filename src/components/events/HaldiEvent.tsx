import { motion } from "framer-motion";
import { MapPin, Calendar, ChevronRight } from "lucide-react";
import haldiIllustration from "@/assets/haldi-illustration.png";

interface HaldiEventProps {
  onNext: () => void;
}

export const HaldiEvent = ({ onNext }: HaldiEventProps) => {
  const mapsUrl = "https://www.google.com/maps/search/?api=1&query=Narula+Residence+Yamunanagar+Haryana";
  const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=Haldi+Ceremony+-+IshnitStory&dates=20260131T033000Z/20260131T083000Z&details=Join+us+for+the+Haldi+Ceremony+of+Gishika+%26+Gunit&location=At+our+residence`;

  return (
    <motion.div
      className="min-h-screen w-full relative overflow-hidden flex items-center justify-center p-4 md:p-8"
      style={{
        background: "linear-gradient(135deg, #fffef5 0%, #fff9e6 50%, #fff5d6 100%)"
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Yellow/gold texture overlay */}
      <div 
        className="absolute inset-0 opacity-15"
        style={{
          background: "radial-gradient(ellipse at top right, #f5c542 0%, transparent 50%), radial-gradient(ellipse at bottom left, #e6b832 0%, transparent 50%)"
        }}
      />

      {/* Sunburst effect */}
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/3 pointer-events-none"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 0.15, scale: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <svg className="w-[500px] h-[500px] text-haldi" viewBox="0 0 200 200">
          {Array.from({ length: 16 }).map((_, i) => (
            <motion.line
              key={i}
              x1="100"
              y1="100"
              x2="100"
              y2="0"
              stroke="currentColor"
              strokeWidth="0.5"
              transform={`rotate(${i * 22.5} 100 100)`}
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.2, 0.4, 0.2] }}
              transition={{ duration: 3, repeat: Infinity, delay: i * 0.1 }}
            />
          ))}
        </svg>
      </motion.div>

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

        {/* Inner cream/yellow background */}
        <div 
          className="absolute inset-4 md:inset-6 rounded-sm"
          style={{
            background: "linear-gradient(180deg, #fffdf5 0%, #fff8e8 100%)"
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
            {/* Yellow/Orange flowers and leaves */}
            <ellipse cx="25" cy="30" rx="12" ry="20" fill="#d4a634" opacity="0.6" transform="rotate(-30 25 30)" />
            <ellipse cx="35" cy="20" rx="10" ry="18" fill="#e6b832" opacity="0.5" transform="rotate(-15 35 20)" />
            <ellipse cx="45" cy="35" rx="8" ry="15" fill="#f5c542" opacity="0.4" transform="rotate(-45 45 35)" />
            <ellipse cx="15" cy="45" rx="10" ry="17" fill="#c9a050" opacity="0.7" transform="rotate(-50 15 45)" />
            <circle cx="20" cy="25" r="5" fill="#fff" opacity="0.6" />
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
            <ellipse cx="25" cy="70" rx="12" ry="20" fill="#d4a634" opacity="0.6" transform="rotate(30 25 70)" />
            <ellipse cx="40" cy="80" rx="10" ry="16" fill="#e6b832" opacity="0.5" transform="rotate(15 40 80)" />
            <ellipse cx="15" cy="55" rx="8" ry="14" fill="#f5c542" opacity="0.4" transform="rotate(50 15 55)" />
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
            <ellipse cx="75" cy="30" rx="12" ry="20" fill="#d4a634" opacity="0.6" transform="rotate(30 75 30)" />
            <ellipse cx="65" cy="20" rx="10" ry="18" fill="#e6b832" opacity="0.5" transform="rotate(15 65 20)" />
            <ellipse cx="85" cy="45" rx="8" ry="14" fill="#f5c542" opacity="0.4" transform="rotate(50 85 45)" />
            <circle cx="80" cy="25" r="5" fill="#fff" opacity="0.6" />
          </svg>
        </motion.div>

        {/* Content */}
        <div className="absolute inset-6 md:inset-8 flex flex-col">
          {/* Title - Cursive */}
          <motion.h2
            className="font-script text-royal-maroon text-4xl md:text-5xl lg:text-6xl text-center mt-4 md:mt-8"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Haldi Ceremony
          </motion.h2>

          {/* Event Details */}
          <motion.div
            className="flex-1 flex flex-col items-center justify-center text-center px-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <p className="font-display text-2xl md:text-3xl font-semibold text-royal-maroon mb-2">
              31 January 2026
            </p>
            <p className="font-body text-base md:text-lg text-muted-foreground mb-4">
              9:00 a.m.
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
                className="bg-royal-maroon hover:bg-royal-maroon-light text-ivory px-5 py-2.5 rounded-full font-body text-sm font-medium flex items-center justify-center gap-2 transition-all shadow-lg"
              >
                <MapPin className="w-4 h-4" />
                View Location
              </a>
              <a
                href={calendarUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-royal-maroon text-royal-maroon hover:bg-royal-maroon/10 px-5 py-2.5 rounded-full font-body text-sm font-medium flex items-center justify-center gap-2 transition-all"
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
              src={haldiIllustration} 
              alt="" 
              className="w-36 md:w-48 lg:w-56 h-auto object-contain"
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Next Button */}
      <motion.button
        onClick={onNext}
        className="absolute bottom-6 md:bottom-10 flex items-center gap-2 text-royal-maroon font-body font-semibold group bg-ivory/90 px-6 py-3 rounded-full shadow-lg border border-royal-maroon/20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <span>Wedding Ceremony</span>
        <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </motion.button>
    </motion.div>
  );
};
