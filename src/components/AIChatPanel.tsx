"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Send, 
  Sparkles, 
  User, 
  Bot, 
  ArrowRight,
  MessageSquare,
  X,
  Maximize2,
  Minimize2,
  Mic,
  MicOff
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";
import { AI_PREDEFINED_PROMPTS, type AIEngine } from "@/lib/constants";
import ReactMarkdown from "react-markdown";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

// AI Chat Panel using real API calls
export default function AIChatPanel() {
  const { language, t } = useLanguage();
  const [messages, setMessages] = useState<Message[]>([]);

  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [engine, setEngine] = useState<AIEngine>("groq");
  const [isExpanded, setIsExpanded] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const recognitionRef = useRef<any>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);


  const scrollToBottom = useCallback(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        top: scrollContainerRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, []);

  useEffect(scrollToBottom, [messages, scrollToBottom]);

  const sendMessage = useCallback(async (text: string) => {
    if (!text.trim()) return;
    const userMsg: Message = { id: Date.now().toString(), role: "user", content: text.trim(), timestamp: new Date() };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: messages.map(m => ({ role: m.role, content: m.content })).concat({ role: "user", content: text }),
          engine,
          language,
        }),
      });

      const data = await res.json();
      
      if (data.error) throw new Error(data.error);

      const response = data.content;
      const assistantMsg: Message = { id: (Date.now() + 1).toString(), role: "assistant", content: "", timestamp: new Date() };
      setMessages((prev) => [...prev, assistantMsg]);
      setIsTyping(false);

      // Stream effect simulation
      for (let i = 0; i <= response.length; i++) {
        await new Promise((r) => setTimeout(r, 2));
        setMessages((prev) => prev.map((m) => (m.id === assistantMsg.id ? { ...m, content: response.slice(0, i) } : m)));
      }
    } catch (err: any) {
      console.error(err);
      setIsTyping(false);
      setMessages((prev) => [...prev, { id: "error", role: "assistant", content: "I encountered a slight technical difficulty. Please ensure your Groq key is active.", timestamp: new Date() }]);
    }
  }, [engine, language, messages, t]);

  const toggleListening = useCallback(() => {
    if (isListening) {
      recognitionRef.current?.stop();
      setIsListening(false);
      // Automatically send the input when manually stopped
      if (input.trim()) {
        sendMessage(input);
      }
    } else {
      try {
        recognitionRef.current?.start();
        setIsListening(true);
      } catch (err) {
        console.error("Could not start speech recognition:", err);
      }
    }
  }, [isListening, input, sendMessage]);


  // Sync welcome message with language changes
  useEffect(() => {
    setMessages((prev) => {
      const hasWelcome = prev.some(m => m.id === "welcome");
      if (hasWelcome) {
        return prev.map(m => m.id === "welcome" ? { ...m, content: t.ai.welcome } : m);
      }
      return prev;
    });
  }, [t.ai.welcome]);

  // Initial automatic greeting with typing effect
  useEffect(() => {
    const timer = setTimeout(async () => {
      const welcomeMsg: Message = { 
        id: "welcome", 
        role: "assistant", 
        content: "", 
        timestamp: new Date() 
      };
      setMessages([welcomeMsg]);
      
      const response = t.ai.welcome;
      for (let i = 0; i <= response.length; i++) {
        await new Promise((r) => setTimeout(r, 5));
        setMessages((prev) => 
          prev.map((m) => (m.id === "welcome" ? { ...m, content: response.slice(0, i) } : m))
        );
      }
    }, 500);
    return () => clearTimeout(timer);
  }, []); // Only once on mount


  useEffect(() => {
    const handleTriggerChat = (e: any) => {
      if (e.detail?.prompt) {
        sendMessage(e.detail.prompt);
      }
    };
    window.addEventListener("trigger-ai-chat", handleTriggerChat);
    return () => window.removeEventListener("trigger-ai-chat", handleTriggerChat);
  }, [sendMessage]);

  // Initialize Speech Recognition
  useEffect(() => {
    if (typeof window !== "undefined") {
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      if (SpeechRecognition) {
        recognitionRef.current = new SpeechRecognition();
        recognitionRef.current.continuous = true;
        recognitionRef.current.interimResults = true;

        recognitionRef.current.onresult = (event: any) => {
          let fullTranscript = "";
          for (let i = 0; i < event.results.length; ++i) {
            fullTranscript += event.results[i][0].transcript;
          }
          if (fullTranscript) {
            setInput(fullTranscript);
          }
        };

        recognitionRef.current.onerror = (event: any) => {
          console.error("Speech recognition error:", event.error);
          setIsListening(false);
        };

        recognitionRef.current.onend = () => {
          setIsListening(false);
        };
      }
    }
  }, [sendMessage]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  return (
    <section id="assistant" className="py-24 bg-white noise relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="h-16 w-16 bg-foreground text-background rounded-2xl flex items-center justify-center mb-6 shadow-2xl shadow-black/20"
          >
            <Sparkles className="h-8 w-8" />
          </motion.div>
          <h2 className="text-5xl font-serif font-bold mb-4">The <span className="italic">Digital</span> Concierge</h2>
          <p className="text-muted-foreground max-w-xl font-light">
            Your private guide to the world's largest democratic process. Ask anything, in any language.
          </p>
        </div>

        <div className={`mx-auto transition-all duration-700 ease-[0.16,1,0.3,1] ${isExpanded ? "max-w-6xl h-[800px]" : "max-w-4xl h-[650px]"} relative`}>
          <div className="glass h-full rounded-[2.5rem] flex flex-col overflow-hidden border-black/5 shadow-2xl">
            {/* Chat Header */}
            <div className="p-6 border-b border-black/5 flex items-center justify-between bg-white/50">
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-saffron/10 flex items-center justify-center text-saffron">
                  <Bot className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-black uppercase tracking-[0.2em]">VoteSaathi AI</h4>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-tighter">Powered by Groq • Llama 3.3</span>
                  </div>
                </div>
              </div>
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => setIsExpanded(!isExpanded)}
                className="rounded-full hover:bg-black/5 cursor-pointer"
              >
                {isExpanded ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
              </Button>
            </div>

            {/* Chat Body */}
            <div 
              ref={scrollContainerRef}
              className="flex-1 overflow-y-auto p-8 space-y-8 scrollbar-thin scrollbar-thumb-black/5"
            >
              {messages.map((msg, i) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div className={`group relative flex items-start gap-4 max-w-[85%] ${msg.role === "user" ? "flex-row-reverse" : "flex-row"}`}>
                    <div className={`h-8 w-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1 ${
                      msg.role === "user" ? "bg-foreground text-background" : "bg-saffron/10 text-saffron"
                    }`}>
                      {msg.role === "user" ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
                    </div>
                    <div className={`p-5 rounded-2xl text-sm leading-relaxed ${
                      msg.role === "user" 
                        ? "bg-foreground text-background rounded-tr-none font-medium" 
                        : "bg-white border border-black/5 rounded-tl-none font-light shadow-sm prose prose-sm max-w-none prose-p:leading-relaxed prose-li:my-0.5"
                    }`}>
                      {msg.role === "user" ? (
                        msg.content
                      ) : (
                        <div className="markdown-content">
                          <ReactMarkdown>
                            {msg.content}
                          </ReactMarkdown>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white border border-black/5 p-4 rounded-2xl rounded-tl-none flex gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-saffron/40 animate-bounce" />
                    <span className="h-1.5 w-1.5 rounded-full bg-saffron/40 animate-bounce [animation-delay:0.2s]" />
                    <span className="h-1.5 w-1.5 rounded-full bg-saffron/40 animate-bounce [animation-delay:0.4s]" />
                  </div>
                </div>
              )}
            </div>

            {/* Predefined Prompts */}
            <div className="px-8 pb-4">
                <div className="flex gap-2 overflow-x-auto pb-4 scrollbar-none no-scrollbar">
                  {t.ai.prompts.map((prompt) => (
                    <button
                      key={prompt}
                      onClick={() => sendMessage(prompt)}
                      className="whitespace-nowrap px-4 py-2 rounded-full border border-black/5 bg-white hover:border-saffron hover:text-saffron transition-all text-[10px] font-black uppercase tracking-widest cursor-pointer"
                    >
                      {prompt}
                    </button>
                  ))}
               </div>
            </div>

            {/* Input Area */}
            <div className="p-6 bg-white border-t border-black/5">
              <form onSubmit={handleSubmit} className="relative flex items-center">
                <input
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder={t.ai.placeholder}
                  className="w-full bg-muted/50 border-none rounded-2xl py-4 pl-6 pr-24 text-sm font-light focus:ring-2 focus:ring-saffron/20 transition-all outline-none"
                />
                <div className="absolute right-2 flex items-center gap-2">
                  <button
                    type="button"
                    onClick={toggleListening}
                    className={`h-10 w-10 rounded-xl flex items-center justify-center transition-all cursor-pointer ${
                      isListening 
                        ? "bg-red-500 text-white animate-pulse" 
                        : "bg-muted hover:bg-black/5 text-muted-foreground"
                    }`}
                  >
                    {isListening ? <MicOff className="h-5 w-5" /> : <Mic className="h-5 w-5" />}
                  </button>
                  <button
                    type="submit"
                    disabled={!input.trim() || isTyping}
                    className="h-10 w-10 bg-foreground text-background rounded-xl flex items-center justify-center transition-all hover:scale-105 active:scale-95 disabled:opacity-30 cursor-pointer"
                  >
                    <ArrowRight className="h-5 w-5" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
