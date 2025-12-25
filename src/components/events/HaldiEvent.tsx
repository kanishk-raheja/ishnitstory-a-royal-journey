import { motion } from "framer-motion";
import { MapPin, Calendar, ChevronRight } from "lucide-react";
import { CornerMandala } from "@/components/CornerMandala";
import { FloralGarland } from "@/components/FloralGarland";
import { FestiveCouple } from "@/components/FestiveCouple";
import { OrnamentalDivider } from "@/components/OrnamentalDivider";
import { FloatingPetals } from "@/components/FloatingPetals";

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
        background: "linear-gradient(135deg, #fff5f7 0%, #fce7f3 50%, #fbcfe8 100%)"
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Multi-layered pink glows for depth */}
      <div 
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at 30% 20%, rgba(236, 72, 153, 0.2) 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, rgba(219, 39, 119, 0.15) 0%, transparent 50%), radial-gradient(ellipse at center, rgba(249, 168, 212, 0.15) 0%, transparent 60%)"
        }}
      />

      {/* Shimmer overlay */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(45deg, transparent 30%, rgba(251, 207, 232, 0.3) 50%, transparent 70%)",
        }}
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />

      {/* Floating rose petals */}
      <FloatingPetals count={15} color="rose" />

      {/* Decorative hearts pattern */}
      <div 
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 10 C15 5, 5 5, 5 15 C5 25, 20 35, 20 35 C20 35, 35 25, 35 15 C35 5, 25 5, 20 10' fill='%23ec4899' fill-opacity='0.3'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Sunburst effect - Pink themed */}
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/3 pointer-events-none"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 0.15, scale: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <svg className="w-[500px] h-[500px]" viewBox="0 0 200 200">
          {Array.from({ length: 16 }).map((_, i) => (
            <motion.line
              key={i}
              x1="100"
              y1="100"
              x2="100"
              y2="0"
              stroke="#ec4899"
              strokeWidth="0.5"
              transform={`rotate(${i * 22.5} 100 100)`}
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.3, 0.5, 0.3] }}
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
        {/* Animated outer glow */}
        <motion.div
          className="absolute -inset-1 rounded-sm"
          style={{
            background: "linear-gradient(135deg, rgba(236, 72, 153, 0.3), rgba(201, 160, 80, 0.3), rgba(219, 39, 119, 0.3))",
          }}
          animate={{
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />

        {/* Outer Border */}
        <div className="absolute inset-0 border-2 border-gold/60 rounded-sm bg-gradient-to-br from-pink-50 to-pink-100" />
        <div className="absolute inset-2 md:inset-3 border border-haldi-pink/40 rounded-sm" />

        {/* Inner background with pink glow */}
        <div 
          className="absolute inset-4 md:inset-6 rounded-sm overflow-hidden"
          style={{
            background: "linear-gradient(180deg, #fffbfc 0%, #fdf2f8 100%)"
          }}
        >
          <div 
            className="absolute inset-0"
            style={{
              background: "radial-gradient(ellipse at center 55%, rgba(236, 72, 153, 0.12) 0%, transparent 60%)"
            }}
          />
        </div>

        {/* Floral Garland at top - Pink */}
        <FloralGarland variant="top" color="pink" />

        {/* Corner Mandala Decorations - Pink theme */}
        <CornerMandala position="top-left" color="#ec4899" size="lg" delay={0.4} />
        <CornerMandala position="top-right" color="#ec4899" size="lg" delay={0.5} />
        <CornerMandala position="bottom-left" color="#db2777" size="md" delay={0.5} />
        <CornerMandala position="bottom-right" color="#db2777" size="md" delay={0.6} />

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
                color: "#be185d",
                textShadow: "0 2px 15px rgba(236, 72, 153, 0.3)"
              }}
            >
              Haldi Ceremony
            </motion.h2>
            <OrnamentalDivider color="#ec4899" className="mt-2" />
          </motion.div>

          {/* Festive Couple Illustration */}
          <motion.div
            className="flex-1 flex flex-col items-center justify-center"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <FestiveCouple variant="haldi" className="w-32 h-36 md:w-40 md:h-44 mb-4" />

            {/* Event Details */}
            <div className="text-center px-4">
              <p className="font-display text-2xl md:text-3xl font-semibold mb-1" style={{ color: "#be185d" }}>
                31 January 2026
              </p>
              <p className="font-body text-base md:text-lg text-muted-foreground mb-3">
                9:00 a.m.
              </p>
              <p className="font-display text-lg md:text-xl text-foreground font-medium">
                At our residence
              </p>

              {/* Action Buttons - Pink theme */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center mt-5 md:mt-6">
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white px-5 py-2.5 rounded-full font-body text-sm font-medium flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-pink-300/50"
                >
                  <MapPin className="w-4 h-4" />
                  View Location
                </a>
                <a
                  href={calendarUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-pink-500 text-pink-600 hover:bg-pink-50 px-5 py-2.5 rounded-full font-body text-sm font-medium flex items-center justify-center gap-2 transition-all"
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
                stroke="#ec4899"
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
              {/* Heart shape */}
              <motion.path
                d="M25 8 C23 6, 20 6, 20 9 C20 12, 25 15, 25 15 C25 15, 30 12, 30 9 C30 6, 27 6, 25 8"
                fill="#f472b6"
                opacity="0.6"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.5 }}
              />
              <motion.path
                d="M75 16 C73 14, 70 14, 70 17 C70 20, 75 23, 75 23 C75 23, 80 20, 80 17 C80 14, 77 14, 75 16"
                fill="#f472b6"
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
          background: "linear-gradient(135deg, rgba(255,255,255,0.95), rgba(253,242,248,0.95))",
          borderColor: "rgba(236, 72, 153, 0.3)",
          color: "#be185d"
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(236, 72, 153, 0.2)" }}
        whileTap={{ scale: 0.95 }}
      >
        <span>Wedding Ceremony</span>
        <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </motion.button>
    </motion.div>
  );
};
