import { useState } from "react";

/**
 * Generic hook for drag‑and‑drop re‑ordering.
 *
 * @param {Array}   items      – the list you want to re‑order
 * @param {Function} setItems  – state setter from useState
 * @returns helpers + props for draggable children
 */
export const useDragAndDrop = (items, setItems) => {
  const [dragged, setDragged] = useState(null);

  const onDragStart = (e, index) => {
    setDragged(index);
    e.dataTransfer.effectAllowed = "move";
  };

  const onDragOver = (e, overIdx) => {
    e.preventDefault();
    if (dragged === null || dragged === overIdx) return;
    const copy = [...items];
    const [item] = copy.splice(dragged, 1);
    copy.splice(overIdx, 0, item);
    setItems(copy);
    setDragged(overIdx);
  };

  const onDragEnd = () => setDragged(null);

  return { onDragStart, onDragOver, onDragEnd };
};