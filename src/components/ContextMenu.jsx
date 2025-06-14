import React from "react";

export default function ContextMenu({ onClose }) {
  const menuRef = React.useRef(null);

  React.useEffect(() => {
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        onClose();
      }
    }
    window.addEventListener("mousedown", handleClickOutside);
    return () => window.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  const options = [
    "Set as first page",
    "Rename",
    "Copy",
    "Duplicate",
    "Delete",
  ];

  return (
    <ul
      ref={menuRef}
      className="absolute right-0 top-full mt-2 z-50 bg-white shadow-lg rounded-lg py-2 w-48 text-sm font-medium animate-fade-in"
    >
      {options.map((opt) => (
        <li
          key={opt}
          onClick={onClose}
          className={`px-4 py-2 cursor-pointer hover:bg-gray-100 transition-colors ${
            opt === "Delete" ? "text-red-600" : "text-gray-700"
          }`}
        >
          {opt}
        </li>
      ))}
    </ul>
  );
}
