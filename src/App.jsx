import React from "react";
import PageButton from "./components/PageButton";
import AddConnector from "./components/AddConnector";
import AddPageButton from "./components/AddPageButton";

export default function App() {
  const initialPages = [
    { id: 0, title: "Info" },
    { id: 1, title: "Details" },
    { id: 2, title: "Other" },
    { id: 3, title: "Ending" },
  ];

  const [pages, setPages] = React.useState(initialPages);
  const [activeId, setActiveId] = React.useState(0);

  const addPageAt = (idx) => {
    const newId = Date.now();
    const newPage = { id: newId, title: `Page ${pages.length + 1}` };
    const next = [...pages.slice(0, idx), newPage, ...pages.slice(idx)];
    setPages(next);
    setActiveId(newId);
  };

  const movePage = (from, to) => {
    if (to < 0 || to >= pages.length) return;
    const copy = [...pages];
    const [dragged] = copy.splice(from, 1);
    copy.splice(to, 0, dragged);
    setPages(copy);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-8">
      <nav className="flex items-center bg-gray-100 rounded-lg px-6 py-3 shadow-sm space-x-0 max-w-[1200px] overflow-x-auto">
        {pages.map((page, idx) => (
          <React.Fragment key={page.id}>
            <PageButton
              page={page}
              index={idx}
              active={page.id === activeId}
              onActivate={() => setActiveId(page.id)}
              onMove={(from, to) => movePage(from, to)}
            />
            {idx < pages.length - 1 && (
              <AddConnector onAdd={() => addPageAt(idx + 1)} />
            )}
          </React.Fragment>
        ))}
        <AddPageButton onAdd={() => addPageAt(pages.length)} />
      </nav>
    </div>
  );
}