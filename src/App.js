/*global chrome*/
import React, { useEffect, useState } from 'react';
import { processBookmarks } from "./utils/bookmarks-process.utils";
import FolderComponent from "./components/folder/folder.component";

function App() {
  const [ bookmarks, setBookmarks ] = useState([]);

  useEffect(() => {
    chrome.bookmarks.getTree(setBookmarks);
  }, [])


  const {foldersByID, bookmarksByID} = processBookmarks(bookmarks);

  console.log(foldersByID);
  console.log(bookmarksByID)
  return (
    <div className="App">
      <header className="App-header">
        {
          Object.values(foldersByID).map(item => {
            return (
              <div>
                <p className='folder__header'>{item.title}</p>

                <FolderComponent
                  items={Object.values(bookmarksByID).filter((bookmark) => bookmark.parentId === item.id)}/>
              </div>
            )
          })
        }
      </header>
    </div>
  );
}

export default App;
