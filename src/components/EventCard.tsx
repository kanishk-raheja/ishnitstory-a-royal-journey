import { motion } from "framer-motion";
import { MapPin, Calendar, ChevronRight } from "lucide-react";
import { GoldOrnament } from "./GoldOrnament";

interface EventCardProps {
  title: string;
  date: string;
  time: string;
  venue: string;
  venueAddress?: string;
  mapsUrl: string;
  calendarUrl: string;
  onNext?: () => void;
  hasNext?: boolean;
  theme: "mehndi" | "djnight" | "haldi" | "wedding";
  icon?: React.ReactNode;
}

const themeStyles = {
  mehndi: {
    bg: "bg-gradient-mehndi",
    accent: "text-mehndi-green",
    buttonBg: "bg-mehndi-green hover:bg-mehndi-green/90",
    buttonText: "text-ivory",
    cardBg: "bg-ivory/80",
  },
  djnight: {
    bg: "bg-gradient-night",
    accent: "text-gold-light",
    buttonBg: "bg-gold hover:bg-gold-light",
    buttonText: "text-night-purple",
    cardBg: "bg-night-purple/50 backdrop-blur-sm",
  },
  haldi: {
    bg: "bg-gradient-haldi",
    accent: "text-royal-maroon",
    buttonBg: "bg-royal-maroon hover:bg-royal-maroon-light",
    buttonText: "text-ivory",
    cardBg: "bg-ivory/80",
  },
  wedding: {
    bg: "bg-gradient-royal",
    accent: "text-gold",
    buttonBg: "bg-gold hover:bg-gold-light",
    buttonText: "text-royal-maroon-dark",
    cardBg: "bg-royal-maroon/30 backdrop-blur-sm",
  },
};

export const EventCard = ({
  title,
  date,
  time,
  venue,
  venueAddress,
  mapsUrl,
  calendarUrl,
  onNext,
  hasNext = false,
  theme,
  icon,
}: EventCardProps) => {
  const styles = themeStyles[theme];
  const isNight = theme === "djnight";
  const isWedding = theme === "wedding";

  return (
    <motion.div
      className={`min-h-screen w-full ${styles.bg} flex flex-col items-center justify-center p-6 relative overflow-hidden`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 pattern-overlay opacity-30" />
      
      {/* Content Card */}
      <motion.div
        className={`${styles.cardBg} rounded-2xl p-8 md:p-12 max-w-lg w-full text-center relative shadow-elegant border ${isNight || isWedding ? 'border-gold/30' : 'border-gold/20'}`}
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        {/* Icon */}
        {icon && (
          <motion.div
            className={`text-6xl mb-4 ${styles.accent}`}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.4, type: "spring" }}
          >
            {icon}
          </motion.div>
        )}

        {/* Title */}
        <motion.h2
          className={`font-display text-3xl md:text-4xl font-bold mb-2 ${isNight || isWedding ? 'text-gold' : 'text-royal-maroon'}`}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {title}
        </motion.h2>

        <GoldOrnament className="my-6" />

        {/* Date & Time */}
        <motion.div
          className={`mb-6 ${isNight || isWedding ? 'text-ivory/90' : 'text-foreground'}`}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <p className="font-display text-2xl md:text-3xl font-semibold mb-1">{date}</p>
          <p className="font-body text-lg opacity-80">{time}</p>
        </motion.div>

        {/* Venue */}
        <motion.div
          className={`mb-8 ${isNight || isWedding ? 'text-ivory/80' : 'text-muted-foreground'}`}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <p className="font-body text-lg font-medium">{venue}</p>
          {venueAddress && (
            <p className="font-body text-sm mt-1 opacity-70">{venueAddress}</p>
          )}
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
            className={`${styles.buttonBg} ${styles.buttonText} px-6 py-3 rounded-full font-body font-medium flex items-center justify-center gap-2 transition-all shadow-gold`}
          >
            <MapPin className="w-5 h-5" />
            View Location
          </a>
          <a
            href={calendarUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`border-2 ${isNight || isWedding ? 'border-gold text-gold hover:bg-gold/10' : 'border-royal-maroon text-royal-maroon hover:bg-royal-maroon/10'} px-6 py-3 rounded-full font-body font-medium flex items-center justify-center gap-2 transition-all`}
          >
            <Calendar className="w-5 h-5" />
            Add to Calendar
          </a>
        </motion.div>
      </motion.div>

      {/* Next Button */}
      {hasNext && onNext && (
        <motion.button
          onClick={onNext}
          className={`mt-8 flex items-center gap-2 ${isNight || isWedding ? 'text-gold' : 'text-royal-maroon'} font-body font-medium group`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          whileHover={{ x: 5 }}
        >
          <span>Next Event</span>
          <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </motion.button>
      )}
    </motion.div>
  );
};
