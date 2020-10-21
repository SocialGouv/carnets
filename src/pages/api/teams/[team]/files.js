import { list, registerFiles, uploadFiles } from "@lib/files"
import { getInfo } from "@lib/user"
import formidable from "formidable"

export const config = { api: { bodyParser: false } }

const getFiles = (req) => {
  const form = formidable({ multiples: true })

  return new Promise((resolve, reject) => {
    try {
      form.parse(req, (err, fields, files) => resolve(files))
    } catch (error) {
      console.error(error)
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
      const files = await getFiles(req, team, token)
      const uploadedFiles = await uploadFiles(files, team)
      uploadedFiles.forEach((file) => {
        file.team_slug = team
      })
      const registeredFiles = await registerFiles(uploadedFiles, token)
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
