import { useRef, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { CoverPage } from "@/components/CoverPage";
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
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const { isPlaying, toggle: toggleMusic } = useBackgroundMusic();

  const events: EventView[] = useMemo(() => ["cover", "mehndi", "djnight", "haldi", "wedding"], []);
  const labels = ["Cover", "Mehndi", "DJ Night", "Haldi", "Wedding"];

  const scrollToSection = (index: number) => {
    sectionRefs.current[index]?.scrollIntoView({ behavior: "smooth" });
  };

  // Intersection observer to detect current section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionRefs.current.findIndex((ref) => ref === entry.target);
            if (index !== -1) {
              // Update URL hash without scroll
              window.history.replaceState(null, "", `#${events[index]}`);
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [events]);

  // Get current visible section for theming
  const getCurrentSection = (): EventView => {
    if (typeof window === "undefined") return "cover";
    const hash = window.location.hash.replace("#", "") as EventView;
    return events.includes(hash) ? hash : "cover";
  };

  const currentTheme = eventThemes[getCurrentSection()] || eventThemes.cover;

  return (
    <main ref={containerRef} className="relative w-full">
      {/* SEO - Hidden H1 for accessibility */}
      <h1 className="sr-only">
        IshnitStory - The Royal Wedding of Gishika Narula and Gunit Madan
      </h1>

      {/* Scrollable Sections */}
      <div className="snap-y snap-mandatory h-screen overflow-y-auto scroll-smooth">
        {/* Cover Section */}
        <div
          ref={(el) => (sectionRefs.current[0] = el)}
          className="snap-start h-screen"
          id="cover"
        >
          <CoverPage onOpen={() => scrollToSection(1)} />
        </div>

        {/* Mehndi Section */}
        <div
          ref={(el) => (sectionRefs.current[1] = el)}
          className="snap-start h-screen"
          id="mehndi"
        >
          <MehndiEvent onNext={() => scrollToSection(2)} />
        </div>

        {/* DJ Night Section */}
        <div
          ref={(el) => (sectionRefs.current[2] = el)}
          className="snap-start h-screen"
          id="djnight"
        >
          <DJNightEvent onNext={() => scrollToSection(3)} />
        </div>

        {/* Haldi Section */}
        <div
          ref={(el) => (sectionRefs.current[3] = el)}
          className="snap-start h-screen"
          id="haldi"
        >
          <HaldiEvent onNext={() => scrollToSection(4)} />
        </div>

        {/* Wedding Section */}
        <div
          ref={(el) => (sectionRefs.current[4] = el)}
          className="snap-start h-screen"
          id="wedding"
        >
          <WeddingEvent />
        </div>
      </div>

      {/* Music Toggle - Always visible, themed */}
      <MusicToggle 
        isPlaying={isPlaying} 
        onToggle={toggleMusic} 
        themeColor={currentTheme.primary}
      />

      {/* Navigation dots - Always visible, themed */}
      <motion.nav
        className="fixed left-4 md:left-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1 }}
        aria-label="Event navigation"
      >
        {events.map((event, index) => (
          <button
            key={event}
            onClick={() => scrollToSection(index)}
            className="group flex items-center gap-2 transition-all"
            aria-label={`Navigate to ${labels[index]} event`}
          >
            <span
              className="w-3 h-3 rounded-full transition-all border-2"
              style={{
                backgroundColor: currentTheme.primary,
                borderColor: currentTheme.primary,
                opacity: 0.8,
              }}
            />
            <span
              className="hidden md:block text-xs font-body tracking-wide transition-all opacity-0 group-hover:opacity-100"
              style={{ color: currentTheme.text }}
            >
              {labels[index]}
            </span>
          </button>
        ))}
      </motion.nav>
    </main>
  );
};

export default Index;
