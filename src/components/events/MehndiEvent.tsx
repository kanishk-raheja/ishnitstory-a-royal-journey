import { motion } from "framer-motion";
import { MapPin, Calendar, ChevronRight, Flower2 } from "lucide-react";
import { GoldOrnament } from "../GoldOrnament";
import { FloatingParticles } from "../FloatingParticles";

interface MehndiEventProps {
  onNext: () => void;
}

export const MehndiEvent = ({ onNext }: MehndiEventProps) => {
  // You can update this with the actual residence address
  const mapsUrl = "https://www.google.com/maps/search/?api=1&query=Narula+Residence+Yamunanagar+Haryana";
  const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=Mehndi+Ceremony+-+IshnitStory&dates=20260130T053000Z/20260130T103000Z&details=Join+us+for+the+Mehndi+Ceremony+of+Gishika+%26+Gunit&location=At+our+residence`;

  return (
    <motion.div
      className="min-h-screen w-full bg-gradient-mehndi relative overflow-hidden flex flex-col items-center justify-center p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pattern-overlay opacity-20" />
      <FloatingParticles count={15} color="pink" />

      {/* Decorative Mehndi Hands */}
      <motion.div
        className="absolute top-10 left-10 opacity-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ delay: 0.5 }}
      >
        <svg className="w-32 h-32 text-mehndi-green" viewBox="0 0 100 100">
          <path
            d="M50 10 L50 50 M30 30 L70 30 M40 50 L60 50 M35 70 Q50 90 65 70"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </motion.div>

      {/* Content Card */}
      <motion.div
        className="bg-ivory/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 max-w-lg w-full text-center relative shadow-elegant border border-mehndi-green/20"
        initial={{ y: 50, opacity: 0, scale: 0.95 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        {/* Icon */}
        <motion.div
          className="text-mehndi-green mb-4"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
        >
          <Flower2 className="w-16 h-16 mx-auto" strokeWidth={1.5} />
        </motion.div>

        {/* Title */}
        <motion.h2
          className="font-display text-4xl md:text-5xl font-bold text-mehndi-green mb-2"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Mehndi
        </motion.h2>
        <motion.p
          className="font-script text-2xl text-royal-maroon/70 italic"
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
            30 January 2026
          </p>
          <p className="font-body text-lg text-muted-foreground">11:00 a.m.</p>
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
            className="bg-mehndi-green hover:bg-mehndi-green/90 text-ivory px-6 py-3 rounded-full font-body font-medium flex items-center justify-center gap-2 transition-all shadow-lg"
          >
            <MapPin className="w-5 h-5" />
            View Location
          </a>
          <a
            href={calendarUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-mehndi-green text-mehndi-green hover:bg-mehndi-green/10 px-6 py-3 rounded-full font-body font-medium flex items-center justify-center gap-2 transition-all"
          >
            <Calendar className="w-5 h-5" />
            Add to Calendar
          </a>
        </motion.div>
      </motion.div>

      {/* Next Button */}
      <motion.button
        onClick={onNext}
        className="mt-8 flex items-center gap-2 text-mehndi-green font-body font-semibold group bg-ivory/80 px-6 py-3 rounded-full shadow-lg"
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
