"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Shield, FileText, HelpCircle, Mail } from "lucide-react";
import { useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";

interface LegalOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  type: "privacy" | "terms" | "faq" | "contact" | null;
}

export default function LegalOverlay({ isOpen, onClose, type }: LegalOverlayProps) {
  const { t } = useLanguage();

  // Prevent scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen]);

  const getContent = () => {
    if (!type) return null;
    
    const legal = t.legalContent;
    
    switch (type) {
      case "privacy":
        return {
          title: legal.privacy.title,
          subtitle: legal.privacy.subtitle,
          icon: Shield,
          content: (
            <div className="space-y-8 font-light leading-relaxed text-muted-foreground">
              {legal.privacy.sections.map((section, i) => (
                <section key={i}>
                  <h3 className="text-xl font-serif font-bold text-foreground mb-4">{section.title}</h3>
                  <p>{section.content}</p>
                </section>
              ))}
            </div>
          )
        };
      case "terms":
        return {
          title: legal.terms.title,
          subtitle: legal.terms.subtitle,
          icon: FileText,
          content: (
            <div className="space-y-8 font-light leading-relaxed text-muted-foreground">
              {legal.terms.sections.map((section, i) => (
                <section key={i}>
                  <h3 className="text-xl font-serif font-bold text-foreground mb-4">{section.title}</h3>
                  <p>{section.content}</p>
                </section>
              ))}
            </div>
          )
        };
      case "faq":
        return {
          title: legal.faq.title,
          subtitle: legal.faq.subtitle,
          icon: HelpCircle,
          content: (
            <div className="space-y-6">
              {legal.faq.questions.map((item, i) => (
                <div key={i} className="p-6 rounded-2xl bg-muted/30 border border-border/50">
                  <h4 className="font-serif font-bold text-foreground mb-2">Q: {item.q}</h4>
                  <p className="text-sm text-muted-foreground font-light">{item.a}</p>
                </div>
              ))}
            </div>
          )
        };
      case "contact":
        return {
          title: legal.contact.title,
          subtitle: legal.contact.subtitle,
          icon: Mail,
          content: (
            <div className="space-y-8">
              <p className="text-lg font-light text-muted-foreground">{legal.contact.description}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <a href="mailto:hello@votesaathi.in" className="p-6 rounded-2xl border border-border hover:border-saffron transition-all group">
                  <span className="block text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-2">{legal.contact.emailLabel}</span>
                  <span className="text-xl font-serif font-bold text-foreground group-hover:text-saffron transition-colors">hello@votesaathi.in</span>
                </a>
                <div className="p-6 rounded-2xl border border-border">
                  <span className="block text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-2">{legal.contact.socialsLabel}</span>
                  <div className="flex gap-4">
                    <a href="#" className="text-sm font-bold text-foreground hover:text-saffron transition-colors underline decoration-saffron/20">Twitter</a>
                    <a href="#" className="text-sm font-bold text-foreground hover:text-saffron transition-colors underline decoration-saffron/20">LinkedIn</a>
                  </div>
                </div>
              </div>
              <form className="space-y-4 pt-8 border-t border-border">
                <input type="text" placeholder={legal.contact.namePlaceholder} className="w-full bg-muted/50 border-none rounded-xl py-4 px-6 text-sm outline-none focus:ring-2 focus:ring-saffron/20" />
                <textarea placeholder={legal.contact.messagePlaceholder} rows={4} className="w-full bg-muted/50 border-none rounded-xl py-4 px-6 text-sm outline-none focus:ring-2 focus:ring-saffron/20" />
                <button type="submit" className="w-full bg-foreground text-background py-4 rounded-xl font-bold uppercase tracking-widest hover:bg-saffron transition-colors cursor-pointer">{legal.contact.sendButton}</button>
              </form>
            </div>
          )
        };
      default:
        return null;
    }
  };

  const data = getContent();
  if (!data) return null;
  const Icon = data.icon;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 lg:p-8">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-background/80 backdrop-blur-xl noise"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-[2.5rem] shadow-2xl border border-border/50 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-6 sm:p-8 lg:p-12 border-b border-border/50 flex items-start justify-between">
              <div className="flex items-start gap-4 sm:gap-6">
                <div className="h-12 w-12 sm:h-16 sm:w-16 rounded-xl sm:rounded-2xl bg-muted flex items-center justify-center text-foreground shrink-0">
                  <Icon className="h-6 w-6 sm:h-8 sm:w-8" />
                </div>
                <div>
                  <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-1 sm:mb-2 leading-tight sm:leading-none">
                    {data.title}
                  </h2>
                  <p className="text-sm sm:text-lg text-muted-foreground font-light">{data.subtitle}</p>
                </div>
              </div>
              <button 
                onClick={onClose}
                className="h-10 w-10 sm:h-12 sm:w-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:bg-foreground hover:text-background transition-all cursor-pointer shrink-0 ml-4"
              >
                <X className="h-5 w-5 sm:h-6 sm:w-6" />
              </button>
            </div>

            {/* Content Body */}
            <div className="flex-1 overflow-y-auto p-6 sm:p-8 lg:p-12 scrollbar-thin">
              {data.content}
            </div>

            {/* Footer */}
            <div className="p-6 bg-muted/20 border-t border-border/50 flex justify-center">
               <span className="text-[10px] font-black uppercase tracking-[0.4em] text-muted-foreground">VoteSaathi Civic Initiative • 2026</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
