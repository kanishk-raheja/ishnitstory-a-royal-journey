import { motion } from "framer-motion";
import { MapPin, Calendar, ChevronRight } from "lucide-react";
import { CornerMandala } from "@/components/CornerMandala";
import { FloralGarland } from "@/components/FloralGarland";
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
      {/* Refined layered glows for subtle depth */}
      <div 
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at 50% 40%, rgba(249, 168, 212, 0.2) 0%, transparent 55%), radial-gradient(ellipse at 30% 70%, rgba(236, 72, 153, 0.08) 0%, transparent 40%)"
        }}
      />

      {/* Reduced floating petals - fewer for less noise */}
      <FloatingPetals count={8} color="rose" />

      {/* Main Card */}
      <motion.div
        className="relative w-full max-w-md md:max-w-lg aspect-[3/4] md:aspect-[4/5]"
        initial={{ y: 50, opacity: 0, scale: 0.95 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        {/* Soft outer glow */}
        <motion.div
          className="absolute -inset-1 rounded-sm"
          style={{
            background: "linear-gradient(135deg, rgba(236, 72, 153, 0.2), rgba(201, 160, 80, 0.2), rgba(219, 39, 119, 0.2))",
          }}
          animate={{ opacity: [0.4, 0.6, 0.4] }}
          transition={{ duration: 4, repeat: Infinity }}
        />

        {/* Outer Border */}
        <div className="absolute inset-0 border-2 border-gold/60 rounded-sm bg-gradient-to-br from-pink-50 to-pink-100" />
        <div className="absolute inset-2 md:inset-3 border border-haldi-pink/30 rounded-sm" />

        {/* Inner background with subtle radial glow */}
        <div 
          className="absolute inset-4 md:inset-6 rounded-sm overflow-hidden"
          style={{
            background: "linear-gradient(180deg, #fffbfc 0%, #fdf2f8 100%)"
          }}
        >
          <div 
            className="absolute inset-0"
            style={{
              background: "radial-gradient(ellipse at center 60%, rgba(249, 168, 212, 0.15) 0%, transparent 50%)"
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
            className="text-center mt-6 md:mt-10"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <motion.h2
              className="font-script text-4xl md:text-5xl lg:text-6xl"
              style={{
                color: "#be185d",
                textShadow: "0 2px 12px rgba(236, 72, 153, 0.25)"
              }}
            >
              Haldi Ceremony
            </motion.h2>
            <OrnamentalDivider color="#ec4899" className="mt-2" />
          </motion.div>

          {/* Enhanced Haldi Bride Illustration with grounding */}
          <motion.div
            className="flex-1 flex flex-col items-center justify-center"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {/* Illustration Container */}
            <div className="relative w-36 h-44 md:w-44 md:h-52 mb-3">
              {/* Soft glow behind illustration */}
              <motion.div
                className="absolute inset-0 blur-2xl"
                style={{
                  background: "radial-gradient(ellipse, rgba(249, 168, 212, 0.4) 0%, transparent 70%)"
                }}
                animate={{ opacity: [0.5, 0.7, 0.5] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              
              {/* Enhanced Haldi Bride SVG */}
              <svg viewBox="0 0 120 150" className="w-full h-full relative z-10" fill="none">
                {/* Bride silhouette with detailed lehenga */}
                <g>
                  {/* Hair bun with gajra flowers */}
                  <motion.ellipse
                    cx="60"
                    cy="18"
                    rx="12"
                    ry="9"
                    fill="#db2777"
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.55 }}
                  />
                  {/* Gajra flowers in hair - more detailed */}
                  {[0, 1, 2, 3, 4].map((i) => (
                    <motion.circle
                      key={`gajra-${i}`}
                      cx={48 + i * 6}
                      cy={12}
                      r={2.5}
                      fill="#fef3c7"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.9 + i * 0.08, type: "spring" }}
                    />
                  ))}
                  
                  {/* Head */}
                  <motion.ellipse
                    cx="60"
                    cy="30"
                    rx="13"
                    ry="15"
                    fill="#ec4899"
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                  />
                  
                  {/* Maang tikka chain */}
                  <motion.path
                    d="M50 18 Q60 14 70 18"
                    fill="none"
                    stroke="#fbbf24"
                    strokeWidth="1.2"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 0.85 }}
                  />
                  {/* Maang tikka pendant */}
                  <motion.circle
                    cx="60"
                    cy="17"
                    r="3"
                    fill="#fbbf24"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.9 }}
                  />
                  <motion.circle
                    cx="60"
                    cy="17"
                    r="1.5"
                    fill="#fef3c7"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.95 }}
                  />
                  
                  {/* Jhumka earrings - more elaborate */}
                  {[46, 74].map((x, i) => (
                    <motion.g key={`earring-${i}`}>
                      <motion.circle
                        cx={x}
                        cy={33}
                        r={2.5}
                        fill="#fbbf24"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 1 + i * 0.1 }}
                      />
                      <motion.ellipse
                        cx={x}
                        cy={38}
                        rx={3}
                        ry={4}
                        fill="#fbbf24"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 1.1 + i * 0.1 }}
                      />
                      <motion.circle
                        cx={x}
                        cy={43}
                        r={1.5}
                        fill="#fef3c7"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 1.15 + i * 0.1 }}
                      />
                    </motion.g>
                  ))}
                  
                  {/* Necklace - layered */}
                  <motion.path
                    d="M48 48 Q60 56 72 48"
                    fill="none"
                    stroke="#fbbf24"
                    strokeWidth="2.5"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 0.95 }}
                  />
                  <motion.path
                    d="M50 51 Q60 58 70 51"
                    fill="none"
                    stroke="#c9a050"
                    strokeWidth="1.5"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 1 }}
                  />
                  
                  {/* Dupatta flowing elegantly */}
                  <motion.path
                    d="M42 42 Q28 55 22 85 Q18 115 25 145 L70 150 Q72 115 68 85 Q65 58 58 45 Z"
                    fill="#fbcfe8"
                    opacity="0.7"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.7 }}
                    transition={{ delay: 0.7, duration: 0.8 }}
                  />
                  {/* Dupatta gold border */}
                  <motion.path
                    d="M22 85 Q18 115 25 145"
                    fill="none"
                    stroke="#c9a050"
                    strokeWidth="2"
                    opacity="0.8"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 1.2 }}
                  />
                  
                  {/* Blouse with embroidery */}
                  <motion.path
                    d="M45 45 Q42 55 44 65 L76 65 Q78 55 75 45 Z"
                    fill="#ec4899"
                    initial={{ y: -5, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.65 }}
                  />
                  {/* Blouse embroidery detail */}
                  <motion.path
                    d="M52 50 Q60 48 68 50"
                    stroke="#c9a050"
                    strokeWidth="1"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 1.1 }}
                  />
                  
                  {/* Lehenga with beautiful flare */}
                  <motion.path
                    d="M40 65 Q25 100 15 145 L105 145 Q95 100 80 65 Z"
                    fill="#ec4899"
                    initial={{ scaleY: 0, originY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ delay: 0.7, duration: 0.6 }}
                  />
                  {/* Lehenga embroidery layers */}
                  <motion.path
                    d="M20 130 Q60 122 100 130"
                    stroke="#c9a050"
                    strokeWidth="2.5"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 1.1, duration: 0.5 }}
                  />
                  <motion.path
                    d="M18 140 Q60 134 102 140"
                    stroke="#fbbf24"
                    strokeWidth="2"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 1.2, duration: 0.5 }}
                  />
                  {/* Lehenga pattern - elegant motifs */}
                  {[30, 45, 60, 75, 90].map((x, i) => (
                    <motion.circle
                      key={`motif-${i}`}
                      cx={x}
                      cy={115 + (i % 2) * 6}
                      r={2}
                      fill="#c9a050"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 1.3 + i * 0.05 }}
                    />
                  ))}
                  
                  {/* Arm with henna and bangles */}
                  <motion.path
                    d="M44 50 Q30 62 34 82"
                    stroke="#ec4899"
                    strokeWidth="7"
                    strokeLinecap="round"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 0.8 }}
                  />
                  {/* Bangles - pink and gold */}
                  {[68, 74, 80].map((y, i) => (
                    <motion.circle
                      key={`bangle-${i}`}
                      cx="34"
                      cy={y}
                      r={3}
                      fill={i % 2 === 0 ? "#fbbf24" : "#f472b6"}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 1 + i * 0.1 }}
                    />
                  ))}
                  
                  {/* Other arm */}
                  <motion.path
                    d="M76 50 Q90 62 86 82"
                    stroke="#ec4899"
                    strokeWidth="7"
                    strokeLinecap="round"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 0.85 }}
                  />
                  {/* Bangles on right */}
                  {[68, 74, 80].map((y, i) => (
                    <motion.circle
                      key={`bangle-r-${i}`}
                      cx="86"
                      cy={y}
                      r={3}
                      fill={i % 2 === 0 ? "#f472b6" : "#fbbf24"}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 1.05 + i * 0.1 }}
                    />
                  ))}
                </g>
                
                {/* Minimal sparkles - reduced */}
                {[
                  { x: 30, y: 25, delay: 1.8 },
                  { x: 95, y: 30, delay: 2.2 },
                ].map((sparkle, i) => (
                  <motion.circle
                    key={`sparkle-${i}`}
                    cx={sparkle.x}
                    cy={sparkle.y}
                    r={1.5}
                    fill="#fbbf24"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: [0, 0.8, 0], scale: [0, 1, 0] }}
                    transition={{ delay: sparkle.delay, duration: 3, repeat: Infinity }}
                  />
                ))}
              </svg>
              
              {/* Grounding base - soft oval glow / floral shadow */}
              <motion.div
                className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-28 md:w-36 h-6"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
              >
                <svg viewBox="0 0 120 20" className="w-full h-full">
                  {/* Soft shadow ellipse */}
                  <ellipse
                    cx="60"
                    cy="10"
                    rx="55"
                    ry="8"
                    fill="url(#groundGradient)"
                  />
                  {/* Decorative floral motif on ground */}
                  <path
                    d="M40 10 Q50 6 60 10 Q70 6 80 10"
                    fill="none"
                    stroke="#c9a050"
                    strokeWidth="0.8"
                    opacity="0.5"
                  />
                  <defs>
                    <radialGradient id="groundGradient" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#f9a8d4" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#f9a8d4" stopOpacity="0" />
                    </radialGradient>
                  </defs>
                </svg>
              </motion.div>
            </div>

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

          {/* Footer decorative motif - refined */}
          <motion.div
            className="flex justify-center pb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            <svg width="100" height="20" viewBox="0 0 100 20">
              <motion.path
                d="M10 10 Q50 2 90 10"
                fill="none"
                stroke="#ec4899"
                strokeWidth="1"
                opacity="0.4"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
              />
              <motion.circle 
                cx="50" 
                cy="8" 
                r="3" 
                fill="#c9a050"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.4, type: "spring" }}
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
