import { useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CoverPage } from "@/components/CoverPage";
import { CurtainReveal } from "@/components/CurtainReveal";
import { MehndiEvent } from "@/components/events/MehndiEvent";
import { DJNightEvent } from "@/components/events/DJNightEvent";
import { HaldiEvent } from "@/components/events/HaldiEvent";
import { WeddingEvent } from "@/components/events/WeddingEvent";
import { MusicToggle } from "@/components/MusicToggle";
import { useBackgroundMusic } from "@/hooks/useBackgroundMusic";

type EventView = "cover" | "mehndi" | "djnight" | "haldi" | "wedding";

const eventThemes: Record<EventView, { primary: string; secondary: string; text: string }> = {
  cover: { primary: "#c9a050", secondary: "#8b1d41", text: "#c9a050" },
  mehndi: { primary: "#3b82f6", secondary: "#1e40af", text: "#1e40af" },
  djnight: { primary: "#c9a050", secondary: "#8b5cf6", text: "#c9a050" },
  haldi: { primary: "#ec4899", secondary: "#be185d", text: "#be185d" },
  wedding: { primary: "#c9a050", secondary: "#8b1d41", text: "#c9a050" },
};

const Index = () => {
  const [currentView, setCurrentView] = useState<EventView>("cover");
  const [isOpening, setIsOpening] = useState(false);
  const [showCurtain, setShowCurtain] = useState(false);
  const { isPlaying, toggle: toggleMusic } = useBackgroundMusic();

  const handleOpenCover = useCallback(() => {
    if (isOpening) return;
    setIsOpening(true);
    setShowCurtain(true);
  }, [isOpening]);

  const handleCurtainComplete = useCallback(() => {
    setCurrentView("mehndi");
    setShowCurtain(false);
  }, []);

  const navigateToEvent = useCallback((event: EventView) => {
    setCurrentView(event);
  }, []);

  const currentTheme = eventThemes[currentView];

  return (
    <main className="relative w-full min-h-screen overflow-x-hidden">
      {/* SEO - Hidden H1 for accessibility */}
      <h1 className="sr-only">
        IshnitStory - The Royal Wedding of Gishika Narula and Gunit Madan
      </h1>

      <AnimatePresence mode="wait">
        {currentView === "cover" && !isOpening && (
          <motion.div
            key="cover"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <CoverPage onOpen={handleOpenCover} />
          </motion.div>
        )}

        {currentView === "mehndi" && (
          <motion.div
            key="mehndi"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <MehndiEvent onNext={() => navigateToEvent("djnight")} />
          </motion.div>
        )}

        {currentView === "djnight" && (
          <motion.div
            key="djnight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <DJNightEvent onNext={() => navigateToEvent("haldi")} />
          </motion.div>
        )}

        {currentView === "haldi" && (
          <motion.div
            key="haldi"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <HaldiEvent onNext={() => navigateToEvent("wedding")} />
          </motion.div>
        )}

        {currentView === "wedding" && (
          <motion.div
            key="wedding"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <WeddingEvent />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Curtain Reveal Animation */}
      <CurtainReveal isOpen={showCurtain} onAnimationComplete={handleCurtainComplete} />

      {/* Music Toggle - Always visible with themed color */}
      <MusicToggle 
        isPlaying={isPlaying} 
        onToggle={toggleMusic} 
        themeColor={currentTheme.primary}
      />

      {/* Navigation dots for direct access */}
      {currentView !== "cover" && (
        <motion.nav
          className="fixed left-4 md:left-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1 }}
          aria-label="Event navigation"
        >
          {(["mehndi", "djnight", "haldi", "wedding"] as EventView[]).map((event, index) => {
            const labels = ["Mehndi", "DJ Night", "Haldi", "Wedding"];
            const theme = eventThemes[event];
            return (
              <button
                key={event}
                onClick={() => navigateToEvent(event)}
                className={`group flex items-center gap-2 transition-all ${
                  currentView === event ? "scale-110" : ""
                }`}
                aria-label={`Navigate to ${labels[index]} event`}
                aria-current={currentView === event ? "page" : undefined}
              >
                <span
                  className="w-3 h-3 rounded-full transition-all"
                  style={{
                    backgroundColor: currentView === event ? currentTheme.primary : `${currentTheme.primary}50`,
                    boxShadow: currentView === event ? `0 0 10px ${currentTheme.primary}` : "none",
                  }}
                />
                <span
                  className={`hidden md:block text-xs font-body tracking-wide transition-all ${
                    currentView === event
                      ? "opacity-100"
                      : "opacity-0 group-hover:opacity-70"
                  }`}
                  style={{ color: currentTheme.text }}
                >
                  {labels[index]}
                </span>
              </button>
            );
          })}
        </motion.nav>
      )}
    </main>
  );
};

export default Index;
