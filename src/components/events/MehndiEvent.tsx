import { motion } from "framer-motion";
import { MapPin, Calendar, ChevronRight } from "lucide-react";
import { CornerMandala } from "@/components/CornerMandala";
import { FloralGarland } from "@/components/FloralGarland";
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
        background: "linear-gradient(135deg, #f0f7ff 0%, #e0efff 50%, #dbeafe 100%)"
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Multi-layered blue radial glows */}
      <div 
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at 30% 20%, rgba(59, 130, 246, 0.2) 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, rgba(30, 64, 175, 0.15) 0%, transparent 50%), radial-gradient(ellipse at center, rgba(96, 165, 250, 0.1) 0%, transparent 70%)"
        }}
      />

      {/* Additional shimmer effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(45deg, transparent 30%, rgba(147, 197, 253, 0.2) 50%, transparent 70%)",
        }}
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />

      {/* Floating blue petals */}
      <FloatingPetals count={18} color="blue" />

      {/* Decorative paisley pattern overlay */}
      <div 
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233b82f6' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Main Card */}
      <motion.div
        className="relative w-full max-w-md md:max-w-lg aspect-[3/4] md:aspect-[4/5]"
        initial={{ y: 50, opacity: 0, scale: 0.95 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        {/* Animated outer glow */}
        <motion.div
          className="absolute -inset-1 rounded-sm"
          style={{
            background: "linear-gradient(135deg, rgba(59, 130, 246, 0.3), rgba(201, 160, 80, 0.3), rgba(30, 64, 175, 0.3))",
          }}
          animate={{
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />

        {/* Outer Gold Border */}
        <div className="absolute inset-0 border-2 border-gold/60 rounded-sm bg-gradient-to-br from-blue-50 to-blue-100" />
        <div className="absolute inset-2 md:inset-3 border border-mehndi-blue/40 rounded-sm" />

        {/* Inner background with blue glow */}
        <div 
          className="absolute inset-4 md:inset-6 rounded-sm overflow-hidden"
          style={{
            background: "linear-gradient(180deg, #f8faff 0%, #eff6ff 100%)"
          }}
        >
          {/* Soft radial glow behind content */}
          <div 
            className="absolute inset-0"
            style={{
              background: "radial-gradient(ellipse at center 60%, rgba(59, 130, 246, 0.15) 0%, transparent 60%)"
            }}
          />
        </div>

        {/* Floral Garland at top */}
        <FloralGarland variant="top" color="blue" />

        {/* Corner Mandala Decorations - Blue theme */}
        <CornerMandala position="top-left" color="#3b82f6" size="lg" delay={0.4} />
        <CornerMandala position="top-right" color="#3b82f6" size="lg" delay={0.5} />
        <CornerMandala position="bottom-left" color="#1e40af" size="md" delay={0.5} />
        <CornerMandala position="bottom-right" color="#1e40af" size="md" delay={0.6} />

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
              className="font-script text-4xl md:text-5xl lg:text-6xl"
              style={{
                color: "#1e40af",
                textShadow: "0 2px 15px rgba(59, 130, 246, 0.3)"
              }}
            >
              Mehndi Ceremony
            </motion.h2>
            <OrnamentalDivider color="#3b82f6" className="mt-2" />
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
              <p className="font-display text-2xl md:text-3xl font-semibold text-royal-maroon mb-1">
                30 January 2026
              </p>
              <p className="font-body text-base md:text-lg text-muted-foreground mb-3">
                11:00 a.m.
              </p>
              <p className="font-display text-lg md:text-xl text-foreground font-medium">
                At our residence
              </p>

              {/* Action Buttons - Blue theme */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center mt-5 md:mt-6">
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-5 py-2.5 rounded-full font-body text-sm font-medium flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-blue-300/50"
                >
                  <MapPin className="w-4 h-4" />
                  View Location
                </a>
                <a
                  href={calendarUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-blue-500 text-blue-600 hover:bg-blue-50 px-5 py-2.5 rounded-full font-body text-sm font-medium flex items-center justify-center gap-2 transition-all"
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
            <svg width="100" height="24" viewBox="0 0 100 24">
              <motion.path
                d="M0 12 Q25 2 50 12 Q75 22 100 12"
                fill="none"
                stroke="#3b82f6"
                strokeWidth="1"
                opacity="0.5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
              />
              <motion.circle 
                cx="50" 
                cy="12" 
                r="4" 
                fill="#c9a050"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.4, type: "spring" }}
              />
              <motion.circle 
                cx="25" 
                cy="8" 
                r="2" 
                fill="#60a5fa"
                opacity="0.6"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.5 }}
              />
              <motion.circle 
                cx="75" 
                cy="16" 
                r="2" 
                fill="#60a5fa"
                opacity="0.6"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.6 }}
              />
            </svg>
          </motion.div>
        </div>
      </motion.div>

      {/* Next Button */}
      <motion.button
        onClick={onNext}
        className="absolute bottom-6 md:bottom-10 flex items-center gap-2 font-body font-semibold group px-6 py-3 rounded-full shadow-lg border"
        style={{
          background: "linear-gradient(135deg, rgba(255,255,255,0.95), rgba(239,246,255,0.95))",
          borderColor: "rgba(59, 130, 246, 0.3)",
          color: "#1e40af"
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(59, 130, 246, 0.2)" }}
        whileTap={{ scale: 0.95 }}
      >
        <span>DJ Night</span>
        <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </motion.button>
    </motion.div>
  );
};
