import { Globe, Link2, Sparkles, ArrowUpRight } from "lucide-react";

export default function SourceList() {
  return (
    <aside className="glass-card rounded-3xl p-5">
      <div className="mb-5 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-500/15 text-cyan-300">
          <Globe size={18} />
        </div>
        <div>
          <h3 className="text-lg font-semibold">Sources</h3>
          <p className="text-sm text-white/50">Research companion panel</p>
        </div>
      </div>

      <div className="mb-4 rounded-2xl border border-white/10 bg-white/5 p-4">
        <div className="mb-2 flex items-center gap-2 text-sm text-cyan-200">
          <Sparkles size={14} />
          Live search panel coming next
        </div>
        <p className="text-sm leading-6 text-white/55">
          This sidebar will hold web sources, snippets, domains, and citation cards just like a premium answer engine.
        </p>
      </div>

      <div className="space-y-3">
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition hover:bg-white/[0.05]">
          <div className="mb-2 flex items-center gap-2 text-sm text-white/45">
            <Link2 size={14} />
            example-source.com
          </div>
          <div className="flex items-start justify-between gap-2">
            <h4 className="font-medium text-white">Source card placeholder</h4>
            <ArrowUpRight size={16} className="text-white/35" />
          </div>
          <p className="mt-2 text-sm leading-6 text-white/50">
            Future grounded answers will show real links and snippets here.
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition hover:bg-white/[0.05]">
          <div className="mb-2 flex items-center gap-2 text-sm text-white/45">
            <Link2 size={14} />
            docs-placeholder.dev
          </div>
          <div className="flex items-start justify-between gap-2">
            <h4 className="font-medium text-white">Citation-ready layout</h4>
            <ArrowUpRight size={16} className="text-white/35" />
          </div>
          <p className="mt-2 text-sm leading-6 text-white/50">
            We will replace these placeholders with actual search results later.
          </p>
        </div>
      </div>
    </aside>
  );
}