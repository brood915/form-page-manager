import React from "react";
import ContextMenu from "./ContextMenu";

export default function PageButton({ page, index, active, onActivate, onMove }) {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const buttonRef = React.useRef(null);
  const dragRef = React.useRef(null);

  // Drag & drop events
  const handleDragStart = (e) => {
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/index", index.toString());
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const fromIdx = Number(e.dataTransfer.getData("text/index"));
    if (fromIdx === index) return;
    onMove(fromIdx, index);
  };

  return (
    <div
      ref={dragRef}
      className="relative group select-none"
      draggable
      onDragStart={handleDragStart}
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
    >
      {/* Main button */}
      <button
        ref={buttonRef}
        onClick={onActivate}
        className={`px-6 py-2 rounded-lg font-medium ring-0 focus:outline-none transition-colors duration-150 ${
    active ? "bg-white shadow text-blue-600" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
  }`}
      >
        {page.title}
      </button>

      {/* Kebab menu trigger (appears on hover) */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          setMenuOpen((o) => !o);
        }}
        className="absolute -right-0.5 -top-0.5 h-10 w-6 flex items-center justify-center rounded-full text-gray-400 hover:text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-150"
      >
        <span className="leading-none text-sm">⋮</span>
      </button>

      {menuOpen && (
        <ContextMenu onClose={() => setMenuOpen(false)} />
      )}
    </div>
  );
}
