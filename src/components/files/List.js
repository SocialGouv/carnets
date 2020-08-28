import bytes from "bytes"
import React from "react"
import { CircleSpinner } from "react-spinners-kit"

const List = ({ files = [] }) => {
  return (
    <div className="files">
      {files.map((file, i) => (
        <div key={i} className="file">
          <CircleSpinner size={12} color="darkblue" loading={file.loading} />
          {file.name} <span>({bytes(file.size)})</span>
        </div>
      ))}
    </div>
  )
}

export default List
