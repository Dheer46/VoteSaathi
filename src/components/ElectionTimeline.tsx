"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Clock, Circle } from "lucide-react";
import { ELECTION_TIMELINE, type TimelineEvent } from "@/lib/constants";
import { useLanguage } from "@/context/LanguageContext";

export default function ElectionTimeline() {
  const { t } = useLanguage();
  const now = new Date();

  // Helper to determine status based on date
  const getEventStatus = (event: TimelineEvent) => {
    const start = new Date(event.startDate);
    const end = event.endDate ? new Date(event.endDate) : start;

    if (now > end) return "completed";
    if (now >= start && now <= end) return "active";
    return "upcoming";
  };

  const timelineWithStatus = ELECTION_TIMELINE.map((event, index) => ({
    ...event,
    // Use translated content if available, fallback to hardcoded constants
    title: t.timeline.events[index]?.title || event.title,
    date: t.timeline.events[index]?.date || event.date,
    description: t.timeline.events[index]?.description || event.description,
    status: getEventStatus(event),
  }));

  return (
    <section id="timeline" className="py-32 bg-background noise">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-20">
          
          {/* Section Header - Editorial */}
          <div className="lg:w-1/3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="sticky top-32"
            >
              <h2 className="text-6xl font-serif font-bold leading-[0.9] mb-6">
                {t.timeline.countdownTitle} <br/>
                <span className="gradient-text italic">{t.timeline.countdownAccent}</span>
              </h2>
              <p className="text-xl text-muted-foreground font-light leading-relaxed">
                {t.timeline.countdownSubtitle}
              </p>
              
              <div className="mt-12 space-y-4">
                 <div className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-green-500" />
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">
                      {t.timeline.milestoneReached}
                    </span>
                 </div>
                 <div className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-saffron animate-pulse" />
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">
                      {t.timeline.inProgress}
                    </span>
                 </div>
              </div>
            </motion.div>
          </div>

          {/* Vertical Editorial Timeline */}
          <div className="lg:w-2/3">
             <div className="space-y-0">
                {timelineWithStatus.map((event, i) => (
                  <TimelineItem 
                    key={event.id} 
                    event={event} 
                    index={i} 
                    isLast={i === timelineWithStatus.length - 1} 
                  />
                ))}
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineItem({ event, index, isLast }: { event: any; index: number; isLast: boolean }) {
  const isCompleted = event.status === "completed";
  const isActive = event.status === "active";

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="group flex gap-12 pb-16 relative"
    >
      {/* Line Connector */}
      {!isLast && (
        <div className="absolute left-4 top-10 bottom-0 w-px bg-border group-hover:bg-saffron/30 transition-colors" />
      )}

      {/* Modern Status Icon */}
      <div className="relative z-10">
        <div className={`flex h-8 w-8 items-center justify-center rounded-full border-2 transition-all duration-500 ${
          isCompleted 
            ? "bg-green-500 border-green-500 text-white" 
            : isActive 
              ? "bg-background border-saffron text-saffron scale-125 shadow-xl shadow-saffron/20" 
              : "bg-background border-border text-muted-foreground"
        }`}>
          {isCompleted ? <CheckCircle2 className="h-4 w-4" /> : <Circle className="h-3 w-3 fill-current" />}
        </div>
      </div>

      {/* Content Area */}
      <div className={`flex-1 pt-0.5 transition-all duration-500 ${isActive ? "opacity-100" : "opacity-60 group-hover:opacity-100"}`}>
        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-saffron-dark mb-2 block">
          {event.date}
        </span>
        <h3 className={`text-3xl font-serif font-bold mb-3 ${isActive ? "text-foreground" : "text-foreground/80"}`}>
          {event.title}
        </h3>
        <p className="text-muted-foreground max-w-lg leading-relaxed font-light">
          {event.description}
        </p>
        
        {isActive && (
           <motion.div 
             initial={{ width: 0 }}
             animate={{ width: "100px" }}
             className="h-0.5 bg-saffron mt-6"
           />
        )}
      </div>
    </motion.div>
  );
}
