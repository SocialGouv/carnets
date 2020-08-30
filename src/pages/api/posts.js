import { create, list } from "@lib/posts"
import { getInfo } from "@lib/user"

export default async (req, res) => {
  try {
    if (req.method === "GET") {
      const posts = await list()
      res.json(posts)
    } else if (req.method === "POST") {
      const [nickname, accessToken] = await getInfo(req, res)
      req.body.author = nickname
      await create(req.body, accessToken)
      res.send(null)
    } else {
      res.status(405)
      throw new Error("Wrong method")
    }
  } catch (error) {
    console.error(error)
    res.status(500).json([])
  }
}
