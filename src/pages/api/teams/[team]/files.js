import { list, register, uploadFiles } from "@lib/files"
import { getUser } from "@lib/user"
import formidable from "formidable"

export const config = { api: { bodyParser: false } }

export default async (req, res) => {
  try {
    const {
      query: { team },
    } = req

    if (req.method === "GET") {
      const files = await list(team)
      res.json(files)
    } else if (req.method === "POST") {
      const [, token] = await getUser(req, res)
      console.log("POST FILES token", token)
      const form = formidable({ multiples: true })
      form.parse(req, async (err, fields, files) => {
        console.log("POST FILES files", files)
        const uploadedFiles = await uploadFiles(files, team)
        uploadedFiles.forEach((file) => {
          file.team_slug = team
        })
        const registeredFiles = await register(uploadedFiles, token)
        return res.send(registeredFiles)
      })
    } else {
      res.status(405)
      throw new Error("Wrong method")
    }
  } catch (error) {
    console.error(error)
    res.status(500).json([])
  }
}
