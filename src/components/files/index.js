import React, { useCallback, useEffect, useState } from "react"

import Dropzone from "./Dropzone"
import List from "./List"
import upload from "src/pages/api/teams/[team]/upload"

const Files = ({ slug }) => {
  const [files, setFiles] = useState([])

  // const upload2 = useCallback(
  //   async (files) => {
  //     const data = new FormData()
  //     const filesToUpload = files.filter((file) => !file.id)
  //     filesToUpload.forEach(
  //       (file, i) => !file.id && data.append(`file-${i}`, file)
  //     )

  //     const options = {
  //       body: data,
  //       credentials: "include",
  //       method: "POST",
  //     }

  //     const response = await fetch(`/api/teams/${slug}/upload`, options)
  //     if (response.status === 200) {
  //       console.log("response", response)
  //       filesToUpload.forEach((file) => (file.loading = false))
  //     } else {
  //       console.error("ERROR:", response.statusText)
  //     }
  //   },
  //   [slug]
  // )

  const upload = (files) => {
    const data = new FormData()
    const filesToUpload = files.filter((file) => !file.id)
    filesToUpload.forEach(
      (file, i) => !file.id && data.append(`file-${i}`, file)
    )

    const options = {
      body: data,
      credentials: "include",
      method: "POST",
    }

    return fetch(`/api/teams/${slug}/upload`, options)
  }

  const onDrop = useCallback(
    async (acceptedFiles) => {
      console.log("onDrop", acceptedFiles)
      acceptedFiles.forEach((file) => (file.loading = true))
      setFiles([...files, ...acceptedFiles])
      const response = upload(acceptedFiles)
      if (response.status === 200) {
        console.log("response", response)
        files.forEach((file) => (file.loading = false))
        setFiles([...files])
      } else {
        console.error("ERROR:", response.statusText)
      }
    },
    [files]
  )

  // useEffect(() => {
  //   upload2(files)
  //   return () => {
  //     console.log("files cleanup")
  //   }
  // }, [files, upload2])

  return (
    <div className="files">
      <Dropzone onDrop={onDrop} />
      <List files={files} />
    </div>
  )
}

export default Files
