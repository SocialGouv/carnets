import { list, registerFiles, uploadFiles } from "@lib/files"
import { getInfo } from "@lib/user"
import formidable from "formidable"

export const config = { api: { bodyParser: false } }

function msleep(n) {
  Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, n)
}
function sleep(n) {
  msleep(n * 1000)
}

const getFiles = (req) => {
  const form = formidable({ multiples: true })
  sleep(3)

  return new Promise((resolve, reject) => {
    try {
      sleep(3)
      console.log("parse form")
      form.parse(req, (err, fields, files) => resolve(files))
    } catch (error) {
      console.log(error)
      reject([])
    }
  })
}

export default async (req, res) => {
  try {
    const {
      query: { team },
    } = req

    if (req.method === "GET") {
      const files = await list(team)
      res.json(files)
    } else if (req.method === "POST") {
      const [, token] = await getInfo(req, res)
      console.log("--> 1 token", token)
      const files = await getFiles(req, team, token)
      console.log("--> 2 files", files)
      const uploadedFiles = await uploadFiles(files, team)
      console.log("--> 3 uploadedFiles", uploadedFiles)
      uploadedFiles.forEach((file) => {
        file.team_slug = team
      })
      const registeredFiles = await registerFiles(uploadedFiles, token)
      console.log("--> 4 registeredFiles", registeredFiles)
      return res.json(registeredFiles)
    } else {
      res.status(405)
      throw new Error("Wrong method")
    }
  } catch (error) {
    console.error(error)
    res.status(500).json([])
  }
}
