import React from "react";
import { Info, FileText, CheckCircle } from "lucide-react";

export default function PageIcon({ title, active }) {
  const base = "h-4 w-4 translate-y-[1px]";
  const color = active ? "text-[#F59D0E]" : "text-gray-500";
  const props = { className: `${base} ${color}` };

  switch (title) {
    case "Info":
      return <Info {...props} />;
    case "Ending":
      return <CheckCircle {...props} />;
    default:
      return <FileText {...props} />;
  }
}