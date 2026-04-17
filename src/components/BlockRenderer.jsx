import { useBlocks } from "../context/BlockContext";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

import HeaderBlock from "./blocks/HeaderBlock";
import TextBlock from "./blocks/TextBlock";
import ImageBlock from "./blocks/ImageBlock";
import MarkdownBlock from "./blocks/MarkdownBlock";


export default function BlockRenderer({ block }) {
  const { blocks, setBlocks } = useBlocks();

  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: block.id });

  // Keep drag animation smooth while sorting.
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const deleteBlock = () => {
    setBlocks(blocks.filter((b) => b.id !== block.id));
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="group relative rounded-2xl border border-slate-200/80 bg-white/95 p-4 shadow-sm transition hover:border-teal-200 hover:shadow-md"
    >
      {/* Controls */}
      <div className="absolute right-3 top-3 hidden items-center gap-2 rounded-full border border-slate-200 bg-white/95 px-2 py-1 shadow-sm group-hover:flex">
        <button
          onClick={deleteBlock}
          className="text-xs font-semibold text-rose-500 transition hover:text-rose-700"
        >
          Delete
        </button>

        <span
          {...attributes}
          {...listeners}
          className="cursor-move text-xs font-semibold text-slate-400 transition hover:text-teal-600"
        >
          Drag
        </span>
      </div>

      {/* Render the correct editor UI for each block type. */}
      {block.type === "header" && <HeaderBlock block={block} />}
      {block.type === "text" && <TextBlock block={block} />}
      {block.type === "image" && <ImageBlock block={block} />}
      {block.type === "markdown" && <MarkdownBlock block={block} />}
    </div>
  );
}