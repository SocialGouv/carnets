import { getBlobContainer, readBlob } from "@lib/azure"
import { get, remove } from "@lib/files"
import { getUser } from "@lib/user"

export default async (req, res) => {
  const {
    query: { team, id },
  } = req

  try {
    if (req.method === "GET") {
      const file = await get(id)
      if (file) {
        const container = await getBlobContainer(team)
        const blob = await readBlob(container, file.blob_name, file.size)
        const buffer = new Buffer(blob, file.type)
        res.setHeader("X-Content-Type-Options", "nosniff")
        res.setHeader("Content-Transfer-Encoding", "binary")
        res.setHeader("Content-Type", "application/octet-stream")
        res.setHeader(
          "Content-Disposition",
          `attachment; filename="${encodeURIComponent(file.name)}"`
        )
        res.send(buffer)
      } else {
        res.status(404).send(null)
      }
    } else if (req.method === "DELETE") {
      const file = await get(id)
      const [, token] = await getUser(req, res)
      await remove(file, token)
      res.status(200).send(null)
    }
  } catch (error) {
    console.error(error)
    if (res.statusCode < 400) {
      res.status(500).send(null)
    }
  }
}
