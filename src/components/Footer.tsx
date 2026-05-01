"use client";

import { motion } from "framer-motion";
import { Command, Heart, Globe, Mail, MessageSquare } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer({ onOpenLegal }: { onOpenLegal: (type: "privacy" | "terms" | "faq" | "contact") => void }) {
  const { t } = useLanguage();
  return (
    <footer className="bg-background border-t border-border/50 py-24 sm:py-32 noise relative overflow-hidden">
      {/* Editorial Decorative Background */}
      <div className="absolute right-0 bottom-0 opacity-[0.02] pointer-events-none select-none">
        <h2 className="text-[20vw] font-serif font-black leading-none whitespace-nowrap">VOTESAATHI</h2>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
          
          {/* Brand & Manifesto */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-foreground text-background p-2 rounded-xl">
                <Command className="h-6 w-6" />
              </div>
              <span className="text-2xl font-serif font-bold tracking-tight uppercase">VoteSaathi</span>
            </div>
            <p className="text-xl text-muted-foreground font-light leading-relaxed max-w-md mb-10">
              {t.footer.description}
            </p>
            <div className="flex items-center gap-6">
              {[Globe, Mail, MessageSquare].map((Icon, i) => (
                <a key={i} href="#" className="h-10 w-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:bg-foreground hover:text-background hover:border-foreground transition-all duration-300">
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links - Multi Column */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-12 lg:gap-8">
            {/* Quick Links */}
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-saffron mb-6">{t.footer.links}</h4>
              <ul className="space-y-4">
                {[
                  { name: t.nav.journey, id: "journey" },
                  { name: t.nav.timeline, id: "timeline" },
                  { name: t.nav.assistant, id: "assistant" },
                  { name: t.nav.actions, id: "actions" },
                ].map((item) => (
                  <li key={item.id}>
                    <button 
                      onClick={() => document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" })}
                      className="text-sm font-medium text-foreground/70 hover:text-saffron transition-all hover:pl-2 cursor-pointer bg-transparent border-none p-0 text-left"
                    >
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-saffron mb-6">{t.footer.resources}</h4>
              <ul className="space-y-4">
                {[
                  { name: "ECI Portal", url: "https://eci.gov.in/" },
                  { name: "Voter Search", url: "https://electoralsearch.eci.gov.in/" },
                  { name: "Form Center", url: "https://voters.eci.gov.in/" },
                  { name: "Booth Locator", url: "https://voters.eci.gov.in/booth-locator" },
                ].map((item) => (
                  <li key={item.name}>
                    <a 
                      href={item.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-foreground/70 hover:text-saffron transition-all hover:pl-2"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal / More */}
            <div className="col-span-2 sm:col-span-1">
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-saffron mb-6">{t.footer.explore}</h4>
              <ul className="space-y-4">
                {[
                  { name: t.footer.legal.privacy, type: "privacy" },
                  { name: t.footer.legal.terms, type: "terms" },
                  { name: t.footer.legal.faq, type: "faq" },
                  { name: t.footer.legal.contact, type: "contact" },
                ].map((item) => (
                  <li key={item.type}>
                    <button 
                      onClick={() => onOpenLegal(item.type as any)}
                      className="text-sm font-medium text-foreground/70 hover:text-saffron transition-all hover:pl-2 cursor-pointer bg-transparent border-none p-0 text-left"
                    >
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-24 pt-12 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-2">
             <span className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">{t.footer.tagline}</span>
          </div>
          
          <div className="flex items-center gap-6">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground flex items-center gap-1.5">
              {t.footer.madeWith} <Heart className="h-3 w-3 text-saffron fill-current" />
            </span>
            <div className="h-px w-8 bg-border" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground">IND • 2026</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
