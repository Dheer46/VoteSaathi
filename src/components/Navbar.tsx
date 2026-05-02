"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe, Check, Command } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { languages, type LanguageCode } from "@/lib/translations";

export default function Navbar() {
  const { t, language, setLanguage } = useLanguage();
  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(event.target as Node)) {
        setLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinks = [
    { label: t.nav.journey, href: "#journey" },
    { label: t.nav.timeline, href: "#timeline" },
    { label: t.nav.actions, href: "#actions" },
    { label: t.nav.assistant, href: "#assistant" },
  ];

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 sm:p-6"
    >
      <nav className="glass max-w-5xl w-full flex items-center justify-between px-4 sm:px-8 py-3 sm:py-4 rounded-full border-white/40 ring-1 ring-black/5 shadow-2xl">
        <div className="flex items-center gap-3">
          <div className="bg-foreground text-background p-1.5 rounded-lg">
            <Command className="h-5 w-5" />
          </div>
          <span className="text-xl font-bold font-serif tracking-tight uppercase">VoteSaathi</span>
        </div>

        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-all relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-saffron transition-all group-hover:w-full" />
            </a>
          ))}
        </div>

        <div className="flex items-center gap-6">
          <div className="relative" ref={langRef}>
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-foreground/80 hover:text-foreground cursor-pointer transition-colors"
            >
              <Globe className="h-4 w-4" />
              <span>{language.toUpperCase()}</span>
            </button>

            <AnimatePresence>
              {langOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  className="absolute right-0 mt-4 w-48 rounded-2xl border border-border bg-background/90 backdrop-blur-xl p-2 shadow-2xl z-[60]"
                >
                  <div className="grid grid-cols-1 gap-1">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setLanguage(lang.code as LanguageCode);
                          setLangOpen(false);
                        }}
                        className={`flex items-center justify-between rounded-xl px-4 py-2.5 text-xs font-bold uppercase tracking-widest transition-all cursor-pointer ${
                          language === lang.code
                            ? "bg-foreground text-background"
                            : "text-foreground/70 hover:bg-muted"
                        }`}
                      >
                        {lang.nativeName}
                        {language === lang.code && <Check className="h-3 w-3" />}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden rounded-full p-2 hover:bg-muted transition-colors cursor-pointer"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer - Luxury Style */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            className="fixed inset-x-6 top-24 rounded-[2rem] border border-border bg-background/95 backdrop-blur-3xl shadow-2xl overflow-hidden md:hidden z-40"
          >
            <div className="flex flex-col p-8 gap-4">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => setOpen(false)}
                  className="text-2xl font-serif font-bold text-foreground hover:text-saffron transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
