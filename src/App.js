/*global chrome*/
import React, { useEffect, useState } from 'react';
import { processBookmarks } from "./utils/bookmarks-process.utils";
import FolderComponent from "./components/folder/folder.component";
import ContainerComponent from "./components/container/container.component";

function App() {
  const [ bookmarks, setBookmarks ] = useState([]);
  const [ columnsCount, setColumnsCount ] = useState(4);

  useEffect(() => {
    chrome.bookmarks.getTree(setBookmarks);
  }, [])

  const {foldersByID, bookmarksByID} = processBookmarks(bookmarks);
  const handleColumnsCountChange = ({ target }) => {
      const {value} = target;

      setColumnsCount(value)
      document.documentElement.style.setProperty(
          '--columns-count',
          `${value}`
      );
  }

  return (
    <div className="App">
        //TODO MOVE TO COMPONENT IN FUTURE
        <input type="text" onChange={handleColumnsCountChange} value={columnsCount} placeholder={"number"}></input>
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
