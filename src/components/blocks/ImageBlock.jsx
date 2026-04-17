import { useBlocks } from "../../context/BlockContext";

export default function ImageBlock({ block }) {
  const { blocks, setBlocks } = useBlocks();

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Convert image to a data URL so it can be stored in localStorage.
    const reader = new FileReader();
    reader.onloadend = () => {
      setBlocks(blocks.map(b =>
        b.id === block.id ? { ...b, content: reader.result } : b
      ));
    };

    reader.readAsDataURL(file);
  };

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        className="block w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-600 file:mr-3 file:rounded-lg file:border-0 file:bg-teal-100 file:px-3 file:py-2 file:font-semibold file:text-teal-700 hover:file:bg-teal-200"
      />

      {/* Preview the selected image right away. */}
      {block.content && (
        <img
          src={block.content}
          alt=""
          className="mt-3 w-full rounded-xl border border-slate-200 object-cover shadow-sm"
        />
      )}
    </div>
  );
}