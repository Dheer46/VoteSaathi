"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Shield, FileText, HelpCircle, Mail } from "lucide-react";
import { useEffect } from "react";

interface LegalOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  type: "privacy" | "terms" | "faq" | "contact" | null;
}

export default function LegalOverlay({ isOpen, onClose, type }: LegalOverlayProps) {
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
    switch (type) {
      case "privacy":
        return {
          title: "Privacy Manifesto",
          subtitle: "How we protect your civic data",
          icon: Shield,
          content: (
            <div className="space-y-8 font-light leading-relaxed text-muted-foreground">
              <section>
                <h3 className="text-xl font-serif font-bold text-foreground mb-4">01. Data Philosophy</h3>
                <p>VoteSaathi is built on the principle of minimal data footprint. We do not store your personal identity, EPIC numbers, or private conversations beyond the immediate session required for AI processing.</p>
              </section>
              <section>
                <h3 className="text-xl font-serif font-bold text-foreground mb-4">02. AI Processing</h3>
                <p>Your queries are processed using encrypted channels. While we use third-party AI models (like Groq/Llama), your data is treated as transient and is not used for training global models without explicit consent.</p>
              </section>
              <section>
                <h3 className="text-xl font-serif font-bold text-foreground mb-4">03. Cookie Usage</h3>
                <p>We only use essential technical cookies to remember your language preference and ensure the stability of the AI digital concierge.</p>
              </section>
            </div>
          )
        };
      case "terms":
        return {
          title: "Terms of Engagement",
          subtitle: "The rules of our digital forum",
          icon: FileText,
          content: (
            <div className="space-y-8 font-light leading-relaxed text-muted-foreground">
              <section>
                <h3 className="text-xl font-serif font-bold text-foreground mb-4">01. Information Accuracy</h3>
                <p>While VoteSaathi strives for 100% accuracy using official ECI data, our AI may occasionally provide generalized information. Always cross-verify critical voting details with the official Voter Helpline.</p>
              </section>
              <section>
                <h3 className="text-xl font-serif font-bold text-foreground mb-4">02. Civic Responsibility</h3>
                <p>Users are expected to use this platform for legitimate civic education. Any attempt to use the AI to spread misinformation or disrupt the democratic process will result in immediate session termination.</p>
              </section>
              <section>
                <h3 className="text-xl font-serif font-bold text-foreground mb-4">03. No Legal Advice</h3>
                <p>The information provided by VoteSaathi is for educational purposes only and does not constitute legal advice regarding election law or eligibility disputes.</p>
              </section>
            </div>
          )
        };
      case "faq":
        return {
          title: "Common Inquiries",
          subtitle: "Frequently asked questions",
          icon: HelpCircle,
          content: (
            <div className="space-y-6">
              {[
                { q: "Is VoteSaathi an official ECI app?", a: "No, VoteSaathi is an independent AI-powered assistant designed to make ECI information more accessible and understandable." },
                { q: "Do I need my physical ID to vote?", a: "While the EPIC (Voter ID) card is preferred, you can vote with any of the 12 approved photo IDs if your name is in the electoral roll." },
                { q: "How do I update my address?", a: "You can use Form 8 on the official ECI portal to update your address or other voter details." },
                { q: "Can I vote if I'm currently abroad?", a: "Yes, Indian citizens living abroad can register as 'Overseas Electors' using Form 6A." }
              ].map((item, i) => (
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
          title: "Digital Contact",
          subtitle: "Get in touch with the team",
          icon: Mail,
          content: (
            <div className="space-y-8">
              <p className="text-lg font-light text-muted-foreground">Have feedback or want to partner with us? We'd love to hear from you.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <a href="mailto:hello@votesaathi.in" className="p-6 rounded-2xl border border-border hover:border-saffron transition-all group">
                  <span className="block text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-2">Email Us</span>
                  <span className="text-xl font-serif font-bold text-foreground group-hover:text-saffron transition-colors">hello@votesaathi.in</span>
                </a>
                <div className="p-6 rounded-2xl border border-border">
                  <span className="block text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-2">Socials</span>
                  <div className="flex gap-4">
                    <a href="#" className="text-sm font-bold text-foreground hover:text-saffron transition-colors underline decoration-saffron/20">Twitter</a>
                    <a href="#" className="text-sm font-bold text-foreground hover:text-saffron transition-colors underline decoration-saffron/20">LinkedIn</a>
                  </div>
                </div>
              </div>
              <form className="space-y-4 pt-8 border-t border-border">
                <input type="text" placeholder="Name" className="w-full bg-muted/50 border-none rounded-xl py-4 px-6 text-sm outline-none focus:ring-2 focus:ring-saffron/20" />
                <textarea placeholder="Message" rows={4} className="w-full bg-muted/50 border-none rounded-xl py-4 px-6 text-sm outline-none focus:ring-2 focus:ring-saffron/20" />
                <button type="submit" className="w-full bg-foreground text-background py-4 rounded-xl font-bold uppercase tracking-widest hover:bg-saffron transition-colors cursor-pointer">Send Message</button>
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
            <div className="p-8 sm:p-12 border-b border-border/50 flex items-start justify-between">
              <div className="flex items-start gap-6">
                <div className="h-16 w-16 rounded-2xl bg-muted flex items-center justify-center text-foreground shrink-0">
                  <Icon className="h-8 w-8" />
                </div>
                <div>
                  <h2 className="text-4xl sm:text-5xl font-serif font-bold text-foreground mb-2 leading-none">
                    {data.title}
                  </h2>
                  <p className="text-lg text-muted-foreground font-light">{data.subtitle}</p>
                </div>
              </div>
              <button 
                onClick={onClose}
                className="h-12 w-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:bg-foreground hover:text-background transition-all cursor-pointer"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Content Body */}
            <div className="flex-1 overflow-y-auto p-8 sm:p-12 scrollbar-thin">
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
