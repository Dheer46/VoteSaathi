# 🗳️ VoteSaathi AI — Your Personal Voting Guide 🇮🇳

[![GitHub Stars](https://img.shields.io/github/stars/Dheer46/VoteSaathi?style=for-the-badge&color=orange)](https://github.com/Dheer46/VoteSaathi/stargazers)
[![License](https://img.shields.io/github/license/Dheer46/VoteSaathi?style=for-the-badge&color=green)](LICENSE)
[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)

**VoteSaathi AI** is a premium, AI-powered civic assistant designed to empower Indian citizens with clear, accessible, and multilingual information about the democratic process. Understand elections step-by-step, check eligibility, register to vote, and prepare for polling day — all in minutes.

---

## ✨ Key Features

### 🤖 Multilingual AI Concierge
Powered by **Llama 3.3 (via Groq SDK)**, our AI assistant speaks your language. Ask anything about voter registration, polling stations, or candidate verification in English, Hindi, Marathi, and more.

### 🗺️ Step-by-Step Voting Journey
A visual, interactive flow that guides you through the entire process:
1. **Verification:** Check if you're on the electoral roll.
2. **Registration:** Easy links and guides for Form 6.
3. **Preparation:** Locate your booth and understand the EVM.
4. **Casting:** Step into the polling station with confidence.

### 🎨 Premium User Experience
*   **Namaste Welcome Screen:** A beautiful, animated entry point for language selection.
*   **Accessibility First:** Integrated panel for high-contrast modes, font adjustments, and screen reading optimization.
*   **Luxury Editorial Design:** A clean, serif-driven aesthetic inspired by high-end digital journalism.

### 📅 Election Timeline & Interactive Quiz
*   Keep track of critical dates with a modern timeline component.
*   Test your civic knowledge with our built-in Election Quiz.

---

## 🛠️ Technology Stack

| Category | Technology |
| :--- | :--- |
| **Framework** | [Next.js 15 (App Router)](https://nextjs.org/) |
| **Styling** | [Tailwind CSS 4](https://tailwindcss.com/) + [Vanilla CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) |
| **Animations** | [Framer Motion](https://www.framer.com/motion/) |
| **AI Engine** | [Groq SDK](https://groq.com/) (Llama 3.3) |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Components** | [Radix UI](https://www.radix-ui.com/) + [Shadcn UI](https://ui.shadcn.com/) |

---

## 🚀 Getting Started

### Prerequisites
*   Node.js 18.x or higher
*   A Groq API Key (for the AI features)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Dheer46/VoteSaathi.git
   cd VoteSaathi
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Environment Setup:**
   Create a `.env.local` file in the root directory and add your Groq API key:
   ```env
   GROQ_API_KEY=your_key_here
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```

Open [http://localhost:3000](http://localhost:3000) to see your personal voting guide.

---

## 📸 Preview

<div align="center">
  <img src="public/images/hero-bg.png" width="400" alt="VoteSaathi Hero" />
  <img src="public/images/voter-id.png" width="400" alt="Voter Journey" />
</div>

---

## 📜 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

<div align="center">
  <p>Built with ❤️ for a stronger democracy.</p>
  <p><b>Namaste! 🙏</b></p>
</div>
