import { getInfo } from "@lib/user"
import { get, update, remove } from "@lib/posts"

export default async (req, res) => {
  const {
    query: { id },
  } = req

  try {
    if (req.method === "GET") {
      const post = await get(id)
      res.json(post)
    } else if (req.method === "PUT") {
      const [nickname, accessToken] = await getInfo(req, res)
      req.body.author = nickname
      await update(req.body, accessToken)
      res.send(null)
    } else if (req.method === "DELETE") {
      const [, accessToken] = await getInfo(req, res)
      await remove(id, accessToken)
      res.send(null)
    } else {
      res.status(405)
      throw new Error("Wrong method")
    }
  } catch (error) {
    console.error(error)
    if (res.statusCode < 400) {
      res.status(500)
    }
  }
}
