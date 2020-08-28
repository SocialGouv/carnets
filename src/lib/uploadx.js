import { createBlob, createBlobContainer } from "./azurex"

const uploadFile = async (container, file) => {
  const { name, path } = file
  const blobName = `blob-${new Date().getTime()}`
  await createBlob(container, blobName, path)
  return { blobName, name }
}

export const uploadFiles = async (files, id) => {
  const keys = Object.keys(files)

  if (keys.length > 0) {
    const container = await createBlobContainer(id)
    return Promise.all(keys.map((key) => uploadFile(container, files[key])))
  }

  return []
}
