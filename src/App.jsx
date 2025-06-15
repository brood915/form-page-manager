import React, { useState } from "react";
import PageButton      from "./components/PageButton";
import AddConnector    from "./components/AddConnector";
import AddPageButton   from "./components/AddPageButton";
import { useDragAndDrop } from "./hooks/useDragAndDrop";

export default function App() {
  const [pages, setPages] = useState([
    { id: 0, title: "Info" },
    { id: 1, title: "Details" },
    { id: 2, title: "Other" },
    { id: 3, title: "Ending" }
  ]);
  const [activeId, setActive] = useState(0);

  /** add new page */
  const addPageAt = (idx) => {
    const newPage = { id: Date.now(), title: `Page ${pages.length + 1}` };
    setPages([...pages.slice(0, idx), newPage, ...pages.slice(idx)]);
    setActive(newPage.id);
  };

  /** hook wiring */
  const dnd = useDragAndDrop(pages, setPages);
  dnd.setActive = setActive; // pass down activation helper

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-8">
      <nav className="flex items-center bg-gray-100 rounded-lg px-6 py-3 shadow-sm space-x-0 overflow-x-auto overflow-y-hidden whitespace-nowrap w-full max-w-4xl">
        {pages.map((p, idx) => (
          <React.Fragment key={p.id}>
            <PageButton page={p} index={idx} active={p.id === activeId} dnd={dnd} />
            {idx < pages.length - 1 && <AddConnector onAdd={() => addPageAt(idx + 1)} />}
          </React.Fragment>
        ))}
        <AddPageButton onAdd={() => addPageAt(pages.length)} />
      </nav>
    </div>
  );
}