import { get, upsert } from "@lib/followup"
import { getInfo } from "@lib/user"

export default async (req, res) => {
  try {
    const {
      body,
      query: { team },
    } = req

    if (req.method === "GET") {
      const followups = await get(team)
      res.json(followups)
    } else if (req.method === "PUT") {
      const [, token] = await getInfo(req, res)
      const followup = await upsert(body, team, token)
      res.json(followup)
    } else {
      res.status(405)
      throw new Error("Wrong method")
    }
  } catch (error) {
    console.error(error)
    res.status(500).json([])
  }
}
