import React from "react"

import File from "./File"

const List = ({ files = [], slug }) => {
  return (
    <div className="list">
      {files.map((file, i) => (
        <div key={i} className="item">
          <File file={file} slug={slug} />
        </div>
      ))}
    </div>
  )
}

export default List
