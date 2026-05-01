"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, XCircle, Award, ArrowRight, RotateCcw, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const QUIZ_QUESTIONS = [
  {
    id: 1,
    question: "What is the minimum age to be eligible to vote in India?",
    options: ["16 years", "18 years", "21 years", "25 years"],
    correct: 1,
    explanation: "As per the Constitution of India, any citizen aged 18 or above is eligible to vote."
  },
  {
    id: 2,
    question: "Which form is used for new voter registration?",
    options: ["Form 7", "Form 8", "Form 6", "Form 12"],
    correct: 2,
    explanation: "Form 6 is specifically for the registration of new voters."
  },
  {
    id: 3,
    question: "What does VVPAT stand for in the voting process?",
    options: [
      "Voter Verified Paper Audit Trail",
      "Voter Validated Paper Account Trust",
      "Visual Voter Paper Audit Tracking",
      "Voter Verified Printing Audit Tool"
    ],
    correct: 0,
    explanation: "VVPAT allows voters to verify that their vote was cast correctly by showing a slip for 7 seconds."
  },
  {
    id: 4,
    question: "How long before polling ends does campaigning have to stop?",
    options: ["24 hours", "48 hours", "72 hours", "1 week"],
    correct: 1,
    explanation: "The 'Silence Period' begins 48 hours before the conclusion of polling."
  }
];

interface QuizSectionProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QuizSection({ isOpen, onClose }: QuizSectionProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const handleAnswer = (index: number) => {
    if (isAnswered) return;
    setSelectedOption(index);
    setIsAnswered(true);
    if (index === QUIZ_QUESTIONS[currentStep].correct) {
      setScore(prev => prev + 1);
    }
  };

  const nextQuestion = () => {
    if (currentStep < QUIZ_QUESTIONS.length - 1) {
      setCurrentStep(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setIsFinished(true);
    }
  };

  const resetQuiz = () => {
    setCurrentStep(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setIsFinished(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 sm:p-6 lg:p-8">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-background/80 backdrop-blur-xl noise"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-4xl bg-white rounded-[2.5rem] shadow-2xl border border-border/50 flex flex-col overflow-hidden"
          >
            <div className="mx-auto w-full p-8 sm:p-12 relative z-10 overflow-y-auto max-h-[90vh]">
              <div className="flex flex-col items-center text-center mb-12 relative">
                <button 
                  onClick={onClose}
                  className="absolute -top-4 -right-4 h-10 w-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:bg-foreground hover:text-background transition-all cursor-pointer bg-white"
                >
                  <X className="h-5 w-5" />
                </button>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-saffron/20 bg-saffron/5 text-saffron text-[10px] font-black uppercase tracking-[0.2em] mb-4"
                >
                  <Award className="h-3 w-3" /> Knowledge Check
                </motion.div>
                <h2 className="text-4xl font-serif font-bold mb-2">Ready to vote?</h2>
                <p className="text-muted-foreground max-w-xl font-light text-sm">
                  Test your knowledge and earn your certificate.
                </p>
              </div>

              <div className="min-h-[400px] flex flex-col">
          <AnimatePresence mode="wait">
            {!isFinished ? (
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="flex-1 flex flex-col"
              >
                <div className="flex items-center justify-between mb-8">
                  <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                    Question {currentStep + 1} of {QUIZ_QUESTIONS.length}
                  </span>
                  <div className="flex gap-1">
                    {QUIZ_QUESTIONS.map((_, i) => (
                      <div key={i} className={`h-1 w-6 rounded-full transition-colors duration-500 ${i <= currentStep ? "bg-saffron" : "bg-muted"}`} />
                    ))}
                  </div>
                </div>

                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-foreground mb-8 leading-tight">
                  {QUIZ_QUESTIONS[currentStep].question}
                </h3>

                <div className="grid grid-cols-1 gap-4 mb-8">
                  {QUIZ_QUESTIONS[currentStep].options.map((option, i) => {
                    const isCorrect = i === QUIZ_QUESTIONS[currentStep].correct;
                    const isSelected = i === selectedOption;
                    
                    let variantClasses = "border-border bg-white hover:border-saffron/50";
                    if (isAnswered) {
                      if (isCorrect) variantClasses = "border-green-500 bg-green-50 text-green-700";
                      else if (isSelected) variantClasses = "border-red-500 bg-red-50 text-red-700";
                      else variantClasses = "opacity-50 border-border bg-white";
                    }

                    return (
                      <button
                        key={i}
                        onClick={() => handleAnswer(i)}
                        disabled={isAnswered}
                        className={`p-6 rounded-2xl border-2 text-left transition-all duration-300 flex items-center justify-between group ${variantClasses} ${!isAnswered && "cursor-pointer active:scale-[0.99]"}`}
                      >
                        <span className="font-medium">{option}</span>
                        {isAnswered && isCorrect && <CheckCircle2 className="h-5 w-5 text-green-500" />}
                        {isAnswered && isSelected && !isCorrect && <XCircle className="h-5 w-5 text-red-500" />}
                      </button>
                    );
                  })}
                </div>

                {isAnswered && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-auto"
                  >
                    <div className="p-6 rounded-2xl bg-muted/50 mb-6 border border-border/50">
                      <p className="text-sm font-light leading-relaxed">
                        <span className="font-bold">Did you know?</span> {QUIZ_QUESTIONS[currentStep].explanation}
                      </p>
                    </div>
                    <button
                      onClick={nextQuestion}
                      className="w-full bg-foreground text-background py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-saffron transition-all flex items-center justify-center gap-2 cursor-pointer group"
                    >
                      {currentStep < QUIZ_QUESTIONS.length - 1 ? "Next Question" : "See Results"}
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </motion.div>
                )}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex-1 flex flex-col items-center justify-center text-center"
              >
                <div className="h-24 w-24 bg-saffron/10 text-saffron rounded-[2rem] flex items-center justify-center mb-8">
                  <Award className="h-12 w-12" />
                </div>
                <h3 className="text-4xl font-serif font-bold mb-4">Quiz Complete!</h3>
                <p className="text-muted-foreground mb-8 text-lg font-light">
                  You scored <span className="text-foreground font-bold">{score} out of {QUIZ_QUESTIONS.length}</span>
                </p>
                
                <div className="p-8 rounded-[2rem] bg-foreground text-background w-full max-w-sm mb-10 shadow-2xl relative overflow-hidden">
                   {/* Background decoration */}
                   <div className="absolute top-0 right-0 p-4 opacity-10">
                      <Award className="h-20 w-20" />
                   </div>
                   <span className="block text-[10px] font-black uppercase tracking-[0.3em] mb-4 opacity-60">Certification</span>
                   <span className="text-2xl font-serif font-bold block mb-2">Voter Ready 🇮🇳</span>
                   <p className="text-xs font-light opacity-80 leading-relaxed">
                     This confirms that you have successfully understood the core mechanics of Indian Democracy.
                   </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
                  <button 
                    onClick={resetQuiz}
                    className="flex-1 border border-border py-4 rounded-xl font-bold uppercase tracking-widest hover:bg-muted transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <RotateCcw className="h-4 w-4" /> Try Again
                  </button>
                  <button 
                    onClick={() => {
                      onClose();
                      document.getElementById('assistant')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="flex-1 bg-foreground text-background py-4 rounded-xl font-bold uppercase tracking-widest hover:bg-saffron transition-all cursor-pointer"
                  >
                    Ask AI Assistant
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
