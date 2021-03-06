const getFolderWithoutChildren = (bookmark) => {
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
      const {id} = node;

      if (node.children) {
        if (node.parentId) {
          foldersByID[id] = getFolderWithoutChildren(node);
        }
        processBookmarksNodes(node.children);
      } else {
        bookmarksByID[id] = node;
      }
    })
  };
  processBookmarksNodes(bookmarks);

  return {foldersByID, bookmarksByID};
};
