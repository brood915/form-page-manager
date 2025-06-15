import React, { useState, useRef } from "react";
import PageIcon from "./PageIcon";
import ContextMenu from "./ContextMenu";
import { cn } from "../utils/classNames";

export default function PageButton({ page, index, active, dnd }) {
  const [open, setOpen]       = useState(false);
  const btnRef               = useRef(null);

  return (
    <div 
      className="relative select-none group"
      draggable
      onDragStart={(e) => dnd.onDragStart(e, index)}
      onDragOver={(e) => dnd.onDragOver(e, index)}
      onDragEnd={dnd.onDragEnd}
    >
      <button
        ref={btnRef}
        onClick={() => dnd.setActive(page.id)}
        className={cn(
          "inline-flex items-center gap-2 px-6 py-2 rounded-lg font-medium whitespace-nowrap transition-colors",
          active ? "bg-white shadow text-[#1A1A1A]" : "bg-[#9DA4B226] text-[#677289] hover:bg-[#9DA4B259]"
        )}
      >
        <PageIcon title={page.title} active={active} />
        {page.title}
      </button>

      {/* kebab */}
      <button
        onClick={(e) => { e.stopPropagation(); setOpen((o) => !o); }}
        className="absolute -right-0.5 -top-0 h-10 w-6 flex items-center justify-center rounded-full text-gray-400 hover:text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-150"
      >⋮
      </button>

      {open && <ContextMenu anchorRef={btnRef} onClose={() => setOpen(false)} />}  {/* portal menu */}
    </div>
  );
}