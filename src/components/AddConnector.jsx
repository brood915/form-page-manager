import React from "react";
import ConnectorDashes from "./ConnectorDashes";

export default function AddConnector({ onAdd }) {
  return (
    <button
      onClick={onAdd}
      className="relative w-10 h-6 mx-2 flex items-center justify-center group focus:outline-none"
    >
      <ConnectorDashes />
      {/* Plus icon */}
      <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-lg leading-none opacity-0 group-hover:opacity-100 transition-opacity duration-150">
        +
      </div>
    </button>
  );
}