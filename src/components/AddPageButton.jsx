import React from "react";
import ConnectorDashes from "./ConnectorDashes";

export default function AddPageButton({ onAdd }) {
  return (
    <div className="flex items-center">
      {/* Final dashed connector */}
      <div className="w-10 h-6 flex items-center">
        <ConnectorDashes />
      </div>
      {/* Add page button */}
      <button
        onClick={onAdd}
        className="inline-flex items-center gap-2 px-6 h-10 rounded-lg border border-gray-300 bg-white text-gray-700 font-medium shadow hover:bg-gray-50 whitespace-nowrap focus:outline-none transition-colors"
      >
        <span className="text-base leading-none">+</span>
        <span>Add page</span>
      </button>
    </div>
  );
}