"use client";

import { motion } from "framer-motion";
import { QUICK_ACTIONS } from "@/lib/constants";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function QuickActions() {
  const { t } = useLanguage();
  return (
    <section id="actions" className="py-32 bg-white noise">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-end justify-between gap-8 mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }} 
            className="max-w-2xl"
          >
            <h2 className="text-6xl font-serif font-bold leading-[0.9] mb-6">
              {t.actions.title} <br/>
              <span className="gradient-text italic">{t.actions.titleAccent}</span>
            </h2>
            <p className="text-xl text-muted-foreground font-light leading-relaxed">
              {t.actions.subtitle}
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="hidden lg:block pb-2"
          >
             <span className="text-[10px] font-black uppercase tracking-[0.4em] text-muted-foreground border-b border-border pb-2">
                {t.actions.oneTap}
             </span>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {QUICK_ACTIONS.map((action, i) => {
            const Icon = action.icon;
            const translatedItem = t.actions.items[i];
            
            return (
              <motion.button
                key={action.id}
                onClick={() => {
                  if (action.url) {
                    window.open(action.url, "_blank");
                  } else if (action.action) {
                    if (action.action.startsWith("journey-")) {
                      const step = parseInt(action.action.split("-")[1]);
                      document.getElementById("journey")?.scrollIntoView({ behavior: "smooth" });
                      window.dispatchEvent(new CustomEvent("trigger-journey-step", { detail: { step: step - 1 } }));
                    } else if (action.action.startsWith("ask-ai:")) {
                      const prompt = action.action.split(":")[1];
                      document.getElementById("assistant")?.scrollIntoView({ behavior: "smooth" });
                      window.dispatchEvent(new CustomEvent("trigger-ai-chat", { detail: { prompt } }));
                    }
                  }
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative h-[300px] rounded-[2.5rem] border border-border bg-white p-10 text-left transition-all duration-500 hover:shadow-2xl hover:shadow-black/5 hover:-translate-y-2 cursor-pointer flex flex-col justify-between overflow-hidden"
              >
                {/* Decorative background number */}
                <span className="absolute -right-4 -bottom-10 text-[10rem] font-serif font-black opacity-[0.02] transition-transform group-hover:scale-110 duration-700">
                  {i + 1}
                </span>

                <div>
                  <div className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-muted/50 transition-all duration-500 group-hover:bg-foreground group-hover:text-background`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-8 text-2xl font-serif font-bold text-foreground leading-tight">
                    {translatedItem?.title || action.title}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed font-light">
                    {translatedItem?.description || action.description}
                  </p>
                </div>

                <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-saffron opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                  {t.actions.launchAction} <ArrowUpRight className="h-3 w-3" />
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
