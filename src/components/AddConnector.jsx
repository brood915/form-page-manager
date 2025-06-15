import ConnectorDashes from "./ConnectorDashes";

export default function AddConnector({ onAdd }) {
  return (
    <button
      onClick={onAdd}
      className="relative w-10 h-6 mx-2 flex items-center justify-center group focus:outline-none"
    >
      <ConnectorDashes />
<span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                 w-6 h-6 rounded-full bg-white border border-[#E1E1E1]
                 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
  <span className="text-[#000000] text-base leading-none translate-y-[-1px]">+</span>
</span>

    </button>
  );
}