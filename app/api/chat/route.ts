import { NextRequest, NextResponse } from "next/server";
import { gemini } from "@/lib/gemini";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const messages = body.messages;

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: "Messages are required" },
        { status: 400 }
      );
    }

    const conversation = messages
      .map((m: { role: string; content: string }) => `${m.role}: ${m.content}`)
      .join("\n");

    const response = await gemini.models.generateContent({
      model: "gemini-2.5-flash",
      contents: conversation,
    });

    const answer = response.text || "No response generated.";

    return NextResponse.json({ answer });
  } catch (error) {
    console.error("Gemini API Error:", error);

    return NextResponse.json(
      { error: "Failed to contact Gemini API" },
      { status: 500 }
    );
  }
}