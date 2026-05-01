"use client";

import { motion } from "framer-motion";
import { Sparkles, ArrowRight, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";

interface HeroSectionProps {
  onStartJourney: () => void;
  onOpenChat: () => void;
}

export default function HeroSection({ onStartJourney, onOpenChat }: HeroSectionProps) {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[95vh] flex items-center pt-24 pb-16 overflow-hidden noise">
      {/* Editorial Background Element */}
      <div className="absolute right-0 top-0 w-1/2 h-full z-0 hidden lg:block opacity-60">
        <div className="absolute inset-0 bg-gradient-to-l from-background to-transparent z-10" />
        <img 
          src="/images/hero-bg.png" 
          alt="Indian Parliament" 
          className="w-full h-full object-cover grayscale brightness-110 sepia-[0.1]"
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            {/* Elegant Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-10 inline-flex items-center gap-3 rounded-full border border-saffron/30 bg-saffron/5 px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-saffron-dark"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-saffron opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-saffron"></span>
              </span>
              {t.hero.badge}
            </motion.div>

            {/* Editorial Title */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-6xl sm:text-7xl lg:text-8xl font-serif text-foreground leading-[0.9] mb-8"
            >
              <span className="block italic font-light opacity-80">{t.hero.title}</span>
              <span className="block gradient-text relative">
                {t.hero.titleAccent}
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 1, duration: 1.2 }}
                  className="absolute -bottom-2 left-0 h-1 bg-saffron/30"
                />
              </span>
            </motion.h1>

            {/* Refined Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-lg mb-12 font-light"
            >
              {t.hero.subtitle}
            </motion.p>

            {/* High-Impact Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex flex-col sm:flex-row gap-6"
            >
              <Button
                onClick={onStartJourney}
                size="lg"
                className="group relative h-16 px-8 bg-foreground text-background rounded-full overflow-hidden transition-all hover:scale-[1.02] active:scale-95"
              >
                <span className="relative z-10 flex items-center gap-2 text-base font-bold">
                  Start Your Journey <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-saffron to-saffron-dark opacity-0 group-hover:opacity-100 transition-opacity" />
              </Button>

              <Button
                onClick={onOpenChat}
                variant="outline"
                size="lg"
                className="h-16 px-8 rounded-full border-2 border-foreground/10 hover:bg-foreground/5 transition-all text-base font-bold"
              >
                {t.nav.askAi}
              </Button>
            </motion.div>

            {/* Trust Markers */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4 }}
              className="mt-16 flex items-center gap-8 border-t border-border/50 pt-8"
            >
              <div>
                <p className="text-3xl font-serif font-bold">950M+</p>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mt-1">Eligible Voters</p>
              </div>
              <div className="w-px h-10 bg-border" />
              <div>
                <p className="text-3xl font-serif font-bold">1M+</p>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mt-1">Polling Stations</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Decorative Orbs - Reduced opacity for Luxury feel */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-[1]">
        <motion.div
          className="absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-saffron/10 blur-[120px]"
          animate={{ scale: [1, 1.2, 1], x: [0, 50, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-40 -right-40 h-[600px] w-[600px] rounded-full bg-green-india/10 blur-[120px]"
          animate={{ scale: [1, 1.1, 1], y: [0, -50, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
        />
      </div>
    </section>
  );
}
