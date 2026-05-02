"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mic,
  MicOff,
  Volume2,
  VolumeX,
  X,
  RotateCcw,
  ChevronRight,
  Globe,
  Gauge,
  Check,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { languages, type LanguageCode } from "@/lib/translations";

// ─── Types ─────────────────────────────────────────────────────────
type VoiceState = "idle" | "listening" | "thinking" | "speaking";

interface ConversationEntry {
  id: string;
  role: "user" | "assistant";
  text: string;
  timestamp: Date;
}

interface VoiceModeProps {
  isOpen: boolean;
  onClose: () => void;
}

// ─── Language → BCP-47 mapping for Web Speech API ──────────────────
const SPEECH_LANG_MAP: Record<string, string> = {
  en: "en-IN",
  hi: "hi-IN",
  ta: "ta-IN",
  te: "te-IN",
  bn: "bn-IN",
  mr: "mr-IN",
};

// ─── Voice Mode Translations ──────────────────────────────────────
const voiceTranslations: Record<string, {
  tapToSpeak: string;
  listening: string;
  thinking: string;
  speaking: string;
  repeatLast: string;
  exitVoice: string;
  speed: string;
  greeting: string;
  noSpeech: string;
}> = {
  en: {
    tapToSpeak: "Tap and Speak",
    listening: "Listening...",
    thinking: "Thinking...",
    speaking: "Speaking...",
    repeatLast: "Repeat",
    exitVoice: "Exit Voice Mode",
    speed: "Speed",
    greeting: "Namaste! I am your VoteSaathi voice assistant. Ask me anything about voting. For example, say: Start my voting journey.",
    noSpeech: "I didn't catch that. Please try again.",
  },
  hi: {
    tapToSpeak: "टैप करें और बोलें",
    listening: "सुन रहा हूँ...",
    thinking: "सोच रहा हूँ...",
    speaking: "बोल रहा हूँ...",
    repeatLast: "दोहराएँ",
    exitVoice: "वॉइस मोड बंद करें",
    speed: "गति",
    greeting: "नमस्ते! मैं आपका वोटसाथी आवाज सहायक हूँ। मतदान के बारे में कुछ भी पूछें। उदाहरण: मेरी मतदान यात्रा शुरू करें।",
    noSpeech: "मुझे समझ नहीं आया। कृपया फिर से कोशिश करें।",
  },
  ta: {
    tapToSpeak: "தட்டி பேசுங்கள்",
    listening: "கேட்கிறேன்...",
    thinking: "யோசிக்கிறேன்...",
    speaking: "பேசுகிறேன்...",
    repeatLast: "திரும்ப சொல்",
    exitVoice: "வாய்ஸ் மோட் நிறுத்து",
    speed: "வேகம்",
    greeting: "வணக்கம்! நான் உங்கள் VoteSaathi குரல் உதவியாளர். வாக்களிப்பு பற்றி எதையும் கேளுங்கள்.",
    noSpeech: "புரியவில்லை. மீண்டும் முயற்சிக்கவும்.",
  },
  te: {
    tapToSpeak: "నొక్కి మాట్లాడండి",
    listening: "వింటున్నాను...",
    thinking: "ఆలోచిస్తున్నాను...",
    speaking: "చెప్తున్నాను...",
    repeatLast: "మళ్ళీ చెప్పు",
    exitVoice: "వాయిస్ మోడ్ మూసివేయి",
    speed: "వేగం",
    greeting: "నమస్కారం! నేను మీ VoteSaathi వాయిస్ సహాయకుడిని. ఓటింగ్ గురించి ఏదైనా అడగండి.",
    noSpeech: "అర్థం కాలేదు. దయచేసి మళ్ళీ ప్రయత్నించండి.",
  },
  bn: {
    tapToSpeak: "ট্যাপ করুন এবং বলুন",
    listening: "শুনছি...",
    thinking: "ভাবছি...",
    speaking: "বলছি...",
    repeatLast: "পুনরায় বলুন",
    exitVoice: "ভয়েস মোড বন্ধ করুন",
    speed: "গতি",
    greeting: "নমস্কার! আমি আপনার VoteSaathi ভয়েস সহকারী। ভোটিং সম্পর্কে যেকোনো কিছু জিজ্ঞাসা করুন।",
    noSpeech: "বুঝতে পারলাম না। আবার চেষ্টা করুন।",
  },
  mr: {
    tapToSpeak: "टॅप करा आणि बोला",
    listening: "ऐकतोय...",
    thinking: "विचार करतोय...",
    speaking: "बोलतोय...",
    repeatLast: "पुन्हा सांगा",
    exitVoice: "व्हॉइस मोड बंद करा",
    speed: "गती",
    greeting: "नमस्कार! मी तुमचा VoteSaathi आवाज सहाय्यक आहे. मतदानाबद्दल काहीही विचारा.",
    noSpeech: "समजलं नाही. कृपया पुन्हा प्रयत्न करा.",
  },
};

// ─── Main Component ───────────────────────────────────────────────
export default function VoiceMode({ isOpen, onClose }: VoiceModeProps) {
  const { language, setLanguage } = useLanguage();
  const vt = voiceTranslations[language] || voiceTranslations.en;

  // ── State ──
  const [voiceState, setVoiceState] = useState<VoiceState>("idle");
  const [conversation, setConversation] = useState<ConversationEntry[]>([]);
  const [liveCaption, setLiveCaption] = useState("");
  const [speechRate, setSpeechRate] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [showLangPicker, setShowLangPicker] = useState(false);
  const [hasGreeted, setHasGreeted] = useState(false);

  // ── Refs ──
  const recognitionRef = useRef<any>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const synthRef = useRef<SpeechSynthesisUtterance | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const lastAssistantText = useRef("");

  // ── Helpers ──
  const stopEverything = useCallback(() => {
    if (recognitionRef.current) {
      recognitionRef.current.abort();
    }
    if (mediaRecorderRef.current && mediaRecorderRef.current.state !== "inactive") {
      mediaRecorderRef.current.stop();
    }
    window.speechSynthesis?.cancel();
    setVoiceState("idle");
    setLiveCaption("");
  }, []);

  const speakText = useCallback(async (text: string) => {
    if (isMuted) return;
    window.speechSynthesis?.cancel();

    const cleanText = text
      .replace(/[*_#`~\[\]()>]/g, "")
      .replace(/\n+/g, ". ")
      .replace(/\s+/g, " ")
      .trim();

    setVoiceState("speaking");

    try {
      const res = await fetch("/api/tts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          text: cleanText,
          languageCode: language,
        }),
      });

      const data = await res.json();
      if (data.audioContent) {
        const audio = new Audio(`data:audio/mp3;base64,${data.audioContent}`);
        audio.playbackRate = speechRate;
        audio.onended = () => setVoiceState("idle");
        audio.onerror = () => setVoiceState("idle");
        audio.play();
      } else {
        throw new Error(data.error || "No audio content");
      }
    } catch (err: any) {
      console.error("TTS play error:", err);
      setVoiceState("idle");
      // Fallback
      const utterance = new SpeechSynthesisUtterance(cleanText);
      utterance.lang = SPEECH_LANG_MAP[language] || "en-IN";
      utterance.onend = () => setVoiceState("idle");
      window.speechSynthesis.speak(utterance);
    }
  }, [isMuted, language, speechRate]);

  const addAssistantMessage = useCallback((text: string) => {
    const entry: ConversationEntry = {
      id: Date.now().toString(),
      role: "assistant",
      text,
      timestamp: new Date(),
    };
    setConversation((prev) => [...prev, entry]);
    lastAssistantText.current = text;
    if (!isMuted) {
      speakText(text);
    } else {
      setVoiceState("idle");
    }
  }, [isMuted, speakText]);

  const handleUserSpeech = useCallback(async (text: string) => {
    const isGreeting = text === "__GREETING__";
    
    if (!isGreeting) {
      setLiveCaption("");
      const userEntry: ConversationEntry = {
        id: Date.now().toString(),
        role: "user",
        text,
        timestamp: new Date(),
      };
      setConversation((prev) => [...prev, userEntry]);
    }
    
    setVoiceState("thinking");

    try {
      const systemPrompt = `You are VoteSaathi AI, a multilingual VOICE assistant for Indian voters.
IDENTITY: You are a warm, helpful concierge. You MUST speak the language the user speaks to you.
RULES:
1. If the user speaks Hindi, respond in HINDI.
2. If the user speaks English, respond in ENGLISH.
3. Keep responses VERY SHORT (max 2 sentences).
4. No markdown. No special characters.
5. Goal: Guide them through the voting journey step-by-step.`;

      const userContent = isGreeting ? "Introduce yourself briefly in both Hindi and English and ask how you can help." : text;

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [
            { role: "system", content: systemPrompt },
            ...conversation.filter(c => c.id !== "greeting").map((c) => ({
              role: c.role,
              content: c.text,
            })),
            { role: "user", content: userContent },
          ],
          engine: "groq",
          language,
        }),
      });

      const data = await res.json();
      if (data.error) throw new Error(data.error);
      addAssistantMessage(data.content);
    } catch (err) {
      console.error("Voice AI error:", err);
      addAssistantMessage(language === "hi" ? "माफ़ कीजिए, तकनीकी समस्या हुई।" : "Sorry, a technical error occurred.");
    }
  }, [language, conversation, addAssistantMessage]);

  const transcribeAudio = async (blob: Blob) => {
    console.log("Transcribing audio blob of size:", blob.size);
    setVoiceState("thinking");
    try {
      const reader = new FileReader();
      reader.readAsDataURL(blob);
      reader.onloadend = async () => {
        const base64Audio = (reader.result as string).split(",")[1];
        
        console.log("Sending to /api/speech...");
        const res = await fetch("/api/speech", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            audio: base64Audio,
            languageCode: SPEECH_LANG_MAP[language] || "en-IN",
            mimeType: blob.type,
          }),
        });

        const data = await res.json();
        console.log("Transcription response:", data);
        
        if (data.text) {
          handleUserSpeech(data.text);
        } else if (data.error) {
          throw new Error(data.error);
        } else {
          console.warn("Google Cloud returned no text");
          setVoiceState("idle");
          addAssistantMessage(language === "hi" ? "मुझे कुछ सुनाई नहीं दिया।" : "I didn't hear anything.");
        }
      };
    } catch (err) {
      console.error("Transcription error:", err);
      setVoiceState("idle");
      addAssistantMessage(language === "hi" ? "क्षमा करें, आवाज़ पहचानने में समस्या हुई।" : "Sorry, I couldn't recognize your voice.");
    }
  };

  // ── Effects ──
  useEffect(() => {
    if (isOpen && !hasGreeted) {
      handleUserSpeech("__GREETING__");
      setHasGreeted(true);
    }
  }, [isOpen, hasGreeted, handleUserSpeech]);

  useEffect(() => {
    if (!isOpen) {
      stopEverything();
      setConversation([]);
      setLiveCaption("");
      setVoiceState("idle");
      setHasGreeted(false);
    }
  }, [isOpen, stopEverything]);

  // ── Scroll to bottom on new messages ──
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [conversation, liveCaption]);

  // ── Start/Stop listening ──
  const toggleListening = async () => {
    console.log("Toggle listening. Current state:", voiceState);

    if (voiceState === "listening") {
      console.log("Stopping recorder manually...");
      if (mediaRecorderRef.current && mediaRecorderRef.current.state !== "inactive") {
        mediaRecorderRef.current.stop();
      }
      return;
    }

    if (voiceState === "speaking") {
      window.speechSynthesis?.cancel();
      setVoiceState("idle");
      return;
    }

    try {
      window.speechSynthesis?.cancel();
      console.log("Requesting mic access...");
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      
      const mimeType = MediaRecorder.isTypeSupported("audio/webm") 
        ? "audio/webm" 
        : "audio/mp4";
        
      console.log("Using MIME type:", mimeType);
      
      const mediaRecorder = new MediaRecorder(stream, { mimeType });
      mediaRecorderRef.current = mediaRecorder;
      audioChunksRef.current = [];

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      mediaRecorder.onstop = () => {
        console.log("Recorder stopped. Generating blob...");
        const audioBlob = new Blob(audioChunksRef.current, { type: mimeType });
        transcribeAudio(audioBlob);
        stream.getTracks().forEach(track => track.stop());
      };

      mediaRecorder.start();
      console.log("Recorder started. Auto-stopping in 10s...");
      
      // Safety timeout: automatically stop after 10 seconds if user doesn't tap again
      setTimeout(() => {
        if (mediaRecorderRef.current && mediaRecorderRef.current.state === "recording") {
          console.log("Safety timeout reached. Stopping...");
          mediaRecorderRef.current.stop();
        }
      }, 10000);

      setVoiceState("listening");
      setLiveCaption("");
    } catch (err) {
      console.error("Mic error:", err);
      addAssistantMessage(language === "hi" ? "कृपया माइक्रोफ़ोन की अनुमति दें।" : "Please allow microphone access.");
    }
  };
  const repeatLast = () => {
    if (lastAssistantText.current) {
      speakText(lastAssistantText.current);
    }
  };

  if (!isOpen) return null;

  // ── Render ──
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] voice-mode-bg"
      >
        {/* Top Bar */}
        <div className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between px-6 py-5">
          <div className="flex items-center gap-4">
            {/* Language Picker */}
            <div className="relative">
              <button
                onClick={() => setShowLangPicker(!showLangPicker)}
                className="voice-control-btn flex items-center gap-2"
              >
                <Globe className="h-5 w-5" />
                <span className="text-xs font-bold uppercase tracking-widest">
                  {language.toUpperCase()}
                </span>
              </button>
              <AnimatePresence>
                {showLangPicker && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    className="absolute left-0 top-full mt-2 w-48 rounded-2xl bg-white/10 backdrop-blur-2xl border border-white/20 p-2 shadow-2xl"
                  >
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setLanguage(lang.code as LanguageCode);
                          setShowLangPicker(false);
                        }}
                        className={`w-full flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition-all cursor-pointer ${
                          language === lang.code
                            ? "bg-white/20 text-white"
                            : "text-white/70 hover:bg-white/10 hover:text-white"
                        }`}
                      >
                        {lang.nativeName}
                        {language === lang.code && <Check className="h-4 w-4" />}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Speech Rate */}
            <button
              onClick={() => setSpeechRate((prev) => (prev >= 1.5 ? 0.75 : prev + 0.25))}
              className="voice-control-btn flex items-center gap-2"
            >
              <Gauge className="h-5 w-5" />
              <span className="text-xs font-bold">{speechRate}x</span>
            </button>
          </div>

          <div className="flex items-center gap-3">
            {/* Mute Toggle */}
            <button
              onClick={() => {
                if (!isMuted) window.speechSynthesis?.cancel();
                setIsMuted(!isMuted);
              }}
              className="voice-control-btn"
            >
              {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
            </button>

            {/* Close */}
            <button onClick={onClose} className="voice-control-btn">
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Conversation History */}
        <div
          ref={scrollRef}
          className="absolute inset-0 top-20 bottom-60 sm:bottom-72 overflow-y-auto px-4 sm:px-6 py-4 voice-scroll"
        >
          <div className="max-w-lg mx-auto space-y-4">
            {conversation.map((entry) => (
              <motion.div
                key={entry.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex ${entry.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] px-5 py-3.5 rounded-2xl text-sm leading-relaxed ${
                    entry.role === "user"
                      ? "bg-white/20 text-white rounded-br-sm"
                      : "bg-white/10 text-white/90 rounded-bl-sm border border-white/10"
                  }`}
                >
                  {entry.text}
                </div>
              </motion.div>
            ))}

            {/* Live Caption */}
            {liveCaption && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex justify-end"
              >
                <div className="max-w-[85%] px-5 py-3.5 rounded-2xl rounded-br-sm bg-saffron/20 text-white/80 text-sm border border-saffron/30">
                  {liveCaption}
                  <span className="inline-block w-1.5 h-4 bg-saffron/60 ml-1 animate-pulse" />
                </div>
              </motion.div>
            )}
          </div>
        </div>

        {/* Bottom Controls */}
        <div className="absolute bottom-0 left-0 right-0 voice-bottom-area">
          {/* State Label */}
          <div className="text-center mb-4">
            <motion.p
              key={voiceState}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-white/70 text-sm font-medium tracking-wide"
            >
              {voiceState === "idle" && vt.tapToSpeak}
              {voiceState === "listening" && vt.listening}
              {voiceState === "thinking" && vt.thinking}
              {voiceState === "speaking" && vt.speaking}
            </motion.p>
          </div>

          {/* Mic Button */}
          <div className="flex justify-center mb-6">
            <button
              onClick={toggleListening}
              disabled={voiceState === "thinking"}
              className="voice-mic-button"
              aria-label="Toggle voice input"
            >
              {/* Ripple rings when listening */}
              {voiceState === "listening" && (
                <>
                  <span className="voice-ripple voice-ripple-1" />
                  <span className="voice-ripple voice-ripple-2" />
                  <span className="voice-ripple voice-ripple-3" />
                </>
              )}

              {/* Thinking spinner */}
              {voiceState === "thinking" && <span className="voice-thinking-ring" />}

              {/* Speaking wave */}
              {voiceState === "speaking" && <span className="voice-speaking-ring" />}

              <span className="voice-mic-inner">
                {voiceState === "listening" ? (
                  <MicOff className="h-8 w-8 text-white" />
                ) : (
                  <Mic className="h-8 w-8 text-white" />
                )}
              </span>
            </button>
          </div>

          {/* Quick actions */}
          <div className="flex justify-center gap-4 pb-8">
            <button
              onClick={repeatLast}
              className="voice-action-pill"
            >
              <RotateCcw className="h-4 w-4" />
              <span>{vt.repeatLast}</span>
            </button>
            <button
              onClick={() => {
                const prompt = language === "hi" ? "अगला चरण" : "Next step";
                handleUserSpeech(prompt);
              }}
              className="voice-action-pill"
            >
              <ChevronRight className="h-4 w-4" />
              <span>{language === "hi" ? "अगला" : "Next"}</span>
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
