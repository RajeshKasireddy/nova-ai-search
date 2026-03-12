import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type ChatMessageProps = {
  role: "user" | "assistant";
  content: string;
  time?: string;
};

export default function ChatMessage({
  role,
  content,
  time,
}: ChatMessageProps) {
  const isUser = role === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-3xl rounded-2xl px-5 py-4 ${
          isUser
            ? "gradient-btn text-white"
            : "glass-card text-neutral-200"
        }`}
      >
        <div className="mb-2 flex items-center justify-between text-xs opacity-70">
          <span>{isUser ? "You" : "AI"}</span>
          {time && <span>{time}</span>}
        </div>

        {isUser ? (
          <p className="whitespace-pre-wrap leading-7">{content}</p>
        ) : (
          <div className="prose prose-invert max-w-none prose-p:leading-7 prose-pre:rounded-xl prose-pre:border prose-pre:border-white/10 prose-pre:bg-black/30 prose-code:text-cyan-300">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {content}
            </ReactMarkdown>
          </div>
        )}
      </div>
    </div>
  );
}