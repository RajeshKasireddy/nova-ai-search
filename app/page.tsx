import Link from "next/link";
import { Sparkles, Search, Globe, MessagesSquare } from "lucide-react";

export default function Home() {
  return (
    <main className="app-shell relative min-h-screen text-white">
      <div className="hero-orb one" />
      <div className="hero-orb two" />
      <div className="hero-orb three" />

      <div className="mx-auto flex min-h-screen max-w-7xl flex-col px-6 py-8">
        <header className="mb-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 via-blue-500 to-cyan-400 shadow-lg shadow-cyan-500/20">
              <Sparkles size={20} />
            </div>
            <div>
              <h1 className="text-lg font-semibold tracking-tight">Nova AI</h1>
              <p className="text-sm text-white/60">Smarter search experience</p>
            </div>
          </div>

          <Link
            href="/search"
            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 transition hover:bg-white/10"
          >
            Open App
          </Link>
        </header>

        <section className="relative flex flex-1 flex-col items-center justify-center text-center">
          <div className="glass-card mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm text-cyan-200">
            <Sparkles size={16} />
            Research faster with AI
          </div>

          <h2 className="max-w-5xl text-5xl font-semibold leading-tight md:text-7xl">
            Ask smarter. <span className="gradient-text">Search deeper.</span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 text-white/65 md:text-lg">
            A premium AI search experience with conversational answers,
            follow-up questions, and a modern research-first interface.
          </p>

          <Link
            href="/search"
            className="gradient-btn mt-10 inline-flex items-center gap-3 rounded-2xl px-6 py-4 text-base font-medium transition"
          >
            <Search size={18} />
            Start Searching
          </Link>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <span className="soft-chip rounded-full px-4 py-2 text-sm">
              Compare tools
            </span>
            <span className="soft-chip rounded-full px-4 py-2 text-sm">
              Learn concepts
            </span>
            <span className="soft-chip rounded-full px-4 py-2 text-sm">
              Explore AI trends
            </span>
          </div>
        </section>

        <section className="mt-16 grid gap-4 md:grid-cols-3">
          <div className="glass-card rounded-3xl p-6">
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-violet-500/20 text-violet-300">
              <MessagesSquare size={20} />
            </div>
            <h3 className="text-lg font-semibold">Conversational UI</h3>
            <p className="mt-2 text-sm leading-6 text-white/60">
              Ask follow-up questions naturally and keep context in one smooth flow.
            </p>
          </div>

          <div className="glass-card rounded-3xl p-6">
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-500/20 text-cyan-300">
              <Globe size={20} />
            </div>
            <h3 className="text-lg font-semibold">Grounded Answers</h3>
            <p className="mt-2 text-sm leading-6 text-white/60">
              Ready for source panels, web grounding, and citation-based answers.
            </p>
          </div>

          <div className="glass-card rounded-3xl p-6">
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-pink-500/20 text-pink-300">
              <Sparkles size={20} />
            </div>
            <h3 className="text-lg font-semibold">Premium Experience</h3>
            <p className="mt-2 text-sm leading-6 text-white/60">
              Modern gradients, glassmorphism, and polished interactions built for a portfolio-ready product.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}