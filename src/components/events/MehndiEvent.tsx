import { motion } from "framer-motion";
import { MapPin, Calendar, ChevronRight } from "lucide-react";
import { CornerMandala } from "@/components/CornerMandala";
import { FloralGarland } from "@/components/FloralGarland";
import { FestiveCouple } from "@/components/FestiveCouple";
import { OrnamentalDivider } from "@/components/OrnamentalDivider";
import { FloatingPetals } from "@/components/FloatingPetals";

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
      {/* Layered radial glows for depth */}
      <div 
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at 30% 20%, rgba(107, 124, 92, 0.15) 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, rgba(201, 160, 80, 0.15) 0%, transparent 50%), radial-gradient(ellipse at center, rgba(107, 124, 92, 0.08) 0%, transparent 70%)"
        }}
      />

      {/* Floating petals animation */}
      <FloatingPetals count={15} color="marigold" />

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

        {/* Inner cream background with glow */}
        <div 
          className="absolute inset-4 md:inset-6 rounded-sm overflow-hidden"
          style={{
            background: "linear-gradient(180deg, #fdfbf7 0%, #faf7f2 100%)"
          }}
        >
          {/* Soft radial glow behind content */}
          <div 
            className="absolute inset-0"
            style={{
              background: "radial-gradient(ellipse at center 60%, rgba(107, 124, 92, 0.1) 0%, transparent 60%)"
            }}
          />
        </div>

        {/* Floral Garland at top */}
        <FloralGarland variant="top" color="green" />

        {/* Corner Mandala Decorations - All 4 corners */}
        <CornerMandala position="top-left" color="#6b7c5c" size="lg" delay={0.4} />
        <CornerMandala position="top-right" color="#6b7c5c" size="lg" delay={0.5} />
        <CornerMandala position="bottom-left" color="#6b7c5c" size="md" delay={0.5} />
        <CornerMandala position="bottom-right" color="#6b7c5c" size="md" delay={0.6} />

        {/* Content */}
        <div className="absolute inset-6 md:inset-8 flex flex-col">
          {/* Title - Ceremonial styling */}
          <motion.div
            className="text-center mt-8 md:mt-12"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <motion.h2
              className="font-script text-mehndi-green text-4xl md:text-5xl lg:text-6xl"
              style={{
                textShadow: "0 2px 10px rgba(107, 124, 92, 0.2)"
              }}
            >
              Mehndi Ceremony
            </motion.h2>
            <OrnamentalDivider color="#6b7c5c" className="mt-2" />
          </motion.div>

          {/* Festive Couple Illustration */}
          <motion.div
            className="flex-1 flex flex-col items-center justify-center"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <FestiveCouple variant="mehndi" className="w-28 h-32 md:w-36 md:h-40 mb-4" />

            {/* Event Details */}
            <div className="text-center px-4">
              <p className="font-display text-2xl md:text-3xl font-semibold text-royal-maroon mb-1">
                30 January 2026
              </p>
              <p className="font-body text-base md:text-lg text-muted-foreground mb-3">
                11:00 a.m.
              </p>
              <p className="font-display text-lg md:text-xl text-foreground font-medium">
                At our residence
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center mt-5 md:mt-6">
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
            </div>
          </motion.div>

          {/* Footer decorative motif */}
          <motion.div
            className="flex justify-center pb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            <svg width="80" height="20" viewBox="0 0 80 20">
              <path
                d="M0 10 Q20 0 40 10 Q60 20 80 10"
                fill="none"
                stroke="#6b7c5c"
                strokeWidth="1"
                opacity="0.5"
              />
              <circle cx="40" cy="10" r="3" fill="#d4a634" opacity="0.7" />
            </svg>
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
