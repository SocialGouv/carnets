import { AbortController } from "@azure/abort-controller"
import {
  BlobServiceClient,
  StorageSharedKeyCredential,
} from "@azure/storage-blob"
import fs from "fs"

const accountName = process.env.AZURE_ACCOUNT_NAME || ""
const accountKey = process.env.AZURE_ACCOUNT_KEY || ""

const createBlobService = () => {
  const sharedKeyCredential = new StorageSharedKeyCredential(
    accountName,
    accountKey
  )

  return new BlobServiceClient(
    `https://${accountName}.blob.core.windows.net`,
    sharedKeyCredential
  )
}

export const getBlobContainer = (containerName) => {
  const service = createBlobService()
  console.log("AZURE getBlobContainer", service)
  return service.getContainerClient(containerName)
}

export const createBlobContainer = async (containerName) => {
  const container = getBlobContainer(containerName)
  console.log("AZURE createBlobContainer", containerName, container)
  const exists = await container.exists()
  if (!exists) await container.create()
  return container
}

export const getBlobProperties = async (container, blobName) => {
  const client = container.getBlockBlobClient(blobName)
  return client.getProperties()
}

export const createBlob = async (container, blobName, filePath) => {
  const client = container.getBlockBlobClient(blobName)
  const stream = fs.createReadStream(filePath)
  const blockSize = 4 * 1024 * 1024
  const timeout = 30 * 60 * 1000
  const concurrency = 20
  const options = { abortSignal: AbortController.timeout(timeout) }
  try {
    return client.uploadStream(stream, blockSize, concurrency, options)
  } catch (err) {
    console.log("Error", err)
  }
}

export const readBlob = async (container, blobName, fileSize) => {
  const buffer = Buffer.alloc(fileSize)
  const client = container.getBlockBlobClient(blobName)
  const options = {
    abortSignal: AbortController.timeout(30 * 60 * 1000),
    blockSize: 4 * 1024 * 1024,
    concurrency: 20,
  }
  try {
    await client.downloadToBuffer(buffer, 0, undefined, options)
  } catch (err) {
    console.log("Error", err)
  }

  return buffer
}

export const streamBlob = async (container, blobName) => {
  const client = container.getBlockBlobClient(blobName)
  const downloadBlockBlobResponse = await client.download()
  return downloadBlockBlobResponse.readableStreamBody
}

export const deleteBlob = async (container, blobName) => {
  const client = container.getBlockBlobClient(blobName)
  try {
    return client.delete()
  } catch (err) {
    console.log("Error", err)
  }
}
