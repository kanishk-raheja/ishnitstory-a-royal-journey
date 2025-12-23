import { motion } from "framer-motion";
import { MapPin, Calendar, ChevronRight } from "lucide-react";
import { FloralCorner } from "@/components/FloralCorner";

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

        {/* Corner Floral Decorations - All 4 corners */}
        <FloralCorner position="top-left" size="lg" delay={0.4} />
        <FloralCorner position="top-right" size="lg" delay={0.5} />
        <FloralCorner position="bottom-left" size="lg" delay={0.5} />
        <FloralCorner position="bottom-right" size="lg" delay={0.6} />

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
