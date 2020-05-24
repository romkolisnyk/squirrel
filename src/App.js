/*global chrome*/
import React, { useEffect, useState } from 'react';
import FolderItemComponent from "./components/folder-item/folder-item.component";
import { processBookmarks } from "./utils/bookmarks-process.utils";

function App() {
  const [ bookmarks, setBookmarks ] = useState([]);

  useEffect(() => {
    chrome.bookmarks.getTree(setBookmarks);
  }, [])

  const {foldersByID} = processBookmarks(bookmarks);

  const folders = Object.entries(foldersByID);
  console.log(folders)

  return (
    <div className="App">
      <header className="App-header">
        <div>
          {
            folders.map(item => {
              const [title, children] = item;

              return (
                <div>
                  <p>{title}</p>
                  <ul>
                    {
                      children.children.map(item => <FolderItemComponent { ...item }/>)
                    }
                  </ul>
                </div>
              );
            })
          }
        </div>
      </header>
    </div>
  );
}

export default App;
