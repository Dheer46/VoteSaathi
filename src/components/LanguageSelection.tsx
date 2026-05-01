"use client";

import { motion } from "framer-motion";
import { Sparkles, Globe } from "lucide-react";
import { languages, LanguageCode } from "@/lib/translations";
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@/components/ui/button";

export default function LanguageSelection() {
  const { setLanguage } = useLanguage();

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-saffron/10 via-saffron/5 to-transparent blur-3xl"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 10, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-gradient-to-tr from-green-india/10 via-green-india/5 to-transparent blur-3xl"
          animate={{ scale: [1.1, 1, 1.1], rotate: [0, -10, 0] }}
          transition={{ duration: 18, repeat: Infinity }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 w-full max-w-xl px-6 text-center"
      >
        <div className="mb-8 flex justify-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-saffron to-saffron-dark shadow-2xl shadow-saffron/40">
            <Sparkles className="h-10 w-10 text-white" />
          </div>
        </div>

        <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
          Namaste! <span className="inline-block animate-bounce">🙏</span>
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Welcome to VoteSaathi AI. Please select your preferred language to continue.
        </p>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {languages.map((lang, index) => (
            <motion.button
              key={lang.code}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              onClick={() => setLanguage(lang.code as LanguageCode)}
              className="group flex flex-col items-center gap-3 rounded-2xl border border-border/50 bg-card p-5 transition-all hover:scale-[1.05] hover:border-saffron/30 hover:shadow-xl hover:shadow-saffron/10 cursor-pointer"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-muted transition-colors group-hover:bg-saffron/10 group-hover:text-saffron">
                <span className="text-xl font-bold">{lang.nativeName.charAt(0)}</span>
              </div>
              <div className="text-center">
                <p className="text-sm font-bold text-foreground">{lang.nativeName}</p>
                <p className="text-[10px] uppercase tracking-wider text-muted-foreground">
                  {lang.name}
                </p>
              </div>
            </motion.button>
          ))}
        </div>

        <div className="mt-12 flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <Globe className="h-4 w-4" />
          <span>More languages coming soon</span>
        </div>
      </motion.div>
    </div>
  );
}
