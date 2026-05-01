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

  return (
    <>
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-20 left-6 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-muted/90 border border-border/50 shadow-lg hover:bg-muted transition-colors cursor-pointer"
        title={t.accessibility.settingsTitle}
      >
        <Settings2 className="h-4.5 w-4.5 text-muted-foreground" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10 }}
            className="fixed bottom-[8.5rem] left-6 z-50 w-72 rounded-2xl border border-border/50 bg-background shadow-xl p-4"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-semibold">{t.accessibility.title}</h3>
              <button onClick={() => setIsOpen(false)} className="rounded-lg p-1 hover:bg-muted cursor-pointer"><X className="h-4 w-4 text-muted-foreground" /></button>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <Eye className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">{t.accessibility.largeText}</p>
                    <p className="text-[10px] text-muted-foreground">{t.accessibility.largeTextDesc}</p>
                  </div>
                </div>
                <Switch checked={largeText} onCheckedChange={toggleLargeText} />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <Contrast className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">{t.accessibility.highContrast}</p>
                    <p className="text-[10px] text-muted-foreground">{t.accessibility.highContrastDesc}</p>
                  </div>
                </div>
                <Switch checked={highContrast} onCheckedChange={toggleHighContrast} />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <Volume2 className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">{t.accessibility.voice}</p>
                    <p className="text-[10px] text-muted-foreground">{t.accessibility.voiceDesc}</p>
                  </div>
                </div>
                <Switch checked={voiceMode} onCheckedChange={setVoiceMode} />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
