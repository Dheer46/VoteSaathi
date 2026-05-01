import {
  UserCheck,
  ClipboardList,
  SearchCheck,
  CalendarClock,
  Vote,
  MapPin,
  ShieldCheck,
  FileText,
  type LucideIcon,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Journey Steps                                                      */
/* ------------------------------------------------------------------ */

export interface JourneyStep {
  id: number;
  title: string;
  shortTitle: string;
  icon: LucideIcon;
  description: string;
  bullets: string[];
  tip: string;
}

export const JOURNEY_STEPS: JourneyStep[] = [
  {
    id: 1,
    title: "Check Your Eligibility",
    shortTitle: "Eligibility",
    icon: UserCheck,
    description:
      "Before anything else, let's make sure you're eligible to vote in Indian elections.",
    bullets: [
      "You must be an Indian citizen",
      "You must be at least 18 years old on the qualifying date (Jan 1 of the year of revision)",
      "You must be a resident of the constituency where you wish to vote",
      "You should not be disqualified under any law",
    ],
    tip: "💡 Even if you turn 18 after Jan 1, you can still register for the next revision cycle.",
  },
  {
    id: 2,
    title: "Register as a Voter",
    shortTitle: "Register",
    icon: ClipboardList,
    description:
      "Registration is the key step. You can do it online or offline — here's how.",
    bullets: [
      "Fill Form 6 online at voters.eci.gov.in or the Voter Helpline App",
      "Attach a passport-size photo and proof of age & address",
      "You can also submit Form 6 at your nearest ERO office",
      "Track your application with the reference number provided",
    ],
    tip: "📱 Download the 'Voter Helpline' app for the fastest registration experience.",
  },
  {
    id: 3,
    title: "Verify Your Voter Status",
    shortTitle: "Verify",
    icon: SearchCheck,
    description:
      "Already registered? Verify your name is on the electoral roll before election day.",
    bullets: [
      "Visit electoralsearch.eci.gov.in to search by name or EPIC number",
      "Check your details — name, age, constituency, polling booth",
      "If details are wrong, file Form 8 for correction",
      "Download your e-EPIC (digital voter ID) from the Voter Helpline app",
    ],
    tip: "🔍 Always verify at least 2 weeks before election day to allow time for corrections.",
  },
  {
    id: 4,
    title: "Understand the Election Timeline",
    shortTitle: "Timeline",
    icon: CalendarClock,
    description:
      "Elections follow a structured timeline set by the Election Commission of India.",
    bullets: [
      "Announcement of election dates by ECI",
      "Filing of nominations by candidates",
      "Campaigning period (ends 48 hours before voting)",
      "Polling day — your chance to vote!",
      "Counting day and results announcement",
    ],
    tip: "📅 The 'silence period' of 48 hours before voting is when all campaigning must stop.",
  },
  {
    id: 5,
    title: "Learn the Voting Process",
    shortTitle: "Voting",
    icon: Vote,
    description:
      "Voting in India uses Electronic Voting Machines (EVMs). Here's the step-by-step process.",
    bullets: [
      "Arrive at your assigned polling booth with your voter ID",
      "Your identity is verified and finger is inked",
      "Enter the voting compartment — it's fully private",
      "Press the button next to your chosen candidate on the EVM",
      "You'll hear a beep and see the VVPAT slip confirming your vote",
    ],
    tip: "🗳️ NOTA (None of the Above) is always an option if you don't wish to vote for any candidate.",
  },
  {
    id: 6,
    title: "Find Your Polling Booth",
    shortTitle: "Booth",
    icon: MapPin,
    description:
      "Know exactly where to go on election day. Your booth is assigned based on your address.",
    bullets: [
      "Search your polling booth on the ECI website or Voter Helpline app",
      "Enter your EPIC number or search by name",
      "Note the booth address, number, and timings",
      "Booths are usually within 2 km of your registered address",
    ],
    tip: "📍 Polling booths are open from 7 AM to 6 PM on election day. Go early to avoid queues!",
  },
  {
    id: 7,
    title: "Prepare for Voting Day",
    shortTitle: "Prepare",
    icon: ShieldCheck,
    description:
      "You're almost ready! Here's your final checklist for a smooth voting experience.",
    bullets: [
      "Carry your Voter ID (EPIC card) or any of 12 approved photo IDs",
      "Know your polling booth number and address",
      "Dress comfortably — you may have to stand in a queue",
      "Voting is a holiday — your employer must give you time off",
      "After voting, collect your indelible ink mark with pride! 🇮🇳",
    ],
    tip: "✅ Approved IDs include: Passport, Driving License, Aadhaar, PAN Card, and more.",
  },
];

/* ------------------------------------------------------------------ */
/*  Quick Action Cards                                                 */
/* ------------------------------------------------------------------ */

export interface QuickAction {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  gradient: string;
  action?: string;
  url?: string;
}

export const QUICK_ACTIONS: QuickAction[] = [
  {
    id: "voter-status",
    title: "Check Voter Status",
    description: "Verify if your name is on the electoral roll",
    icon: SearchCheck,
    color: "text-orange-500",
    gradient: "from-orange-500/10 to-amber-500/10",
    url: "https://electoralsearch.eci.gov.in/",
  },
  {
    id: "registration",
    title: "Registration Guide",
    description: "Step-by-step guide to register as a new voter",
    icon: ClipboardList,
    color: "text-blue-500",
    gradient: "from-blue-500/10 to-indigo-500/10",
    action: "journey-1",
  },
  {
    id: "voting-process",
    title: "Voting Process",
    description: "Learn how to cast your vote using EVM",
    icon: Vote,
    color: "text-green-600",
    gradient: "from-green-500/10 to-emerald-500/10",
    action: "journey-4",
  },
  {
    id: "polling-booth",
    title: "Polling Booth Finder",
    description: "Locate your nearest polling booth",
    icon: MapPin,
    color: "text-purple-500",
    gradient: "from-purple-500/10 to-fuchsia-500/10",
    url: "https://voters.eci.gov.in/booth-locator",
  },
  {
    id: "documents",
    title: "Documents Required",
    description: "List of approved ID proofs for voting",
    icon: FileText,
    color: "text-rose-500",
    gradient: "from-rose-500/10 to-pink-500/10",
    action: "ask-ai:What documents do I need to vote in India?",
  },
];

/* ------------------------------------------------------------------ */
/*  Election Timeline                                                  */
/* ------------------------------------------------------------------ */

export interface TimelineEvent {
  id: string;
  title: string;
  date: string;
  startDate: string; // ISO string
  endDate?: string;  // ISO string for ranges
  description: string;
  status?: "completed" | "active" | "upcoming"; // Made optional as it will be calculated
}

export const ELECTION_TIMELINE: TimelineEvent[] = [
  {
    id: "announcement",
    title: "Election Announced",
    date: "March 15, 2026",
    startDate: "2026-03-15T00:00:00Z",
    description: "Election Commission announces election schedule and code of conduct begins.",
  },
  {
    id: "nomination",
    title: "Nominations Filed",
    date: "March 25, 2026",
    startDate: "2026-03-25T00:00:00Z",
    description: "Candidates file their nomination papers with the returning officer.",
  },
  {
    id: "campaigning",
    title: "Campaigning Period",
    date: "March 28 – April 28",
    startDate: "2026-03-28T00:00:00Z",
    endDate: "2026-04-28T23:59:59Z",
    description: "Political parties and candidates campaign across constituencies.",
  },
  {
    id: "silence",
    title: "Silence Period",
    date: "April 28 – April 30",
    startDate: "2026-04-28T00:00:00Z",
    endDate: "2026-04-30T00:00:00Z",
    description: "48-hour campaign blackout before polling begins.",
  },
  {
    id: "voting",
    title: "Voting Day",
    date: "April 30, 2026",
    startDate: "2026-04-30T00:00:00Z",
    endDate: "2026-04-30T23:59:59Z",
    description: "Polls open from 7 AM to 6 PM. Cast your vote!",
  },
  {
    id: "counting",
    title: "Counting & Results",
    date: "May 3, 2026",
    startDate: "2026-05-03T00:00:00Z",
    description: "Votes are counted and results are announced.",
  },
];

/* ------------------------------------------------------------------ */
/*  AI Chat defaults                                                   */
/* ------------------------------------------------------------------ */

export const AI_PREDEFINED_PROMPTS = [
  "How do I vote?",
  "What documents do I need?",
  "Explain elections simply",
  "Am I eligible to vote?",
  "How to register online?",
  "What is NOTA?",
];

export type AIEngine = "gemini" | "groq";
export type Language = "en" | "hi";
