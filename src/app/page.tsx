"use client";

import { useRef, useCallback, useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import JourneyFlow from "@/components/JourneyFlow";
import ElectionTimeline from "@/components/ElectionTimeline";
import QuickActions from "@/components/QuickActions";
import AIChatPanel from "@/components/AIChatPanel";
import QuizSection from "@/components/QuizSection";
import AccessibilityPanel from "@/components/AccessibilityPanel";
import Footer from "@/components/Footer";
import LegalOverlay from "@/components/LegalOverlay";
import LanguageSelection from "@/components/LanguageSelection";
import VoiceMode from "@/components/VoiceMode";
import { useLanguage } from "@/context/LanguageContext";

export default function Home() {
  const { isLanguageSelected } = useLanguage();
  const journeyRef = useRef<HTMLDivElement>(null);

  const scrollToJourney = useCallback(() => {
    document.getElementById("journey")?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const [legalType, setLegalType] = useState<"privacy" | "terms" | "faq" | "contact" | null>(null);

  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [isVoiceOpen, setIsVoiceOpen] = useState(false);

  const openChat = useCallback(() => {
    document.getElementById("assistant")?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    const handleVoiceTrigger = () => setIsVoiceOpen(true);
    window.addEventListener("trigger-voice-mode", handleVoiceTrigger);
    return () => window.removeEventListener("trigger-voice-mode", handleVoiceTrigger);
  }, []);

  if (!isLanguageSelected) {
    return <LanguageSelection />;
  }

  return (
    <main className="flex-1">
      <Navbar />
      <HeroSection 
        onStartJourney={scrollToJourney} 
        onOpenChat={openChat} 
        onOpenVoice={() => setIsVoiceOpen(true)} 
      />
      <JourneyFlow onComplete={() => setIsQuizOpen(true)} />
      <ElectionTimeline />
      <QuickActions />
      <AIChatPanel />
      <Footer onOpenLegal={(type: any) => setLegalType(type)} />
      <AccessibilityPanel />
      <LegalOverlay 
        isOpen={!!legalType} 
        onClose={() => setLegalType(null)} 
        type={legalType} 
      />
      <QuizSection 
        isOpen={isQuizOpen} 
        onClose={() => setIsQuizOpen(false)} 
      />
      <VoiceMode 
        isOpen={isVoiceOpen} 
        onClose={() => setIsVoiceOpen(false)} 
      />
    </main>
  );
}



