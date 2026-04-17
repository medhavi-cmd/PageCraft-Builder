import {
  DndContext,
  closestCenter,
} from "@dnd-kit/core";

import {
  SortableContext,
  verticalListSortingStrategy,
  arrayMove,
} from "@dnd-kit/sortable";

import { useBlocks } from "../context/BlockContext";
import BlockRenderer from "./BlockRenderer";

export default function Canvas() {
  const { blocks, setBlocks } = useBlocks();

  const handleDragEnd = (event) => {
    // Reorder blocks when drag-and-drop ends.
    const { active, over } = event;
    if (!over) return;

    const oldIndex = blocks.findIndex((b) => b.id === active.id);
    const newIndex = blocks.findIndex((b) => b.id === over.id);

    setBlocks(arrayMove(blocks, oldIndex, newIndex));
  };

  return (
      <div className="flex-1 flex justify-center items-start bg-transparent p-8">
        <div className="w-190 rounded-3xl border border-slate-200/70 bg-white/80 p-7 shadow-xl shadow-slate-300/25 backdrop-blur-sm space-y-4">

          <div className="mb-2 flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-teal-600">Canvas</p>
              <h3 className="mt-1 text-lg font-bold text-slate-900">Page Composition</h3>
            </div>
            <span className="text-xs font-medium text-slate-500">Drag blocks to reorder</span>
          </div>

        {blocks.length === 0 && (
            <div className="rounded-2xl border-2 border-dashed border-teal-200 bg-teal-50/35 p-12 text-center text-slate-500">
              <p className="text-sm font-medium">No blocks yet.</p>
              <p className="mt-1 text-sm">Use the sidebar to start building your page.</p>
          </div>
        )}

        {/* dnd-kit wraps sortable block cards. */}
        <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
          <SortableContext items={blocks} strategy={verticalListSortingStrategy}>
            {blocks.map((block) => (
              <BlockRenderer key={block.id} block={block} />
            ))}
          </SortableContext>
        </DndContext>

      </div>
    </div>
  );
}