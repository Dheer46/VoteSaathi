"use client";

import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ChevronRight, 
  ChevronLeft, 
  Lightbulb, 
  CheckCircle2, 
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";
import { JOURNEY_STEPS } from "@/lib/constants";

export default function JourneyFlow({ onComplete }: { onComplete?: () => void }) {
  const { language, t } = useLanguage();
  const [activeStep, setActiveStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<Set<number>>(new Set());

  const stepData = t.journey.steps[activeStep] || t.journey.steps[0];
  const progress = (completedSteps.size / JOURNEY_STEPS.length) * 100;

  const stepImages: Record<number, string> = {
    0: "/images/voter-id.png",
    2: "/images/voter-id.png",
    4: "/images/evm.png",
    6: "/images/inked-finger.png",
  };

  const goNext = useCallback(() => {
    setCompletedSteps((prev) => new Set(prev).add(activeStep));
    if (activeStep < JOURNEY_STEPS.length - 1) {
      setActiveStep(activeStep + 1);
      document.getElementById("journey")?.scrollIntoView({ behavior: "smooth" });
    } else if (onComplete) {
      onComplete();
    }
  }, [activeStep, onComplete]);

  useEffect(() => {
    const handleTriggerStep = (e: any) => {
      if (typeof e.detail?.step === "number") {
        setActiveStep(e.detail.step);
      }
    };
    window.addEventListener("trigger-journey-step", handleTriggerStep);
    return () => window.removeEventListener("trigger-journey-step", handleTriggerStep);
  }, []);

  const goPrev = useCallback(() => {
    if (activeStep > 0) setActiveStep(activeStep - 1);
    document.getElementById("journey")?.scrollIntoView({ behavior: "smooth" });
  }, [activeStep]);

  return (
    <section id="journey" className="py-20 sm:py-32 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Sidebar Navigation - Editorial Style */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 mb-12 lg:mb-0">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="mb-8 lg:mb-12"
            >
              <h2 className="text-3xl sm:text-5xl font-serif font-bold leading-tight mb-4">
                {t.journey.title} <br/>
                <span className="gradient-text italic">{t.journey.titleAccent}</span>
              </h2>
              <p className="text-muted-foreground font-light text-base sm:text-lg">
                {t.journey.subtitle}
              </p>
            </motion.div>

            <div className="flex lg:flex-col gap-2 lg:gap-2 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 no-scrollbar relative">
              <div className="absolute left-4 top-0 bottom-0 w-px bg-border/50 hidden lg:block" />
              {JOURNEY_STEPS.map((step, i) => (
                <button
                   key={step.id}
                   onClick={() => setActiveStep(i)}
                   className={`group relative flex items-center flex-shrink-0 lg:flex-none whitespace-nowrap lg:whitespace-normal lg:w-full pl-0 lg:pl-10 py-3 text-left transition-all cursor-pointer ${
                     activeStep === i ? "opacity-100" : "opacity-40 hover:opacity-100"
                   }`}
                >
                  <div className={`hidden lg:block absolute left-2.5 top-1/2 -translate-y-1/2 h-3 w-3 rounded-full border-2 border-background transition-all ${
                    activeStep === i ? "bg-saffron scale-125 shadow-lg shadow-saffron/20" : "bg-border"
                  }`} />
                  <span className={`text-[10px] sm:text-xs font-bold uppercase tracking-widest ${activeStep === i ? "text-foreground" : "text-muted-foreground"}`}>
                    0{i + 1} — {t.journey.steps[i]?.title.split(" ").slice(-1)[0] || t.journey.step}
                  </span>
                  {activeStep === i && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-saffron lg:hidden" />}
                </button>
              ))}
            </div>

            {/* Progress Counter */}
            <div className="mt-8 lg:mt-16 pt-8 border-t border-border/50">
              <div className="flex justify-between items-end mb-2">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground">{t.journey.progress}</span>
                <span className="text-2xl sm:text-3xl font-serif font-bold">{Math.round(progress)}%</span>
              </div>
              <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-gradient-to-r from-saffron to-saffron-dark"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </div>

          {/* Main Content Card - Magazine Style */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="grid md:grid-cols-12 gap-0 overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] border border-border shadow-2xl shadow-black/5 bg-white"
              >
                {/* Image Section */}
                <div className="md:col-span-5 relative min-h-[250px] md:min-h-full overflow-hidden bg-muted">
                  {stepImages[activeStep] ? (
                    <img 
                      src={stepImages[activeStep]} 
                      alt={stepData.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-saffron/10 to-transparent flex items-center justify-center">
                       <span className="text-7xl sm:text-9xl font-serif font-bold opacity-[0.03]">{activeStep + 1}</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  <div className="absolute top-4 left-4 sm:top-6 sm:left-6 h-10 w-10 sm:h-12 sm:w-12 rounded-lg sm:rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 text-white text-sm sm:text-base">
                    {activeStep + 1}
                  </div>
                </div>

                {/* Text Section */}
                <div className="md:col-span-7 p-8 sm:p-14 flex flex-col">
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] text-saffron mb-4 sm:mb-6">
                    {t.journey.step} {activeStep + 1} {t.journey.of} 7
                  </span>
                  
                  <h3 className="text-2xl sm:text-4xl font-serif font-bold leading-tight mb-4 sm:mb-6">
                    {stepData.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-lg font-light leading-relaxed mb-8">
                    {stepData.description}
                  </p>

                  <div className="space-y-5 mb-10 flex-grow">
                    {stepData.bullets.map((bullet, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + i * 0.1 }}
                        className="flex items-start gap-4"
                      >
                        <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-saffron flex-shrink-0" />
                        <p className="text-sm text-foreground/80 leading-relaxed font-medium">{bullet}</p>
                      </motion.div>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 pt-8 border-t border-border/50">
                    <Button
                      variant="outline"
                      onClick={goPrev}
                      disabled={activeStep === 0}
                      className="flex-1 h-14 rounded-2xl border-border hover:bg-muted font-bold text-xs uppercase tracking-widest cursor-pointer disabled:opacity-20"
                    >
                      <ChevronLeft className="h-4 w-4 mr-2" /> {t.journey.prev}
                    </Button>
                    <Button
                      onClick={goNext}
                      className="flex-[2] h-14 rounded-2xl bg-foreground text-background hover:bg-saffron transition-colors font-bold text-xs uppercase tracking-widest cursor-pointer"
                    >
                      {activeStep === JOURNEY_STEPS.length - 1 ? t.journey.complete : t.journey.next} 
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Contextual Tip - Editorial Accent */}
            <motion.div
              key={`tip-${activeStep}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mt-8 p-6 rounded-3xl bg-saffron/5 border border-saffron/10 flex gap-4 items-center"
            >
              <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center shadow-sm text-saffron">
                <Lightbulb className="h-5 w-5" />
              </div>
              <p className="text-sm font-medium text-foreground/80 italic">
                {stepData.tip}
              </p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
