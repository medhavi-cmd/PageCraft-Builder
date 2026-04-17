import { useBlocks } from "../../context/BlockContext";
import ReactMarkdown from "react-markdown";

export default function MarkdownBlock({ block }) {
  const { blocks, setBlocks } = useBlocks();

  return (
    <div className="space-y-2">
      {/* Left side: raw markdown input. */}
      <textarea
        className="min-h-28 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-slate-700 outline-none transition focus:border-teal-400 focus:ring-4 focus:ring-teal-100"
        placeholder="Write markdown..."
        value={block.content}
        onChange={(e) =>
          setBlocks(blocks.map(b =>
            b.id === block.id ? { ...b, content: e.target.value } : b
          ))
        }
      />

      {/* Live preview updates on every keystroke. */}
      <div className="markdown-preview rounded-xl border border-slate-200 bg-slate-50/80 p-4">
        <ReactMarkdown>{block.content}</ReactMarkdown>
      </div>
    </div>
  );
}