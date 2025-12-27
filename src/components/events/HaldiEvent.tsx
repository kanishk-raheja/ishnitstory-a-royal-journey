import { motion } from "framer-motion";
import { MapPin, Calendar, ChevronRight } from "lucide-react";
import { FloatingPetals } from "@/components/FloatingPetals";

interface HaldiEventProps {
  onNext: () => void;
}

export const HaldiEvent = ({ onNext }: HaldiEventProps) => {
  const mapsUrl = "https://www.google.com/maps/search/?api=1&query=Narula+Residence+Yamunanagar+Haryana";
  const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=Haldi+Ceremony+-+IshnitStory&dates=20260131T033000Z/20260131T083000Z&details=Join+us+for+the+Haldi+Ceremony+of+Gishika+%26+Gunit&location=At+our+residence`;

  return (
    <motion.div
      className="min-h-screen w-full relative overflow-hidden flex items-center justify-center"
      style={{
        background: "linear-gradient(180deg, #fdf2f8 0%, #fce7f3 50%, #fbcfe8 100%)"
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Sparkle overlay */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 30%, rgba(255,255,255,0.8) 1px, transparent 1px),
                           radial-gradient(circle at 80% 40%, rgba(255,255,255,0.6) 1px, transparent 1px),
                           radial-gradient(circle at 40% 70%, rgba(255,255,255,0.7) 1px, transparent 1px),
                           radial-gradient(circle at 70% 80%, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: '100px 100px, 150px 150px, 120px 120px, 80px 80px',
        }}
      />

      {/* Floating petals */}
      <FloatingPetals count={12} color="rose" />

      {/* Left Draped Curtain */}
      <motion.div
        className="absolute left-0 top-0 bottom-0 w-16 md:w-24 pointer-events-none"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <svg viewBox="0 0 100 600" className="h-full w-full" preserveAspectRatio="none">
          <defs>
            <linearGradient id="curtainLeftGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#f472b6" />
              <stop offset="50%" stopColor="#ec4899" />
              <stop offset="100%" stopColor="#db2777" />
            </linearGradient>
            <linearGradient id="curtainLeftShine" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.3)" />
              <stop offset="50%" stopColor="rgba(255,255,255,0.1)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0)" />
            </linearGradient>
          </defs>
          {/* Main curtain fabric */}
          <path
            d="M0 0 L80 0 Q100 50 85 100 Q70 150 90 200 Q100 250 80 300 Q60 350 85 400 Q100 450 75 500 Q60 550 80 600 L0 600 Z"
            fill="url(#curtainLeftGrad)"
          />
          {/* Fabric folds/shine */}
          <path
            d="M10 0 Q30 50 20 100 Q10 150 25 200 Q35 250 20 300 Q10 350 25 400 Q35 450 20 500 Q10 550 25 600"
            fill="none"
            stroke="url(#curtainLeftShine)"
            strokeWidth="15"
          />
          {/* Gold border trim */}
          <path
            d="M80 0 Q100 50 85 100 Q70 150 90 200 Q100 250 80 300 Q60 350 85 400 Q100 450 75 500 Q60 550 80 600"
            fill="none"
            stroke="#c9a050"
            strokeWidth="3"
          />
        </svg>
      </motion.div>

      {/* Right Draped Curtain */}
      <motion.div
        className="absolute right-0 top-0 bottom-0 w-16 md:w-24 pointer-events-none"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <svg viewBox="0 0 100 600" className="h-full w-full" preserveAspectRatio="none">
          <defs>
            <linearGradient id="curtainRightGrad" x1="100%" y1="0%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#f472b6" />
              <stop offset="50%" stopColor="#ec4899" />
              <stop offset="100%" stopColor="#db2777" />
            </linearGradient>
            <linearGradient id="curtainRightShine" x1="100%" y1="0%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.3)" />
              <stop offset="50%" stopColor="rgba(255,255,255,0.1)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0)" />
            </linearGradient>
          </defs>
          <path
            d="M100 0 L20 0 Q0 50 15 100 Q30 150 10 200 Q0 250 20 300 Q40 350 15 400 Q0 450 25 500 Q40 550 20 600 L100 600 Z"
            fill="url(#curtainRightGrad)"
          />
          <path
            d="M90 0 Q70 50 80 100 Q90 150 75 200 Q65 250 80 300 Q90 350 75 400 Q65 450 80 500 Q90 550 75 600"
            fill="none"
            stroke="url(#curtainRightShine)"
            strokeWidth="15"
          />
          <path
            d="M20 0 Q0 50 15 100 Q30 150 10 200 Q0 250 20 300 Q40 350 15 400 Q0 450 25 500 Q40 550 20 600"
            fill="none"
            stroke="#c9a050"
            strokeWidth="3"
          />
        </svg>
      </motion.div>

      {/* Top Floral Toran with flowers and hanging bells */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-32 md:h-40 pointer-events-none z-10"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <svg viewBox="0 0 400 120" className="w-full h-full" preserveAspectRatio="xMidYMin slice">
          <defs>
            <linearGradient id="leafGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#22c55e" />
              <stop offset="100%" stopColor="#16a34a" />
            </linearGradient>
          </defs>
          
          {/* Leaves base */}
          {[0, 40, 80, 120, 160, 200, 240, 280, 320, 360].map((x, i) => (
            <g key={`leaf-group-${i}`}>
              <motion.path
                d={`M${x} 0 Q${x + 10} 20 ${x + 20} 35 Q${x + 10} 40 ${x} 25 Z`}
                fill="url(#leafGrad)"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5 + i * 0.05 }}
              />
              <motion.path
                d={`M${x + 20} 0 Q${x + 30} 25 ${x + 40} 40 Q${x + 30} 42 ${x + 20} 28 Z`}
                fill="url(#leafGrad)"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.55 + i * 0.05 }}
              />
            </g>
          ))}
          
          {/* Flowers - Pink and white */}
          {[30, 100, 170, 230, 300, 370].map((x, i) => (
            <motion.g key={`flower-${i}`} initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.6 + i * 0.08, type: "spring" }}>
              {/* Flower petals */}
              {[0, 72, 144, 216, 288].map((angle, j) => (
                <ellipse
                  key={`petal-${i}-${j}`}
                  cx={x + Math.cos((angle * Math.PI) / 180) * 8}
                  cy={30 + Math.sin((angle * Math.PI) / 180) * 8}
                  rx="6"
                  ry="10"
                  fill={i % 2 === 0 ? "#fdf2f8" : "#f9a8d4"}
                  transform={`rotate(${angle} ${x + Math.cos((angle * Math.PI) / 180) * 8} ${30 + Math.sin((angle * Math.PI) / 180) * 8})`}
                />
              ))}
              {/* Flower center */}
              <circle cx={x} cy="30" r="5" fill="#fbbf24" />
            </motion.g>
          ))}
          
          {/* Marigold chain hanging - curved */}
          <motion.path
            d="M60 45 Q200 80 340 45"
            fill="none"
            stroke="#fbbf24"
            strokeWidth="4"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          />
          
          {/* Marigold beads on chain */}
          {[80, 120, 160, 200, 240, 280, 320].map((x, i) => {
            const y = 45 + Math.sin(((x - 60) / 280) * Math.PI) * 35;
            return (
              <motion.circle
                key={`bead-${i}`}
                cx={x}
                cy={y}
                r="4"
                fill="#fbbf24"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.9 + i * 0.05, type: "spring" }}
              />
            );
          })}
          
          {/* Hanging bells and decorations */}
          {[100, 150, 200, 250, 300].map((x, i) => {
            const chainY = 45 + Math.sin(((x - 60) / 280) * Math.PI) * 35;
            const bellColors = ["#ec4899", "#22c55e", "#fbbf24", "#f472b6", "#16a34a"];
            return (
              <motion.g key={`bell-${i}`} initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 1 + i * 0.1 }}>
                {/* Chain to bell */}
                <line x1={x} y1={chainY} x2={x} y2={chainY + 25} stroke="#c9a050" strokeWidth="1.5" />
                {/* Decorative beads above bell */}
                <circle cx={x} cy={chainY + 10} r="3" fill="#ec4899" />
                <circle cx={x} cy={chainY + 17} r="2.5" fill="#22c55e" />
                {/* Bell shape */}
                <motion.path
                  d={`M${x - 8} ${chainY + 25} Q${x - 10} ${chainY + 40} ${x} ${chainY + 45} Q${x + 10} ${chainY + 40} ${x + 8} ${chainY + 25} Z`}
                  fill={bellColors[i]}
                  animate={{ rotate: [-2, 2, -2] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                  style={{ transformOrigin: `${x}px ${chainY}px` }}
                />
                {/* Bell clapper */}
                <circle cx={x} cy={chainY + 42} r="2" fill="#c9a050" />
              </motion.g>
            );
          })}
        </svg>
      </motion.div>

      {/* Side marigold strings - Left */}
      <motion.div
        className="absolute left-12 md:left-20 top-28 md:top-36 pointer-events-none"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
      >
        <svg width="30" height="200" viewBox="0 0 30 200">
          {[0, 25, 50, 75, 100, 125, 150, 175].map((y, i) => (
            <motion.circle
              key={`left-marigold-${i}`}
              cx="15"
              cy={y + 10}
              r="8"
              fill="#fbbf24"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1 + i * 0.08, type: "spring" }}
            />
          ))}
          <line x1="15" y1="0" x2="15" y2="200" stroke="#c9a050" strokeWidth="2" />
        </svg>
      </motion.div>

      {/* Side marigold strings - Right */}
      <motion.div
        className="absolute right-12 md:right-20 top-28 md:top-36 pointer-events-none"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
      >
        <svg width="30" height="200" viewBox="0 0 30 200">
          {[0, 25, 50, 75, 100, 125, 150, 175].map((y, i) => (
            <motion.circle
              key={`right-marigold-${i}`}
              cx="15"
              cy={y + 10}
              r="8"
              fill="#fbbf24"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.1 + i * 0.08, type: "spring" }}
            />
          ))}
          <line x1="15" y1="0" x2="15" y2="200" stroke="#c9a050" strokeWidth="2" />
        </svg>
      </motion.div>

      {/* Corner flower decorations - Bottom left */}
      <motion.div
        className="absolute left-4 md:left-8 bottom-24 md:bottom-28 pointer-events-none"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <svg width="80" height="80" viewBox="0 0 80 80">
          <path d="M0 80 Q10 60 20 70 Q30 50 15 40 Q30 30 20 15 Q40 25 50 10 Q45 30 60 30" fill="none" stroke="#22c55e" strokeWidth="2" />
          {[
            { cx: 20, cy: 65, r: 12 },
            { cx: 18, cy: 40, r: 10 },
            { cx: 35, cy: 20, r: 10 },
          ].map((f, i) => (
            <g key={`bl-flower-${i}`}>
              {[0, 72, 144, 216, 288].map((angle, j) => (
                <ellipse
                  key={j}
                  cx={f.cx + Math.cos((angle * Math.PI) / 180) * (f.r * 0.5)}
                  cy={f.cy + Math.sin((angle * Math.PI) / 180) * (f.r * 0.5)}
                  rx={f.r * 0.4}
                  ry={f.r * 0.6}
                  fill={i % 2 === 0 ? "#f9a8d4" : "#fdf2f8"}
                  transform={`rotate(${angle} ${f.cx + Math.cos((angle * Math.PI) / 180) * (f.r * 0.5)} ${f.cy + Math.sin((angle * Math.PI) / 180) * (f.r * 0.5)})`}
                />
              ))}
              <circle cx={f.cx} cy={f.cy} r={f.r * 0.25} fill="#fbbf24" />
            </g>
          ))}
        </svg>
      </motion.div>

      {/* Corner flower decorations - Bottom right */}
      <motion.div
        className="absolute right-4 md:right-8 bottom-24 md:bottom-28 pointer-events-none"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.3 }}
      >
        <svg width="80" height="80" viewBox="0 0 80 80" style={{ transform: 'scaleX(-1)' }}>
          <path d="M0 80 Q10 60 20 70 Q30 50 15 40 Q30 30 20 15 Q40 25 50 10 Q45 30 60 30" fill="none" stroke="#22c55e" strokeWidth="2" />
          {[
            { cx: 20, cy: 65, r: 12 },
            { cx: 18, cy: 40, r: 10 },
            { cx: 35, cy: 20, r: 10 },
          ].map((f, i) => (
            <g key={`br-flower-${i}`}>
              {[0, 72, 144, 216, 288].map((angle, j) => (
                <ellipse
                  key={j}
                  cx={f.cx + Math.cos((angle * Math.PI) / 180) * (f.r * 0.5)}
                  cy={f.cy + Math.sin((angle * Math.PI) / 180) * (f.r * 0.5)}
                  rx={f.r * 0.4}
                  ry={f.r * 0.6}
                  fill={i % 2 === 0 ? "#fdf2f8" : "#f9a8d4"}
                  transform={`rotate(${angle} ${f.cx + Math.cos((angle * Math.PI) / 180) * (f.r * 0.5)} ${f.cy + Math.sin((angle * Math.PI) / 180) * (f.r * 0.5)})`}
                />
              ))}
              <circle cx={f.cx} cy={f.cy} r={f.r * 0.25} fill="#fbbf24" />
            </g>
          ))}
        </svg>
      </motion.div>

      {/* Main Content Area */}
      <div className="relative z-10 flex flex-col items-center justify-between min-h-screen py-36 md:py-44 px-8">
        
        {/* Title Section */}
        <motion.div
          className="text-center"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <motion.p
            className="font-body text-sm md:text-base tracking-[0.3em] uppercase mb-2"
            style={{ color: "#6b7280" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            You are cordially invited to the
          </motion.p>
          
          <motion.h1
            className="font-script text-5xl md:text-6xl lg:text-7xl mb-3"
            style={{
              color: "#be185d",
              textShadow: "0 2px 20px rgba(236, 72, 153, 0.3)"
            }}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.7, type: "spring" }}
          >
            Haldi Ceremony
          </motion.h1>
          
          <motion.p
            className="font-body text-sm md:text-base tracking-[0.2em] uppercase text-muted-foreground mb-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            of
          </motion.p>
          
          <motion.p
            className="font-script text-3xl md:text-4xl"
            style={{ color: "#db2777" }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            Gishika & Gunit
          </motion.p>
        </motion.div>

        {/* Event Details */}
        <motion.div
          className="text-center my-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <p className="font-display text-xl md:text-2xl font-semibold mb-1" style={{ color: "#1f2937" }}>
            31 January 2026 | 9:00 a.m.
          </p>
          <p className="font-body text-base md:text-lg text-muted-foreground tracking-wider uppercase">
            At our residence
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center mt-5">
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white px-6 py-2.5 rounded-full font-body text-sm font-medium flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-pink-300/50"
            >
              <MapPin className="w-4 h-4" />
              View Location
            </a>
            <a
              href={calendarUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-pink-500 text-pink-600 hover:bg-pink-50 px-6 py-2.5 rounded-full font-body text-sm font-medium flex items-center justify-center gap-2 transition-all"
            >
              <Calendar className="w-4 h-4" />
              Add to Calendar
            </a>
          </div>
        </motion.div>

        {/* Bride Illustration at Bottom */}
        <motion.div
          className="relative"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
        >
          {/* Glow behind bride */}
          <motion.div
            className="absolute -inset-8 blur-3xl"
            style={{
              background: "radial-gradient(ellipse, rgba(251, 191, 36, 0.3) 0%, transparent 70%)"
            }}
            animate={{ opacity: [0.4, 0.6, 0.4] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          
          {/* Bride SVG */}
          <svg viewBox="0 0 200 220" className="w-48 h-56 md:w-56 md:h-64 relative z-10" fill="none">
            {/* Hair - flowing */}
            <motion.path
              d="M70 60 Q60 80 55 120 Q50 160 60 200 L80 200 Q75 160 80 120 Q82 90 85 70 Z"
              fill="#1c1917"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            />
            <motion.path
              d="M130 60 Q140 80 145 120 Q150 160 140 200 L120 200 Q125 160 120 120 Q118 90 115 70 Z"
              fill="#1c1917"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            />
            
            {/* Face */}
            <motion.ellipse
              cx="100"
              cy="55"
              rx="28"
              ry="32"
              fill="#fcd9b6"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1.15 }}
            />
            
            {/* Hair top */}
            <motion.path
              d="M70 45 Q75 25 100 20 Q125 25 130 45 Q128 35 100 30 Q72 35 70 45 Z"
              fill="#1c1917"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            />
            
            {/* Haldi on face - forehead and cheeks */}
            <motion.ellipse
              cx="100"
              cy="42"
              rx="12"
              ry="8"
              fill="#fbbf24"
              opacity="0.6"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.4 }}
            />
            <motion.ellipse
              cx="80"
              cy="55"
              rx="6"
              ry="5"
              fill="#fbbf24"
              opacity="0.5"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.45 }}
            />
            <motion.ellipse
              cx="120"
              cy="55"
              rx="6"
              ry="5"
              fill="#fbbf24"
              opacity="0.5"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.45 }}
            />
            
            {/* Eyes - closed happy */}
            <motion.path
              d="M85 52 Q90 48 95 52"
              stroke="#1c1917"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 1.3 }}
            />
            <motion.path
              d="M105 52 Q110 48 115 52"
              stroke="#1c1917"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 1.3 }}
            />
            
            {/* Smile */}
            <motion.path
              d="M92 68 Q100 75 108 68"
              stroke="#be185d"
              strokeWidth="2.5"
              strokeLinecap="round"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 1.35 }}
            />
            
            {/* Maang tikka */}
            <motion.circle
              cx="100"
              cy="30"
              r="5"
              fill="#fbbf24"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.5, type: "spring" }}
            />
            <motion.path
              d="M100 30 L100 38"
              stroke="#fbbf24"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 1.55 }}
            />
            <motion.circle
              cx="100"
              cy="40"
              r="3"
              fill="#ec4899"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.6 }}
            />
            
            {/* Jhumka earrings */}
            {[72, 128].map((x, i) => (
              <motion.g key={`ear-${i}`} initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.55 + i * 0.1 }}>
                <circle cx={x} cy={58} r="4" fill="#fbbf24" />
                <ellipse cx={x} cy={65} rx="5" ry="7" fill="#fbbf24" />
                <circle cx={x} cy={73} r="2.5" fill="#fdf2f8" />
                <circle cx={x - 3} cy={70} r="2" fill="#ec4899" />
                <circle cx={x + 3} cy={70} r="2" fill="#ec4899" />
              </motion.g>
            ))}
            
            {/* Necklace */}
            <motion.path
              d="M78 85 Q100 100 122 85"
              stroke="#fbbf24"
              strokeWidth="4"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 1.6 }}
            />
            <motion.path
              d="M82 90 Q100 103 118 90"
              stroke="#fbbf24"
              strokeWidth="3"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 1.65 }}
            />
            <motion.circle
              cx="100"
              cy="100"
              r="5"
              fill="#ec4899"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.7 }}
            />
            
            {/* Blouse/Saree top */}
            <motion.path
              d="M75 88 Q70 105 75 120 L125 120 Q130 105 125 88 Q100 78 75 88 Z"
              fill="#fbbf24"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4 }}
            />
            
            {/* Arms extended with henna */}
            <motion.path
              d="M75 105 Q45 125 30 140 Q25 145 35 148 L55 135"
              fill="#fcd9b6"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ delay: 1.5 }}
            />
            <motion.path
              d="M125 105 Q155 125 170 140 Q175 145 165 148 L145 135"
              fill="#fcd9b6"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ delay: 1.5 }}
            />
            
            {/* Henna on hands */}
            <motion.path
              d="M32 142 Q38 138 42 142 M35 145 Q38 142 42 145"
              stroke="#8b4513"
              strokeWidth="1.5"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 1.7 }}
            />
            <motion.path
              d="M168 142 Q162 138 158 142 M165 145 Q162 142 158 145"
              stroke="#8b4513"
              strokeWidth="1.5"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 1.7 }}
            />
            
            {/* Bangles */}
            {[125, 130, 135].map((y, i) => (
              <g key={`bangle-l-${i}`}>
                <motion.circle
                  cx="50"
                  cy={y}
                  r="5"
                  fill={i % 2 === 0 ? "#ec4899" : "#fbbf24"}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.6 + i * 0.05 }}
                />
                <motion.circle
                  cx="150"
                  cy={y}
                  r="5"
                  fill={i % 2 === 0 ? "#fbbf24" : "#ec4899"}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.6 + i * 0.05 }}
                />
              </g>
            ))}
            
            {/* Saree drape */}
            <motion.path
              d="M70 120 Q50 160 60 220 L140 220 Q150 160 130 120 Z"
              fill="#fbbf24"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ delay: 1.45, duration: 0.5 }}
              style={{ transformOrigin: 'center top' }}
            />
            {/* Saree border */}
            <motion.path
              d="M62 200 Q100 195 138 200"
              stroke="#c9a050"
              strokeWidth="3"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 1.7 }}
            />
            <motion.path
              d="M60 210 Q100 205 140 210"
              stroke="#be185d"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 1.75 }}
            />
            
            {/* Dupatta */}
            <motion.path
              d="M72 88 Q55 100 45 130 Q38 160 50 200 Q55 180 60 160 Q65 130 75 110 Z"
              fill="#fef3c7"
              opacity="0.8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              transition={{ delay: 1.5 }}
            />
          </svg>
          
          {/* Floating haldi/turmeric pieces around bride */}
          {[
            { x: -60, y: -20, delay: 1.8 },
            { x: 60, y: -10, delay: 2 },
            { x: -40, y: 30, delay: 2.2 },
            { x: 50, y: 40, delay: 2.1 },
            { x: -20, y: -40, delay: 1.9 },
            { x: 30, y: -30, delay: 2.3 },
          ].map((pos, i) => (
            <motion.div
              key={`haldi-${i}`}
              className="absolute"
              style={{ left: `calc(50% + ${pos.x}px)`, top: `calc(50% + ${pos.y}px)` }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ 
                opacity: [0, 1, 0],
                y: [pos.y - 20, pos.y + 30],
                rotate: [0, 180]
              }}
              transition={{ 
                delay: pos.delay,
                duration: 3,
                repeat: Infinity,
                repeatDelay: 1
              }}
            >
              <svg width="12" height="16" viewBox="0 0 12 16">
                <path d="M6 0 Q12 4 10 10 Q8 16 6 16 Q4 16 2 10 Q0 4 6 0" fill="#fbbf24" opacity="0.8" />
              </svg>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Next Button */}
      <motion.button
        onClick={onNext}
        className="absolute bottom-4 md:bottom-6 flex items-center gap-2 font-body font-semibold group px-6 py-3 rounded-full shadow-lg border z-20"
        style={{
          background: "linear-gradient(135deg, rgba(255,255,255,0.95), rgba(253,242,248,0.95))",
          borderColor: "rgba(236, 72, 153, 0.3)",
          color: "#be185d"
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
        whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(236, 72, 153, 0.2)" }}
        whileTap={{ scale: 0.95 }}
      >
        <span>Wedding Ceremony</span>
        <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </motion.button>
    </motion.div>
  );
};