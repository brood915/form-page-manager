import ConnectorDashes from "./ConnectorDashes";

export default function AddConnector({ onAdd }) {
  return (
    <button
      onClick={onAdd}
      className="relative w-10 h-6 mx-2 flex items-center justify-center group focus:outline-none"
    >
      <ConnectorDashes />
      <span className="absolute inset-0 flex items-center justify-center text-gray-400 text-lg opacity-0 group-hover:opacity-100 transition-opacity">+</span>
    </button>
  );
}