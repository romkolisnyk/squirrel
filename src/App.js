/*global chrome*/
import React, { useEffect, useState } from 'react';
import { processBookmarks } from "./utils/bookmarks-process.utils";
import FolderComponent from "./components/folder/folder.component";
import ContainerComponent from "./components/container/container.component";

function App() {
  const [ bookmarks, setBookmarks ] = useState([]);

  useEffect(() => {
    chrome.bookmarks.getTree(setBookmarks);
  }, [])

  const {foldersByID, bookmarksByID} = processBookmarks(bookmarks);

  return (
    <div className="App">
      <ContainerComponent>
        {
          Object.values(foldersByID).map(item => {
            return (
              <FolderComponent
                title={item.title}
                items={Object.values(bookmarksByID).filter((bookmark) => bookmark.parentId === item.id)}/>
            )
          })
        }
      </ContainerComponent>
    </div>
  );
}

export default App;
