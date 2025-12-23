import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface CountdownTimerProps {
  targetDate: Date;
  className?: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const CountdownTimer = ({ targetDate, className = "" }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime();
      
      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }
      
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    };

    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const TimeBlock = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <div className="w-14 h-14 md:w-16 md:h-16 bg-gold/20 border border-gold/40 rounded-lg flex items-center justify-center backdrop-blur-sm">
        <span className="font-display text-2xl md:text-3xl font-bold text-gold">
          {value.toString().padStart(2, "0")}
        </span>
      </div>
      <span className="font-body text-xs text-gold/70 mt-1 tracking-wider uppercase">
        {label}
      </span>
    </div>
  );

  return (
    <motion.div
      className={`flex items-center justify-center gap-2 md:gap-4 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.8, duration: 0.8 }}
    >
      <TimeBlock value={timeLeft.days} label="Days" />
      <span className="text-gold text-2xl font-light mt-[-20px]">:</span>
      <TimeBlock value={timeLeft.hours} label="Hours" />
      <span className="text-gold text-2xl font-light mt-[-20px]">:</span>
      <TimeBlock value={timeLeft.minutes} label="Mins" />
      <span className="text-gold text-2xl font-light mt-[-20px]">:</span>
      <TimeBlock value={timeLeft.seconds} label="Secs" />
    </motion.div>
  );
};
