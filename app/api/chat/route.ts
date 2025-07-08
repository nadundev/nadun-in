import { NextRequest, NextResponse } from "next/server";
import { SYSTEM_PROMPT } from "@/lib/prompt";

interface Message {
  id: string;
  content: string;
  role: "user" | "assistant";
  timestamp: Date;
}

export async function POST(request: NextRequest) {
  try {
    const { message, messages } = await request.json();

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "API key not configured" },
        { status: 500 }
      );
    }

    // Prepare the conversation context for Gemini
    const contents = [];

    // Add system prompt as the first message
    contents.push({
      parts: [{ text: SYSTEM_PROMPT }],
      role: "user",
    });

    contents.push({
      parts: [
        {
          text: "I understand. I am Kiriputha, Nadun Nissanka's AI assistant. I'm ready to help visitors learn about Nadun's work, experience, and design expertise. How can I assist you?",
        },
      ],
      role: "model",
    });

    // Add conversation history
    messages.forEach((msg: Message) => {
      contents.push({
        parts: [{ text: msg.content }],
        role: msg.role === "user" ? "user" : "model",
      });
    });

    // Add the current user message
    contents.push({
      parts: [{ text: message }],
      role: "user",
    });

    // Call Gemini API
    const response = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-goog-api-key": apiKey,
        },
        body: JSON.stringify({
          contents: contents,
        }),
      }
    );

    if (!response.ok) {
      const errorData = await response.text();
      console.error("Gemini API error:", errorData);
      return NextResponse.json(
        { error: "Failed to get AI response" },
        { status: 500 }
      );
    }

    const data = await response.json();

    // Extract the response text from Gemini's response format
    const aiResponse =
      data.candidates?.[0]?.content?.parts?.[0]?.text ||
      "I'm sorry, I couldn't generate a response.";

    return NextResponse.json({ response: aiResponse });
  } catch (error) {
    console.error("Error in chat API:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
