/*global chrome*/
import React, { useEffect, useState } from 'react';
import FolderItemComponent from "./components/folder-item/folder-item.component";

function App() {
  const [ bookMarks, setBookmarks ] = useState([]);

  useEffect(() => {
    chrome.bookmarks.getTree(setBookmarks);
  }, [])

  if (bookMarks.length !== 0) {
    console.log(bookMarks[0].children[0].children[0].children)
  }

  return (
    <div className="App">
      <header className="App-header">
        <ul>
          {
            bookMarks.length !== 0 && bookMarks[0].children[0].children[0].children.map(item =>
              <FolderItemComponent { ...item }/>)
          }
        </ul>
      </header>
    </div>
  );
}

export default App;
