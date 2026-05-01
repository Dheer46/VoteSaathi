# VoteSaathi AI — Personal Voting Guide for India

VoteSaathi AI is an interactive civic assistant designed to provide clear and multilingual information about the Indian democratic process. The platform helps citizens understand election procedures, verify their registration, and prepare for polling day using AI-driven support.

## Key Features

### Multilingual AI Support
Powered by Llama 3.3 via Groq, the assistant provides real-time answers to queries about voter registration and election rules in multiple languages including English, Hindi, and Marathi.

### Interactive Voting Journey
A visual guide that breaks down the voting process into manageable steps:
*   **Verification:** Instructions for checking the electoral roll.
*   **Registration:** Guidance on completing Form 6 and other requirements.
*   **Preparation:** Booth location and understanding EVM/VVPAT machines.
*   **Polling Day:** A step-by-step walkthrough of what happens inside the station.

### Accessibility and UX
*   **Namaste Entry Screen:** A clean interface for initial language selection.
*   **Accessibility Panel:** Integrated tools for adjusting contrast, font size, and screen reader compatibility.
*   **Editorial Design:** A typography-focused aesthetic optimized for readability across devices.

---

## Technology Stack

| Category | Technology |
| :--- | :--- |
| **Framework** | Next.js 15 (App Router) |
| **Styling** | Tailwind CSS 4 & Vanilla CSS |
| **Animations** | Framer Motion |
| **AI Engine** | Groq SDK (Llama 3.3) |
| **Icons** | Lucide React |
| **Components** | Radix UI & Shadcn UI |

---

## Installation and Setup

### Prerequisites
*   Node.js 18.x or higher
*   Groq API Key

### Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Dheer46/VoteSaathi.git
   cd VoteSaathi
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure environment:**
   Create a `.env.local` file in the root directory:
   ```env
   GROQ_API_KEY=your_key_here
   ```

4. **Run the application:**
   ```bash
   npm run dev
   ```

The app will be available at `http://localhost:3000`.

---

## Preview

<div align="center">
  <img src="public/images/hero-bg.png" width="400" alt="Hero Section" />
  <img src="public/images/voter-id.png" width="400" alt="Voter Journey" />
</div>

---

## License
This project is licensed under the MIT License.

---

<div align="center">
  <p>Built to strengthen democratic participation.</p>
  <p>Namaste! 🙏</p>
</div>
