import ConnectorDashes from "./ConnectorDashes";
import { Plus } from "lucide-react";

export default function AddPageButton({ onAdd }) {
  return (
    <div className="flex items-center">
      <div className="w-10 h-6 flex items-center">
        <ConnectorDashes />
      </div>
      <button
        onClick={onAdd}
        className="inline-flex items-center gap-2 px-6 h-10 rounded-lg border border-gray-300 bg-white text-gray-700 font-medium shadow hover:bg-gray-50 whitespace-nowrap focus:outline-none"
      >
        <Plus className="w-4 h-4" />
        Add page
      </button>
    </div>
  );
}