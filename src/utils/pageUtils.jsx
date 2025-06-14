// utils/pageUtils.js

export const defaultPages = [
  { id: 1, title: 'Info', icon: 'ℹ️' },
  { id: 2, title: 'Details', icon: '📋' },
  { id: 3, title: 'Other', icon: '📄' },
  { id: 4, title: 'Ending', icon: '✅' }
];

export const createNewPage = (id, title = 'New Page', icon = '📄') => ({
  id,
  title,
  icon
});

export const duplicatePage = (page, newId) => ({
  ...page,
  id: newId,
  title: `${page.title} Copy`
});

export const updatePageTitle = (pages, pageIndex, newTitle) => {
  const updatedPages = [...pages];
  updatedPages[pageIndex].title = newTitle.trim();
  return updatedPages;
};

export const deletePage = (pages, pageIndex) => {
  return pages.filter((_, index) => index !== pageIndex);
};

export const insertPage = (pages, insertIndex, newPage) => {
  const updatedPages = [...pages];
  updatedPages.splice(insertIndex, 0, newPage);
  return updatedPages;
};

export const adjustActivePageAfterDelete = (activePage, deletedIndex, totalPages) => {
  if (activePage >= totalPages) {
    return totalPages - 1;
  } else if (activePage > deletedIndex) {
    return activePage - 1;
  }
  return activePage;
};