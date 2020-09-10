import {
  createBlob,
  createBlobContainer,
  deleteBlob,
  getBlobContainer,
} from "@lib/azure"
import { fetch } from "@lib/hasura"
import { v4 as uuid } from "uuid"

export const get = async (id) => {
  const query = `
    query getFile($id: uuid) {
      files(where: {id: {_eq: $id}}) {
        id
        name
        size
        type
        team_slug
        blob_name
        created_at
      }
    }
  `

  const { files } = await fetch(query, { id })
  console.log("FILES get", files)
  return files[0]
}

export const remove = async (file, token) => {
  const { blob_name, id, team_slug } = file
  const container = await getBlobContainer(team_slug)
  await deleteBlob(container, blob_name)
  const query = `
      mutation deleteFile($id: uuid) {
        delete_files(where: {id: {_eq: $id}}) {
          affected_rows
        }
      }
    `

  return fetch(query, { id }, token)
}

export const list = async (slug) => {
  const query = `
    query getFiles($slug: String) {
      files(
        where: {team_slug: {_eq: $slug}},
        order_by: {created_at: desc}
      ) {
        id
        name
        size
        type
        team_slug
        blob_name
        created_at
      }
    }
  `

  const { files } = await fetch(query, { slug })
  console.log("FILES list", files)
  return files
}

export const register = async (files, token) => {
  console.log("REGISTER")
  const query = `
    mutation insert_files($objects: [files_insert_input!]!) {
      insert_files(objects: $objects) {
        returning {
          id
          name
          size
          type
          team_slug
          blob_name
          created_at
        }
      }
    }
  `

  try {
    const variables = { objects: files }
    const {
      insert_files: { returning: data },
    } = await fetch(query, variables, token)
    console.log("FILES register", data)
    return data
  } catch (error) {
    throw new Error(error)
  }
}

const uploadFile = async (container, file) => {
  const { name, path, size, type } = file
  const blob_name = uuid()
  await createBlob(container, blob_name, path)
  console.log("FILES uploadFile: BLOB CREATED !")
  return { blob_name, name, size, type }
}

export const uploadFiles = async (files, id) => {
  const keys = Object.keys(files)

  if (keys.length > 0) {
    const container = await createBlobContainer(id)
    console.log("FILES uploadFiles", container)
    return Promise.all(keys.map((key) => uploadFile(container, files[key])))
  }

  return []
}
