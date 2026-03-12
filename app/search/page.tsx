"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import SearchBar from "@/components/SearchBar";
import ChatMessage from "@/components/ChatMessage";
import SourceList from "@/components/SourceList";
import { Sparkles } from "lucide-react";

type Message = {
  role: "user" | "assistant";
  content: string;
  createdAt: string;
};

function formatTime(dateString: string) {
  return new Date(dateString).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
}

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hi, I’m Nova AI. Ask me anything and I’ll help you with clear, structured answers in a more premium search experience.",
      createdAt: new Date().toISOString(),
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const followUps = useMemo(
    () => [
      "Explain machine learning in simple words",
      "What is RAG in simple terms?",
      "How do AI search apps work?",
      "Compare deep learning and machine learning",
    ],
    []
  );

  async function streamAssistantMessage(fullText: string) {
    const createdAt = new Date().toISOString();

    setMessages((prev) => [
      ...prev,
      {
        role: "assistant",
        content: "",
        createdAt,
      },
    ]);

    let currentText = "";
    const words = fullText.split(" ");

    for (let i = 0; i < words.length; i++) {
      currentText += (i === 0 ? "" : " ") + words[i];

      setMessages((prev) => {
        const updated = [...prev];
        updated[updated.length - 1] = {
          role: "assistant",
          content: currentText,
          createdAt,
        };
        return updated;
      });

      await new Promise((resolve) => setTimeout(resolve, 20));
    }
  }

  async function handleAsk(customQuery?: string) {
    const finalQuery = (customQuery ?? query).trim();
    if (!finalQuery || loading) return;

    const userMessage: Message = {
      role: "user",
      content: finalQuery,
      createdAt: new Date().toISOString(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setQuery("");
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: [...messages, userMessage],
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || data.details || "Request failed");
      }

      await streamAssistantMessage(data.answer);
    } catch (err) {
      console.error(err);
      setError("Failed to get answer.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="app-shell relative min-h-screen text-white">
      <div className="hero-orb one" />
      <div className="hero-orb two" />

      <div className="mx-auto flex min-h-screen max-w-7xl flex-col px-4 py-6 md:px-6">
        <header className="mb-6 flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 via-blue-500 to-cyan-400 shadow-lg shadow-cyan-500/20">
              <Sparkles size={18} />
            </div>
            <div>
              <h1 className="text-xl font-semibold tracking-tight">Nova AI Search</h1>
              <p className="text-sm text-white/55">
                Search, explore, and refine your thinking
              </p>
            </div>
          </div>

          <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70">
            Research Mode
          </div>
        </header>

        <div className="grid flex-1 gap-6 lg:grid-cols-[1.45fr_0.8fr]">
          <section className="flex min-h-[78vh] flex-col">
            <div className="glass-card rounded-3xl px-4 py-3">
              <div className="mb-3 flex flex-wrap gap-2">
                <span className="rounded-full bg-violet-500/15 px-3 py-1 text-xs text-violet-200">
                  Conversational
                </span>
                <span className="rounded-full bg-cyan-500/15 px-3 py-1 text-xs text-cyan-200">
                  AI Powered
                </span>
                <span className="rounded-full bg-pink-500/15 px-3 py-1 text-xs text-pink-200">
                  Research Ready
                </span>
              </div>
            </div>

            <div className="glass-card mt-4 flex-1 space-y-5 overflow-y-auto rounded-3xl p-4">
              {messages.map((message, index) => (
                <ChatMessage
                  key={index}
                  role={message.role}
                  content={message.content}
                  time={formatTime(message.createdAt)}
                />
              ))}

              {loading && (
                <div className="flex justify-start">
                  <div className="glass-card rounded-2xl px-5 py-4 text-white/80">
                    <div className="mb-2 flex items-center justify-between gap-3 text-xs opacity-70">
                      <span>AI</span>
                      <span>{formatTime(new Date().toISOString())}</span>
                    </div>
                    <p>Thinking and generating response...</p>
                  </div>
                </div>
              )}

              {error && <p className="px-2 text-sm text-red-300">{error}</p>}

              <div ref={messagesEndRef} />
            </div>

            <div className="glass-card mt-4 rounded-3xl p-4">
              <p className="mb-3 text-sm text-white/55">Suggested prompts</p>

              <div className="flex flex-wrap gap-3">
                {followUps.map((item) => (
                  <button
                    key={item}
                    onClick={() => handleAsk(item)}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 transition hover:bg-white/10"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            <SearchBar
              value={query}
              onChange={setQuery}
              onSubmit={() => handleAsk()}
              loading={loading}
            />
          </section>

          <SourceList />
        </div>
      </div>
    </main>
  );
}