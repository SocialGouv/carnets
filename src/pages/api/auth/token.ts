import { getSession } from "next-auth/client"
import type { NextApiRequest, NextApiResponse } from "next"

import { getJwt } from "@/utils/jwt"

export default async function token(req: NextApiRequest, res: NextApiResponse) {
  const session = await getSession({ req })

  const { user: { role, teams } = { role: "anonymous", teams: [] } } =
    session || {}

  const token = getJwt(role, teams)

  res.status(200).json({ token })
}
