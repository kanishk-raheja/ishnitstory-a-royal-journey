import { motion } from "framer-motion";
import { MapPin, Calendar, ChevronRight, Music } from "lucide-react";
import { GoldOrnament } from "../GoldOrnament";
import { FloatingParticles } from "../FloatingParticles";

interface DJNightEventProps {
  onNext: () => void;
}

export const DJNightEvent = ({ onNext }: DJNightEventProps) => {
  const mapsUrl = "https://www.google.com/maps/search/?api=1&query=Triveni+Garden+Radaur+Yamunanagar+Haryana";
  const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=DJ+Night+-+IshnitStory&dates=20260130T133000Z/20260130T200000Z&details=Join+us+for+the+DJ+Night+celebration+of+Gishika+%26+Gunit&location=Triveni+Garden,+Radaur,+Yamunanagar`;

  return (
    <motion.div
      className="min-h-screen w-full bg-gradient-night relative overflow-hidden flex flex-col items-center justify-center p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pattern-overlay opacity-10" />
      <FloatingParticles count={25} color="gold" />

      {/* Neon Glow Effects */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-night-light/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gold/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 3, repeat: Infinity, delay: 1 }}
      />

      {/* Music Bars Animation */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-1 pb-20 opacity-20">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="w-2 bg-gold rounded-full"
            animate={{
              height: [20, Math.random() * 60 + 20, 20],
            }}
            transition={{
              duration: 0.5 + Math.random() * 0.5,
              repeat: Infinity,
              delay: i * 0.1,
            }}
          />
        ))}
      </div>

      {/* Content Card */}
      <motion.div
        className="bg-night-purple/60 backdrop-blur-md rounded-3xl p-8 md:p-12 max-w-lg w-full text-center relative border border-gold/30 shadow-elegant"
        initial={{ y: 50, opacity: 0, scale: 0.95 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        {/* Glowing Border */}
        <motion.div
          className="absolute inset-0 rounded-3xl border-2 border-gold/20"
          animate={{
            boxShadow: [
              "0 0 20px rgba(201, 160, 80, 0.1)",
              "0 0 40px rgba(201, 160, 80, 0.2)",
              "0 0 20px rgba(201, 160, 80, 0.1)",
            ],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />

        {/* Icon */}
        <motion.div
          className="text-gold mb-4 relative"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
        >
          <Music className="w-16 h-16 mx-auto" strokeWidth={1.5} />
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <div className="w-20 h-20 border border-gold/20 rounded-full" />
          </motion.div>
        </motion.div>

        {/* Title */}
        <motion.h2
          className="font-display text-4xl md:text-5xl font-bold text-gold mb-2"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          DJ Night
        </motion.h2>
        <motion.p
          className="font-script text-2xl text-gold-light/70 italic"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.35 }}
        >
          Let's Celebrate
        </motion.p>

        <GoldOrnament className="my-6" />

        {/* Date & Time */}
        <motion.div
          className="mb-6"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <p className="font-display text-3xl md:text-4xl font-semibold text-ivory mb-1">
            30 January 2026
          </p>
          <p className="font-body text-lg text-ivory/70">7:00 p.m.</p>
        </motion.div>

        {/* Venue */}
        <motion.div
          className="mb-8"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <p className="font-display text-xl text-ivory font-medium">
            Triveni Garden
          </p>
          <p className="font-body text-sm text-ivory/60 mt-1">
            Radaur, Yamunanagar
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-3 justify-center relative z-10"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gold hover:bg-gold-light text-night-purple px-6 py-3 rounded-full font-body font-medium flex items-center justify-center gap-2 transition-all shadow-gold"
          >
            <MapPin className="w-5 h-5" />
            View Location
          </a>
          <a
            href={calendarUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-gold text-gold hover:bg-gold/10 px-6 py-3 rounded-full font-body font-medium flex items-center justify-center gap-2 transition-all"
          >
            <Calendar className="w-5 h-5" />
            Add to Calendar
          </a>
        </motion.div>
      </motion.div>

      {/* Next Button */}
      <motion.button
        onClick={onNext}
        className="mt-8 flex items-center gap-2 text-gold font-body font-semibold group bg-night-purple/80 px-6 py-3 rounded-full border border-gold/30"
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
