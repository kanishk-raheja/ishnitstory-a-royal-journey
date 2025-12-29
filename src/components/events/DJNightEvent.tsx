import { motion } from "framer-motion";
import { MapPin, Calendar, ChevronRight } from "lucide-react";
import { CornerMandala } from "@/components/CornerMandala";
import { FloralGarland } from "@/components/FloralGarland";
import { OrnamentalDivider } from "@/components/OrnamentalDivider";
import { FloatingPetals } from "@/components/FloatingPetals";

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
      {/* Multi-layered glows for disco effect */}
      <div 
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at 20% 30%, rgba(201, 160, 80, 0.3) 0%, transparent 40%), radial-gradient(ellipse at 80% 70%, rgba(139, 92, 246, 0.3) 0%, transparent 40%), radial-gradient(ellipse at 50% 50%, rgba(201, 160, 80, 0.15) 0%, transparent 60%)"
        }}
      />

      {/* Animated disco light beams */}
      <motion.div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          background: "conic-gradient(from 0deg at 50% 50%, transparent 0deg, rgba(139, 92, 246, 0.3) 30deg, transparent 60deg, rgba(201, 160, 80, 0.3) 120deg, transparent 150deg, rgba(236, 72, 153, 0.2) 210deg, transparent 240deg, rgba(59, 130, 246, 0.2) 300deg, transparent 330deg)",
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      {/* Floating gold particles */}
      <FloatingPetals count={15} color="gold" />

      {/* Sparkle stars */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={`star-${i}`}
          className="absolute w-1 h-1 bg-gold rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 3,
          }}
        />
      ))}

      {/* Music bars background animation */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-1 pb-10 opacity-20">
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.div
            key={i}
            className="w-1.5 rounded-full"
            style={{
              background: i % 3 === 0 ? "#c9a050" : i % 3 === 1 ? "#8b5cf6" : "#ec4899"
            }}
            animate={{
              height: [15, Math.random() * 50 + 20, 15],
            }}
            transition={{
              duration: 0.4 + Math.random() * 0.4,
              repeat: Infinity,
              delay: i * 0.05,
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
        {/* Animated pulsing border glow */}
        <motion.div 
          className="absolute -inset-1 rounded-sm"
          style={{
            background: "linear-gradient(135deg, rgba(201, 160, 80, 0.5), rgba(139, 92, 246, 0.5), rgba(201, 160, 80, 0.5))",
          }}
          animate={{
            opacity: [0.5, 0.8, 0.5],
            boxShadow: [
              "0 0 30px rgba(201, 160, 80, 0.3)",
              "0 0 60px rgba(201, 160, 80, 0.5)",
              "0 0 30px rgba(201, 160, 80, 0.3)",
            ],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />

        {/* Outer Gold Border with glow */}
        <motion.div 
          className="absolute inset-0 border-2 border-gold/70 rounded-sm"
          animate={{
            boxShadow: [
              "0 0 20px rgba(201, 160, 80, 0.2), inset 0 0 20px rgba(201, 160, 80, 0.1)",
              "0 0 40px rgba(201, 160, 80, 0.4), inset 0 0 40px rgba(201, 160, 80, 0.2)",
              "0 0 20px rgba(201, 160, 80, 0.2), inset 0 0 20px rgba(201, 160, 80, 0.1)",
            ],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <div className="absolute inset-2 md:inset-3 border border-gold/50 rounded-sm" />

        {/* Inner dark background with radial glow */}
        <div 
          className="absolute inset-4 md:inset-6 rounded-sm overflow-hidden"
          style={{
            background: "linear-gradient(180deg, #1e1e32 0%, #141428 100%)"
          }}
        >
          <div 
            className="absolute inset-0"
            style={{
              background: "radial-gradient(ellipse at center 50%, rgba(201, 160, 80, 0.2) 0%, transparent 60%)"
            }}
          />
          {/* Secondary purple glow */}
          <motion.div 
            className="absolute inset-0"
            style={{
              background: "radial-gradient(ellipse at 30% 70%, rgba(139, 92, 246, 0.15) 0%, transparent 50%)"
            }}
            animate={{ opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </div>

        {/* Floral Garland at top */}
        <FloralGarland variant="top" color="gold" />

        {/* Corner Mandala Decorations - All 4 corners with animation */}
        <CornerMandala position="top-left" color="#c9a050" size="lg" delay={0.4} />
        <CornerMandala position="top-right" color="#c9a050" size="lg" delay={0.5} />
        <CornerMandala position="bottom-left" color="#c9a050" size="md" delay={0.5} />
        <CornerMandala position="bottom-right" color="#c9a050" size="md" delay={0.6} />

        {/* Content */}
        <div className="absolute inset-6 md:inset-8 flex flex-col">
          {/* Title - Ceremonial styling with glow */}
          <motion.div
            className="text-center mt-8 md:mt-12"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <motion.h2
              className="font-script text-gold text-4xl md:text-5xl lg:text-6xl"
              style={{
                textShadow: "0 0 30px rgba(201, 160, 80, 0.5), 0 2px 20px rgba(201, 160, 80, 0.4)"
              }}
              animate={{
                textShadow: [
                  "0 0 30px rgba(201, 160, 80, 0.5), 0 2px 20px rgba(201, 160, 80, 0.4)",
                  "0 0 50px rgba(201, 160, 80, 0.7), 0 2px 30px rgba(201, 160, 80, 0.5)",
                  "0 0 30px rgba(201, 160, 80, 0.5), 0 2px 20px rgba(201, 160, 80, 0.4)",
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              DJ Night
            </motion.h2>
            <OrnamentalDivider color="#c9a050" className="mt-2" />
            <motion.p
              className="font-body text-gold/70 text-sm tracking-widest uppercase mt-2"
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.45 }}
            >
              Let's Celebrate
            </motion.p>
          </motion.div>

          {/* Event Details */}
          <motion.div
            className="flex-1 flex flex-col items-center justify-center"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {/* Event Details */}
            <div className="text-center px-4">
              <p className="font-display text-2xl md:text-3xl font-semibold text-ivory mb-1">
                30 January 2026
              </p>
              <p className="font-body text-base md:text-lg text-ivory/60 mb-3">
                7:00 p.m.
              </p>
              <p className="font-display text-lg md:text-xl text-ivory font-medium">
                Triveni Garden
              </p>
              <p className="font-body text-sm text-ivory/50 mt-1">
                Radaur, Yamunanagar
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center mt-5 md:mt-6">
                <motion.a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-gold to-gold-light text-night-purple px-5 py-2.5 rounded-full font-body text-sm font-medium flex items-center justify-center gap-2 transition-all"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 0 30px rgba(201, 160, 80, 0.5)"
                  }}
                >
                  <MapPin className="w-4 h-4" />
                  View Location
                </motion.a>
                <motion.a
                  href={calendarUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-gold text-gold hover:bg-gold/10 px-5 py-2.5 rounded-full font-body text-sm font-medium flex items-center justify-center gap-2 transition-all"
                  whileHover={{ scale: 1.05 }}
                >
                  <Calendar className="w-4 h-4" />
                  Add to Calendar
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Footer decorative motif with music notes */}
          <motion.div
            className="flex justify-center pb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            <svg width="120" height="28" viewBox="0 0 120 28">
              <motion.path
                d="M0 14 Q30 4 60 14 Q90 24 120 14"
                fill="none"
                stroke="#c9a050"
                strokeWidth="1"
                opacity="0.5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
              />
              {/* Music note symbols */}
              <motion.text
                x="30"
                y="10"
                fill="#8b5cf6"
                fontSize="12"
                opacity="0.7"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.7 }}
                transition={{ delay: 1.4 }}
              >
                ♪
              </motion.text>
              <motion.circle 
                cx="60" 
                cy="14" 
                r="4" 
                fill="#c9a050"
                initial={{ scale: 0 }}
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ delay: 1.4, duration: 2, repeat: Infinity }}
              />
              <motion.text
                x="85"
                y="22"
                fill="#8b5cf6"
                fontSize="12"
                opacity="0.7"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.7 }}
                transition={{ delay: 1.5 }}
              >
                ♫
              </motion.text>
            </svg>
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
        whileHover={{ 
          scale: 1.05,
          boxShadow: "0 0 30px rgba(201, 160, 80, 0.3)"
        }}
        whileTap={{ scale: 0.95 }}
      >
        <span>Haldi Ceremony</span>
        <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </motion.button>
    </motion.div>
  );
};
