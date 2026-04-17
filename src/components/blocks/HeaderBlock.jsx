import { useBlocks } from "../../context/BlockContext";

export default function HeaderBlock({ block }) {
  const { blocks, setBlocks } = useBlocks();

  // Tiny helper to keep block updates in one place.
  const update = (field, value) => {
    setBlocks(blocks.map(b =>
      b.id === block.id ? { ...b, [field]: value } : b
    ));
  };

  const Tag = block.level || "h1";

  return (
    <div>
      {/* Level selector */}
      <select
        value={block.level || "h1"}
        onChange={(e) => update("level", e.target.value)}
        className="mb-3 rounded-lg border border-slate-300 bg-slate-50 px-2 py-1 text-sm font-medium text-slate-700 outline-none transition focus:border-teal-400 focus:bg-white"
      >
        <option value="h1">H1</option>
        <option value="h2">H2</option>
        <option value="h3">H3</option>
      </select>

      <Tag
        contentEditable
        suppressContentEditableWarning
        // Save edits when the heading loses focus.
        onBlur={(e) => update("content", e.target.innerText)}
        className="font-bold text-slate-900 outline-none"
      >
        {block.content || "Header"}
      </Tag>
    </div>
  );
}