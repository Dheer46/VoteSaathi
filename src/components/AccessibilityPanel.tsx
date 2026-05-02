"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, Volume2, Contrast, Settings2, X } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { useLanguage } from "@/context/LanguageContext";

export default function AccessibilityPanel() {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [largeText, setLargeText] = useState(false);
  const [highContrast, setHighContrast] = useState(false);
  const [voiceMode, setVoiceMode] = useState(false);

  const toggleLargeText = (checked: boolean) => {
    setLargeText(checked);
    document.documentElement.classList.toggle("text-large", checked);
  };

  const toggleHighContrast = (checked: boolean) => {
    setHighContrast(checked);
    document.documentElement.classList.toggle("high-contrast", checked);
  };

  const toggleVoiceMode = (checked: boolean) => {
    setVoiceMode(checked);
    // This could trigger a global voice state or simply show a toast/notification
    if (checked) {
      window.dispatchEvent(new CustomEvent("trigger-voice-mode"));
    }
  };

  const resetAll = () => {
    toggleLargeText(false);
    toggleHighContrast(false);
    toggleVoiceMode(false);
  };

  return (
    <>
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-24 sm:bottom-20 left-4 sm:left-6 z-[60] flex h-12 w-12 items-center justify-center rounded-full bg-white/90 backdrop-blur-xl border border-border/50 shadow-2xl hover:bg-white transition-all cursor-pointer active:scale-95 group"
        title={t.accessibility.settingsTitle}
      >
        <Settings2 className="h-5 w-5 text-muted-foreground group-hover:text-foreground group-hover:rotate-45 transition-all duration-500" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Mobile Overlay Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/5 backdrop-blur-sm z-50 md:hidden"
            />
            
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              className="fixed bottom-40 sm:bottom-[8.5rem] left-4 sm:left-6 z-[60] w-[calc(100%-2rem)] sm:w-80 rounded-3xl border border-border/50 bg-white/95 backdrop-blur-2xl shadow-2xl p-6 sm:p-5"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <div className="h-6 w-6 rounded-lg bg-saffron/10 flex items-center justify-center text-saffron">
                    <Settings2 className="h-3.5 w-3.5" />
                  </div>
                  <h3 className="text-sm font-black uppercase tracking-widest">{t.accessibility.title}</h3>
                </div>
                <button 
                  onClick={() => setIsOpen(false)} 
                  className="rounded-full p-1.5 hover:bg-muted transition-colors cursor-pointer"
                >
                  <X className="h-4 w-4 text-muted-foreground" />
                </button>
              </div>

              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-9 w-9 rounded-xl bg-muted/50 flex items-center justify-center">
                      <Eye className="h-4.5 w-4.5 text-muted-foreground" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wide">{t.accessibility.largeText}</p>
                      <p className="text-[10px] text-muted-foreground font-medium">{t.accessibility.largeTextDesc}</p>
                    </div>
                  </div>
                  <Switch checked={largeText} onCheckedChange={toggleLargeText} />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-9 w-9 rounded-xl bg-muted/50 flex items-center justify-center">
                      <Contrast className="h-4.5 w-4.5 text-muted-foreground" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wide">{t.accessibility.highContrast}</p>
                      <p className="text-[10px] text-muted-foreground font-medium">{t.accessibility.highContrastDesc}</p>
                    </div>
                  </div>
                  <Switch checked={highContrast} onCheckedChange={toggleHighContrast} />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-9 w-9 rounded-xl bg-muted/50 flex items-center justify-center">
                      <Volume2 className="h-4.5 w-4.5 text-muted-foreground" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wide">{t.accessibility.voice}</p>
                      <p className="text-[10px] text-muted-foreground font-medium">{t.accessibility.voiceDesc}</p>
                    </div>
                  </div>
                  <Switch checked={voiceMode} onCheckedChange={toggleVoiceMode} />
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-border/50">
                <button 
                  onClick={resetAll}
                  className="w-full py-3 rounded-xl bg-muted/50 text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground hover:bg-muted hover:text-foreground transition-all cursor-pointer"
                >
                  {t.accessibility.reset || "Reset Settings"}
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
