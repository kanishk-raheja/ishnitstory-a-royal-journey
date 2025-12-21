import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Royal Wedding Colors
        royal: {
          maroon: "hsl(var(--royal-maroon))",
          "maroon-light": "hsl(var(--royal-maroon-light))",
          "maroon-dark": "hsl(var(--royal-maroon-dark))",
        },
        gold: {
          DEFAULT: "hsl(var(--champagne-gold))",
          light: "hsl(var(--champagne-gold-light))",
          dark: "hsl(var(--champagne-gold-dark))",
        },
        emerald: {
          royal: "hsl(var(--deep-emerald))",
          light: "hsl(var(--deep-emerald-light))",
        },
        ivory: {
          DEFAULT: "hsl(var(--ivory))",
          warm: "hsl(var(--ivory-warm))",
        },
        night: {
          purple: "hsl(var(--night-purple))",
          light: "hsl(var(--night-purple-light))",
        },
        haldi: {
          DEFAULT: "hsl(var(--haldi-yellow))",
          light: "hsl(var(--haldi-yellow-light))",
        },
        mehndi: {
          green: "hsl(var(--mehndi-green))",
          peach: "hsl(var(--mehndi-peach))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      fontFamily: {
        display: ["Playfair Display", "serif"],
        script: ["Cormorant Garamond", "serif"],
        body: ["Montserrat", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "slide-in-left": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        "slide-in-right": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        "curtain-left": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
        "curtain-right": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(100%)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        sparkle: {
          "0%, 100%": { opacity: "0", transform: "scale(0)" },
          "50%": { opacity: "1", transform: "scale(1)" },
        },
        "petal-fall": {
          "0%": { transform: "translateY(-10%) rotate(0deg)", opacity: "1" },
          "100%": { transform: "translateY(100vh) rotate(720deg)", opacity: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.6s ease-out forwards",
        "fade-in-up": "fade-in-up 0.8s ease-out forwards",
        "scale-in": "scale-in 0.5s ease-out forwards",
        "slide-in-left": "slide-in-left 0.8s ease-out forwards",
        "slide-in-right": "slide-in-right 0.8s ease-out forwards",
        "curtain-left": "curtain-left 1s ease-in-out forwards",
        "curtain-right": "curtain-right 1s ease-in-out forwards",
        shimmer: "shimmer 3s ease-in-out infinite",
        float: "float 3s ease-in-out infinite",
        pulse: "pulse 2s ease-in-out infinite",
        "spin-slow": "spin-slow 20s linear infinite",
        sparkle: "sparkle 2s ease-in-out infinite",
        "petal-fall": "petal-fall 10s linear infinite",
      },
      backgroundImage: {
        "gradient-royal": "linear-gradient(135deg, hsl(var(--royal-maroon)) 0%, hsl(var(--royal-maroon-dark)) 100%)",
        "gradient-gold": "linear-gradient(135deg, hsl(var(--champagne-gold-light)) 0%, hsl(var(--champagne-gold)) 50%, hsl(var(--champagne-gold-dark)) 100%)",
        "gradient-night": "linear-gradient(180deg, hsl(270 50% 8%) 0%, hsl(var(--night-purple)) 50%, hsl(270 40% 12%) 100%)",
        "gradient-haldi": "linear-gradient(180deg, hsl(var(--haldi-yellow-light)) 0%, hsl(var(--haldi-yellow)) 100%)",
        "gradient-mehndi": "linear-gradient(180deg, hsl(var(--mehndi-peach)) 0%, hsl(20 70% 92%) 100%)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
