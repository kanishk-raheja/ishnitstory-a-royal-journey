import { motion } from "framer-motion";
import { MapPin, Calendar, ChevronRight, Sun } from "lucide-react";
import { GoldOrnament } from "../GoldOrnament";
import { FloatingParticles } from "../FloatingParticles";
import haldiIllustration from "@/assets/haldi-illustration.png";

interface HaldiEventProps {
  onNext: () => void;
}

export const HaldiEvent = ({ onNext }: HaldiEventProps) => {
  const mapsUrl = "https://www.google.com/maps/search/?api=1&query=Narula+Residence+Yamunanagar+Haryana";
  const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=Haldi+Ceremony+-+IshnitStory&dates=20260131T033000Z/20260131T083000Z&details=Join+us+for+the+Haldi+Ceremony+of+Gishika+%26+Gunit&location=At+our+residence`;

  return (
    <motion.div
      className="min-h-screen w-full bg-gradient-haldi relative overflow-hidden flex flex-col items-center justify-center p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pattern-overlay opacity-15" />
      <FloatingParticles count={20} color="yellow" />

      {/* Haldi Couple Illustration - Background */}
      <motion.div
        className="absolute bottom-0 right-0 opacity-25 pointer-events-none"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 0.25, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <img 
          src={haldiIllustration} 
          alt="" 
          className="w-64 md:w-80 h-auto"
        />
      </motion.div>

      {/* Sunburst Effect */}
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 0.3, scale: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <svg className="w-[600px] h-[600px] text-haldi" viewBox="0 0 200 200">
          {Array.from({ length: 24 }).map((_, i) => (
            <motion.line
              key={i}
              x1="100"
              y1="100"
              x2="100"
              y2="0"
              stroke="currentColor"
              strokeWidth="0.5"
              transform={`rotate(${i * 15} 100 100)`}
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.1, 0.3, 0.1] }}
              transition={{ duration: 3, repeat: Infinity, delay: i * 0.1 }}
            />
          ))}
        </svg>
      </motion.div>

      {/* Turmeric Splashes */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 bg-haldi/20 rounded-full blur-2xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-40 h-40 bg-haldi/30 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 5, repeat: Infinity, delay: 1 }}
      />

      {/* Content Card */}
      <motion.div
        className="bg-ivory/95 backdrop-blur-sm rounded-3xl p-8 md:p-12 max-w-lg w-full text-center relative shadow-elegant border border-haldi/30"
        initial={{ y: 50, opacity: 0, scale: 0.95 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        {/* Icon */}
        <motion.div
          className="text-haldi mb-4"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
        >
          <Sun className="w-16 h-16 mx-auto" strokeWidth={1.5} />
        </motion.div>

        {/* Title */}
        <motion.h2
          className="font-display text-4xl md:text-5xl font-bold text-royal-maroon mb-2"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Haldi
        </motion.h2>
        <motion.p
          className="font-script text-2xl text-gold-dark italic"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.35 }}
        >
          Ceremony
        </motion.p>

        <GoldOrnament className="my-6" />

        {/* Date & Time */}
        <motion.div
          className="mb-6"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <p className="font-display text-3xl md:text-4xl font-semibold text-royal-maroon mb-1">
            31 January 2026
          </p>
          <p className="font-body text-lg text-muted-foreground">9:00 a.m.</p>
        </motion.div>

        {/* Venue */}
        <motion.div
          className="mb-8"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <p className="font-display text-xl text-foreground font-medium">
            At our residence
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-3 justify-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-royal-maroon hover:bg-royal-maroon-light text-ivory px-6 py-3 rounded-full font-body font-medium flex items-center justify-center gap-2 transition-all shadow-lg"
          >
            <MapPin className="w-5 h-5" />
            View Location
          </a>
          <a
            href={calendarUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-royal-maroon text-royal-maroon hover:bg-royal-maroon/10 px-6 py-3 rounded-full font-body font-medium flex items-center justify-center gap-2 transition-all"
          >
            <Calendar className="w-5 h-5" />
            Add to Calendar
          </a>
        </motion.div>
      </motion.div>

      {/* Next Button */}
      <motion.button
        onClick={onNext}
        className="mt-8 flex items-center gap-2 text-royal-maroon font-body font-semibold group bg-ivory/90 px-6 py-3 rounded-full shadow-lg"
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
