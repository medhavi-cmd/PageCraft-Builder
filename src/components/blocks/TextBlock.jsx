import { useBlocks } from "../../context/BlockContext";

export default function TextBlock({ block }) {
  const { blocks, setBlocks } = useBlocks();

  return (
    <textarea
      className="min-h-24 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-slate-700 outline-none transition focus:border-teal-400 focus:ring-4 focus:ring-teal-100"
      placeholder="Write something..."
      value={block.content}
      onChange={(e) =>
        setBlocks(blocks.map(b =>
          b.id === block.id ? { ...b, content: e.target.value } : b
        ))
      }
    />
  );
}