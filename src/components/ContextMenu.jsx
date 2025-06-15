import React, { useRef, useEffect } from "react";
import { MENU_ITEMS } from "../constants/menuItems";
import { cn } from "../utils/classNames";

export default function ContextMenu({ anchorRef, onClose }) {
  const menuRef = useRef(null);

  // 💡 auto‑position under anchor
  useEffect(() => {
    if (!anchorRef.current || !menuRef.current) return;
    const rect = anchorRef.current.getBoundingClientRect();
    menuRef.current.style.top  = `${rect.bottom + 8}px`;
    menuRef.current.style.left = `${rect.left}px`;
  }, [anchorRef]);

  // outside‑click to close
  useEffect(() => {
    const handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) onClose();
    };
    window.addEventListener("mousedown", handler);
    return () => window.removeEventListener("mousedown", handler);
  }, [onClose]);

  return (
    <ul
      ref={menuRef}
      className="fixed z-50 bg-white shadow-lg rounded-lg py-2 w-56 text-sm font-medium animate-fade-in"
    >
      {MENU_ITEMS.map((item, i) => (
        item.divider ? (
          <div key={i} className="my-2 border-t" />
        ) : (
          <li
            key={item.label}
            onClick={onClose}
            className={cn(
              "flex items-center gap-3 px-4 py-2 cursor-pointer hover:bg-gray-100 transition-colors",
              item.danger ? "text-red-600" : "text-gray-700"
            )}
          >
            <item.icon className={cn("w-4 h-4", item.color)} />
            <span className="truncate flex-1">{item.label}</span>
          </li>
        )
      ))}
    </ul>
  );
}