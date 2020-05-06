import { getPosts } from "@lib/teams"

export default async (req, res) => {
  try {
    if (req.method === "GET") {
      const {
        query: { team },
      } = req
      const posts = await getPosts(team)
      res.json(posts)
    } else {
      res.status(405)
      throw new Error("Wrong method")
    }
  } catch (error) {
    console.error(error)
    res.status(500).json([])
  }
}
