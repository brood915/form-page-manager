import React from "react";
import { Flag, Pencil, Copy, Layers, Trash } from "lucide-react";

export default function ContextMenu({ onClose }) {
  const menuRef = React.useRef(null);

  React.useEffect(() => {
    function handleOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        onClose();
      }
    }
    window.addEventListener("mousedown", handleOutside);
    return () => window.removeEventListener("mousedown", handleOutside);
  }, [onClose]);

  const menuItems = [
    { label: "Set as first page", icon: Flag, color: "text-blue-600" },
    { label: "Rename", icon: Pencil, color: "text-gray-600" },
    { label: "Copy", icon: Copy, color: "text-gray-600" },
    { label: "Duplicate", icon: Layers, color: "text-gray-600" },
    { divider: true },
    { label: "Delete", icon: Trash, color: "text-red-600", danger: true },
  ];

  return (
    <ul
      ref={menuRef}
      className="absolute right-0 top-full mt-2 z-50 bg-white shadow-lg rounded-lg py-2 w-56 text-sm font-medium animate-fade-in"
    >
      {menuItems.map((item, idx) => {
        if (item.divider) {
          return <div key={`div-${idx}`} className="my-2 border-t" />;
        }
        const Icon = item.icon;
        return (
          <li
            key={item.label}
            onClick={onClose}
            className={`flex flex-row items-center gap-3 px-4 py-2 cursor-pointer hover:bg-gray-100 transition-colors ${
              item.danger ? "text-red-600" : "text-gray-700"
            }`}
          >
            <Icon className={`h-4 w-4 ${item.color}`} />
            <span className="flex-1 truncate">{item.label}</span>
          </li>
        );
      })}
    </ul>
  );
}
