import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/context/LanguageContext";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "VoteSaathi AI — Your Personal Voting Guide 🇮🇳",
  description:
    "AI-powered civic assistant for India. Understand elections step-by-step, check eligibility, register as a voter, and prepare for voting day — all in minutes.",
  keywords: [
    "vote",
    "India elections",
    "voter registration",
    "civic assistant",
    "AI voting guide",
    "VoteSaathi",
  ],
  openGraph: {
    title: "VoteSaathi AI — Your Personal Voting Guide",
    description:
      "Understand elections step-by-step, in minutes. AI-powered civic assistant for India.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <LanguageProvider>
          <TooltipProvider delayDuration={200}>{children}</TooltipProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
