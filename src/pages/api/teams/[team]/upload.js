import { uploadFiles } from "@lib/uploadx"
import formidable from "formidable"

export const config = { api: { bodyParser: false } }

export default async (req, res) => {
  try {
    if (req.method === "POST") {
      const {
        query: { team },
      } = req

      const form = new formidable.IncomingForm()

      return await new Promise((resolve, reject) => {
        form.parse(req, async (err, fields, files) => {
          if (err) {
            console.error("add form.parse error", err)
            reject(err)
            return res.status(500).send({ success: false })
          }
          console.log("upload files", team, files)
          uploadFiles(files, team)
          resolve()
          return res.send(null)
        })
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
