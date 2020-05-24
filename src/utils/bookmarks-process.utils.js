const withoutChildren = (bookmark) => {
  const {children, ...otherValues} = bookmark;
  return {
    ...otherValues,
  }
};

export const processBookmarks = (bookmarks) => {
  const foldersByID = {};
  const bookmarksByID = {};

  const processBookmarksNodes = (nodes) => {
    nodes.forEach((node) => {
      const {title, id} = node;

      if (node.children) {
        foldersByID[title] = node;
        processBookmarksNodes(node.children);
      } else {
        bookmarksByID[id] = node;
      }
    })
  };
  processBookmarksNodes(bookmarks);

  return {foldersByID, bookmarksByID};
};