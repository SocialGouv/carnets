import { list } from "lib/teams"

export default async (req, res) => {
  try {
    if (req.method === "GET") {
      const teams = await list()
      res.json(teams)
    } else {
      res.status(405)
      throw new Error("Wrong method")
    }
  } catch (error) {
    console.error(error)
    res.status(500).json([])
  }
}
