import Sidebar from "./components/Sidebar";
import Canvas from "./components/Canvas";
export default function App() {
  return (

    <div className="h-screen flex flex-col text-slate-800">
      
      {/* Top Bar */}
      <div className="h-16 flex items-center justify-between border-b border-slate-200/70 bg-white/70 px-6 backdrop-blur-md">
        <div>
          
          <h1 className="text-lg font-bold tracking-tight text-teal-600">PageCraft Builder</h1>
        </div>
        <span className="rounded-full border border-teal-200 bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-700">
          Auto-saved
        </span>
      </div>

      {/* Main Layout */}
      <div className="flex flex-1">
        <Sidebar />
        {/* Canvas  - drag drops happens here */}
        <Canvas />
      </div>
    </div>
  );
}