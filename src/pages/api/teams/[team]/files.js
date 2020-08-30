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
      const form = formidable({ multiples: true })
      form.parse(req, async (err, fields, files) => {
        const uploadedFiles = await uploadFiles(files, team)
        uploadedFiles.forEach((file) => {
          file.team_slug = team
        })
        const registeredFiles = await register(uploadedFiles, token)
        return res.send(registeredFiles)
      })
      // const form = new formidable.IncomingForm()

      // return await new Promise((resolve, reject) => {
      //   form.parse(req, async (err, fields, files) => {
      //     if (err) {
      //       console.error("add form.parse error", err)
      //       reject(err)
      //       return res.status(500).send({ success: false })
      //     }
      //     const result = await uploadFiles(files, team)
      //     const records = result.map((record) => ({
      //       blob_name: record.blob_name,
      //       name: record.name,
      //       size: record.size,
      //       team_slug: team,
      //       type: record.type,
      //     }))
      //     const toto = await register(records, accessToken)
      //     resolve()
      //     return res.send(toto)
      //   })
      // })
    } else {
      res.status(405)
      throw new Error("Wrong method")
    }
  } catch (error) {
    console.error(error)
    res.status(500).json([])
  }
}
