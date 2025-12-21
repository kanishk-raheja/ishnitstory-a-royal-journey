import { motion } from "framer-motion";
import { MapPin, Calendar, Crown, Heart } from "lucide-react";
import { GoldOrnament } from "../GoldOrnament";
import { FloatingParticles } from "../FloatingParticles";
import { MandalaDecoration } from "../MandalaDecoration";
import weddingIllustration from "@/assets/wedding-illustration.png";

export const WeddingEvent = () => {
  const mapsUrl = "https://www.google.com/maps/search/?api=1&query=L.S.+Garden+Kaithal+Road+Cheeka+Haryana";
  const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=Wedding+Ceremony+-+IshnitStory&dates=20260131T133000Z/20260131T230000Z&details=Join+us+for+the+Wedding+Ceremony+of+Gishika+%26+Gunit&location=L.S.+Garden,+Kaithal+Road,+Cheeka`;

  return (
    <motion.div
      className="min-h-screen w-full bg-gradient-royal relative overflow-hidden flex flex-col items-center justify-center p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pattern-overlay opacity-20" />
      <FloatingParticles count={35} color="gold" />

      {/* Wedding Couple Illustration - Background */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 0.15, scale: 1 }}
        transition={{ delay: 0.5, duration: 1.5 }}
      >
        <img 
          src={weddingIllustration} 
          alt="" 
          className="w-[70%] max-w-[450px] h-auto object-contain"
        />
      </motion.div>

      {/* Mandala Decorations */}
      <MandalaDecoration className="absolute top-[-10%] left-[-10%]" size="lg" />
      <MandalaDecoration className="absolute bottom-[-10%] right-[-10%]" size="lg" />

      {/* Confetti/Petal Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3"
            style={{
              left: `${Math.random() * 100}%`,
              top: "-5%",
            }}
            animate={{
              y: ["0vh", "110vh"],
              x: [0, Math.random() * 100 - 50],
              rotate: [0, 720],
              opacity: [1, 0],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 8,
              ease: "linear",
            }}
          >
            <svg viewBox="0 0 20 20" className="w-full h-full text-gold/60">
              <path
                d="M10 0 Q15 10 10 20 Q5 10 10 0"
                fill="currentColor"
              />
            </svg>
          </motion.div>
        ))}
      </div>

      {/* Content Card */}
      <motion.div
        className="bg-royal-maroon/40 backdrop-blur-md rounded-3xl p-8 md:p-12 max-w-lg w-full text-center relative border-2 border-gold/40 shadow-elegant"
        initial={{ y: 50, opacity: 0, scale: 0.95 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        {/* Decorative Corner Elements */}
        <div className="absolute top-4 left-4 w-12 h-12 border-l-2 border-t-2 border-gold/50" />
        <div className="absolute top-4 right-4 w-12 h-12 border-r-2 border-t-2 border-gold/50" />
        <div className="absolute bottom-4 left-4 w-12 h-12 border-l-2 border-b-2 border-gold/50" />
        <div className="absolute bottom-4 right-4 w-12 h-12 border-r-2 border-b-2 border-gold/50" />

        {/* Icon */}
        <motion.div
          className="text-gold mb-4 relative"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
        >
          <Crown className="w-16 h-16 mx-auto" strokeWidth={1.5} />
          <motion.div
            className="absolute -top-2 left-1/2 -translate-x-1/2"
            animate={{
              y: [0, -5, 0],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Heart className="w-6 h-6 text-gold fill-gold" />
          </motion.div>
        </motion.div>

        {/* Title */}
        <motion.h2
          className="font-display text-4xl md:text-5xl font-bold text-gold mb-2"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Wedding
        </motion.h2>
        <motion.p
          className="font-script text-2xl text-gold-light/80 italic"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.35 }}
        >
          Barat Ceremony
        </motion.p>

        <GoldOrnament className="my-6" />

        {/* Couple Names */}
        <motion.div
          className="mb-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.38 }}
        >
          <p className="font-script text-3xl text-ivory">
            Gishika <span className="text-gold">&</span> Gunit
          </p>
        </motion.div>

        {/* Date & Time */}
        <motion.div
          className="mb-6"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <p className="font-display text-3xl md:text-4xl font-semibold text-ivory mb-1">
            31 January 2026
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
            L.S. Garden
          </p>
          <p className="font-body text-sm text-ivory/60 mt-1">
            Kaithal Road, Cheeka
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
            className="bg-gold hover:bg-gold-light text-royal-maroon-dark px-6 py-3 rounded-full font-body font-medium flex items-center justify-center gap-2 transition-all shadow-gold"
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

      {/* Footer Message */}
      <motion.div
        className="mt-10 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <p className="font-script text-2xl text-gold/80 italic">
          Together with our families
        </p>
        <p className="font-body text-sm text-gold/60 mt-2 tracking-widest uppercase">
          We request the pleasure of your company
        </p>
        <div className="mt-6">
          <GoldOrnament />
        </div>
        <p className="font-display text-lg text-gold mt-4 tracking-[0.3em]">
          IshnitStory
        </p>
      </motion.div>
    </motion.div>
  );
};
