# VoteSaathi

VoteSaathi is a web application designed to help Indian citizens navigate the voting process. It combines a step-by-step guide with a multilingual chat assistant to answer questions about registration, polling stations, and election procedures.

## What's inside

- **Multilingual Support:** Access information in English, Hindi, and Marathi.
- **Voter Journey:** A clear guide through verification, registration, and voting day.
- **AI Assistant:** A chat interface for specific queries, powered by Groq and Llama 3.
- **Accessibility Tools:** Built-in controls for contrast and font sizes to ensure anyone can use the platform.
- **Election Timeline:** Key dates and schedules for upcoming elections.

## Tech Stack

- **Frontend:** Next.js 15, Tailwind CSS 4, Framer Motion
- **AI:** Groq SDK (Llama 3.3)
- **UI Components:** Radix UI, Shadcn/ui, Lucide Icons

## Getting Started

### Local Setup

1. **Clone the repo:**
   ```bash
   git clone https://github.com/Dheer46/VoteSaathi.git
   cd VoteSaathi
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment:**
   Create a `.env.local` file and add your Groq API key:
   ```env
   GROQ_API_KEY=your_groq_api_key
   ```

4. **Launch:**
   ```bash
   npm run dev
   ```

Open `http://localhost:3000` to view the app.

## Project Structure

- `src/app`: Next.js pages and API routes.
- `src/components`: UI components and section layouts.
- `src/context`: Language and state management.
- `src/lib`: Constants, utility functions, and translations.
- `public/images`: Assets for the guide and hero sections.

---

Built for the 2026 election cycle to improve voter awareness.
Namaste! 🙏
