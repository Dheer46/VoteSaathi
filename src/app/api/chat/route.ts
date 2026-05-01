import { NextResponse } from "next/server";
import Groq from "groq-sdk";

export async function POST(req: Request) {
  try {
    const { messages, engine, language } = await req.json();
    const groqKey = process.env.GROQ_API_KEY;

    if (!groqKey) {
      return NextResponse.json({ 
        content: "Groq API Key is missing. Please add GROQ_API_KEY to your .env.local file and restart the development server." 
      });
    }

    const groq = new Groq({
      apiKey: groqKey,
    });

    const response = await groq.chat.completions.create({
      messages: [
        {
          role: "system",
          content: `You are VoteSaathi AI, a premium civic assistant for Indian voters. 
          Respond in ${language === "hi" ? "Hindi" : "English"}.
          
          CRITICAL CONSTRAINTS:
          1. STRICT NEUTRALITY: No political advice, opinions, or endorsements. Refuse and pivot to process if asked.
          2. ELEGANT BREVITY: Be concise. If the user greets you, greet them back warmly (e.g., "Namaste!", "Hello!") but move quickly to the point. No excessive filler.
          3. PRECISION: Provide only the requested information. No tangential info.
          4. FORMATTING: Use structured Markdown bullet points for lists. Use bold text for key terms only.
          
          Tone: Sophisticated, helpful, and authoritative. Every word must serve a purpose.`,
        },
        ...messages,
      ],
      model: "llama-3.3-70b-versatile",
      temperature: 0.3, // Lower temperature for more consistent, precise responses
    });

    return NextResponse.json({ content: response.choices[0]?.message?.content || "" });
  } catch (error: any) {
    console.error("Chat Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
