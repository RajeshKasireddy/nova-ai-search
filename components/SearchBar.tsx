import { Search, Sparkles } from "lucide-react";

type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
  loading?: boolean;
};

export default function SearchBar({
  value,
  onChange,
  onSubmit,
  loading = false,
}: SearchBarProps) {
  return (
    <div className="glass-card-strong sticky bottom-0 mt-5 rounded-3xl p-3">
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/6 text-cyan-300">
          <Search size={18} />
        </div>

        <input
          type="text"
          placeholder="Ask anything in a smarter way..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") onSubmit();
          }}
          className="w-full bg-transparent px-2 py-3 text-sm text-white outline-none placeholder:text-white/35"
        />

        <button
          onClick={onSubmit}
          disabled={loading || !value.trim()}
          className="gradient-btn inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-medium transition disabled:cursor-not-allowed disabled:opacity-40"
        >
          <Sparkles size={16} />
          {loading ? "Thinking..." : "Ask"}
        </button>
      </div>
    </div>
  );
}