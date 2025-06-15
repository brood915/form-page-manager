import { Flag, Pencil, Copy, Layers, Trash } from "lucide-react";

export const MENU_ITEMS = [
  { label: "Set as first page", icon: Flag, color: "text-blue-600" },
  { label: "Rename",            icon: Pencil, color: "text-gray-600" },
  { label: "Copy",              icon: Copy,  color: "text-gray-600" },
  { label: "Duplicate",         icon: Layers, color: "text-gray-600" },
  { divider: true },
  { label: "Delete",            icon: Trash, color: "text-red-600", danger: true }
];