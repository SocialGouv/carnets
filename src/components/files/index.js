import { useUser } from "@lib/user"
import React, { useCallback, useEffect, useState } from "react"

import Dropzone from "./Dropzone"
import List from "./List"

const Files = ({ files = [], slug }) => {
  const user = useUser()
  const [allFiles, setFiles] = useState()
  const isAllowed = user && (user.isAdmin || user.teams?.includes(slug))

  const onDrop = useCallback(
    async (acceptedFiles) => {
      const data = new FormData()
      acceptedFiles.forEach(
        (file, i) => (
          (file.loading = true), !file.id && data.append(`file-${i}`, file)
        )
      )
      setFiles([...allFiles, ...acceptedFiles])
      const options = { body: data, method: "POST" }
      const response = await fetch(`/api/teams/${slug}/files`, options)
      if (response.status === 200) {
        const data = await response.json()
        setFiles([...allFiles, ...data])
      } else {
        console.error("ERROR:", response.statusText)
      }
    },
    [allFiles, slug]
  )

  useEffect(() => setFiles(files), [files])

  return (
    <div className="files">
      {isAllowed && <Dropzone onDrop={onDrop} />}
      <List files={allFiles} slug={slug} />
    </div>
  )
}

export default Files
