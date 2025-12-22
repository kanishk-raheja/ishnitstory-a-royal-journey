import { motion } from "framer-motion";
import { MapPin, Calendar, ChevronRight } from "lucide-react";
import djnightIllustration from "@/assets/djnight-illustration.png";

interface DJNightEventProps {
  onNext: () => void;
}

export const DJNightEvent = ({ onNext }: DJNightEventProps) => {
  const mapsUrl = "https://www.google.com/maps/search/?api=1&query=Triveni+Garden+Radaur+Yamunanagar+Haryana";
  const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=DJ+Night+-+IshnitStory&dates=20260130T133000Z/20260130T200000Z&details=Join+us+for+the+DJ+Night+celebration+of+Gishika+%26+Gunit&location=Triveni+Garden,+Radaur,+Yamunanagar`;

  return (
    <motion.div
      className="min-h-screen w-full relative overflow-hidden flex items-center justify-center p-4 md:p-8"
      style={{
        background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f0f23 100%)"
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Gold/Purple glow overlay */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          background: "radial-gradient(ellipse at top right, #c9a050 0%, transparent 40%), radial-gradient(ellipse at bottom left, #8b5cf6 0%, transparent 40%)"
        }}
      />

      {/* Music bars background animation */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-1 pb-10 opacity-10">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="w-1.5 bg-gold rounded-full"
            animate={{
              height: [15, Math.random() * 40 + 15, 15],
            }}
            transition={{
              duration: 0.5 + Math.random() * 0.5,
              repeat: Infinity,
              delay: i * 0.1,
            }}
          />
        ))}
      </div>

      {/* Main Card */}
      <motion.div
        className="relative w-full max-w-md md:max-w-lg aspect-[3/4] md:aspect-[4/5]"
        initial={{ y: 50, opacity: 0, scale: 0.95 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        {/* Outer Gold Border with glow */}
        <motion.div 
          className="absolute inset-0 border-2 border-gold/70 rounded-sm"
          animate={{
            boxShadow: [
              "0 0 20px rgba(201, 160, 80, 0.2)",
              "0 0 40px rgba(201, 160, 80, 0.4)",
              "0 0 20px rgba(201, 160, 80, 0.2)",
            ],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <div className="absolute inset-2 md:inset-3 border border-gold/50 rounded-sm" />

        {/* Inner dark background */}
        <div 
          className="absolute inset-4 md:inset-6 rounded-sm"
          style={{
            background: "linear-gradient(180deg, #1e1e32 0%, #141428 100%)"
          }}
        />

        {/* Corner Decorative Elements - Top Left */}
        <motion.div
          className="absolute top-0 left-0 w-20 md:w-28 h-20 md:h-28 pointer-events-none z-10"
          initial={{ opacity: 0, x: -20, y: -20 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <path d="M10 50 Q10 10 50 10" stroke="#c9a050" strokeWidth="2" fill="none" opacity="0.6" />
            <path d="M15 45 Q15 15 45 15" stroke="#c9a050" strokeWidth="1" fill="none" opacity="0.4" />
            <circle cx="12" cy="12" r="4" fill="#c9a050" opacity="0.5" />
          </svg>
        </motion.div>

        {/* Corner Decorative Elements - Top Right */}
        <motion.div
          className="absolute top-0 right-0 w-20 md:w-28 h-20 md:h-28 pointer-events-none z-10"
          initial={{ opacity: 0, x: 20, y: -20 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <path d="M90 50 Q90 10 50 10" stroke="#c9a050" strokeWidth="2" fill="none" opacity="0.6" />
            <path d="M85 45 Q85 15 55 15" stroke="#c9a050" strokeWidth="1" fill="none" opacity="0.4" />
            <circle cx="88" cy="12" r="4" fill="#c9a050" opacity="0.5" />
          </svg>
        </motion.div>

        {/* Corner Decorative Elements - Bottom Left */}
        <motion.div
          className="absolute bottom-0 left-0 w-16 md:w-24 h-16 md:h-24 pointer-events-none z-10"
          initial={{ opacity: 0, x: -20, y: 20 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <path d="M10 50 Q10 90 50 90" stroke="#c9a050" strokeWidth="2" fill="none" opacity="0.6" />
            <circle cx="12" cy="88" r="4" fill="#c9a050" opacity="0.5" />
          </svg>
        </motion.div>

        {/* Content */}
        <div className="absolute inset-6 md:inset-8 flex flex-col">
          {/* Title - Cursive */}
          <motion.h2
            className="font-script text-gold text-4xl md:text-5xl lg:text-6xl text-center mt-4 md:mt-8"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            DJ Night
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            className="font-body text-gold/60 text-center text-sm tracking-widest uppercase mt-2"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.35 }}
          >
            Let's Celebrate
          </motion.p>

          {/* Event Details */}
          <motion.div
            className="flex-1 flex flex-col items-center justify-center text-center px-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <p className="font-display text-2xl md:text-3xl font-semibold text-ivory mb-2">
              30 January 2026
            </p>
            <p className="font-body text-base md:text-lg text-ivory/60 mb-4">
              7:00 p.m.
            </p>
            <p className="font-display text-lg md:text-xl text-ivory font-medium">
              Triveni Garden
            </p>
            <p className="font-body text-sm text-ivory/50 mt-1">
              Radaur, Yamunanagar
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center mt-6 md:mt-8">
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gold hover:bg-gold-light text-night-purple px-5 py-2.5 rounded-full font-body text-sm font-medium flex items-center justify-center gap-2 transition-all shadow-gold"
              >
                <MapPin className="w-4 h-4" />
                View Location
              </a>
              <a
                href={calendarUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-gold text-gold hover:bg-gold/10 px-5 py-2.5 rounded-full font-body text-sm font-medium flex items-center justify-center gap-2 transition-all"
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
            animate={{ opacity: 0.9, x: 0, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <img 
              src={djnightIllustration} 
              alt="" 
              className="w-36 md:w-48 lg:w-56 h-auto object-contain"
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Next Button */}
      <motion.button
        onClick={onNext}
        className="absolute bottom-6 md:bottom-10 flex items-center gap-2 text-gold font-body font-semibold group bg-night-purple/90 px-6 py-3 rounded-full border border-gold/30"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <span>Haldi Ceremony</span>
        <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </motion.button>
    </motion.div>
  );
};
