import { useBlocks } from "../context/BlockContext";
import { v4 as uuidv4 } from "uuid";

export default function Sidebar() {
  const { setBlocks } = useBlocks();

  const addBlock = (type) => {
    // Every new block starts with safe defaults.
    const newBlock = {
      id: uuidv4(),
      type,
      content: "",
      level: "h1",
    };

    setBlocks((prev) => [...prev, newBlock]);
  };

  return (
    <aside className="w-72 border-r border-slate-200/70 bg-white/60 p-5 backdrop-blur-md">
      <div className="mb-6 rounded-2xl border border-slate-200/70 bg-white/80 p-4 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-orange-500">
          Toolbox
        </p>
        <h2 className="mt-2 text-xl font-bold text-slate-900">Content Blocks</h2>
        <p className="mt-1 text-sm text-slate-500">Build your page section by section.</p>
      </div>

      {/* Quick actions  */}
      <div className="space-y-3">
        <button onClick={() => addBlock("header")} className="btn">
          Add Header
        </button>
        <button onClick={() => addBlock("text")} className="btn">
          Add Paragraph
        </button>
        <button onClick={() => addBlock("image")} className="btn">
          Add Image
        </button>
        <button onClick={() => addBlock("markdown")} className="btn">
          Add Markdown
        </button>
      </div>
    </aside>
  );
}
