import jwt from "jsonwebtoken"
import type { Role } from "next-auth"
import type { SignOptions } from "jsonwebtoken"

export function getJwt(role: Role = "anonymous", teams: string[] = []): string {
  const options: SignOptions = {
    algorithm: "RS512",
    expiresIn: "30d",
  }

  const teamsValue = `{${teams.map((team) => `"${team}"`).join(",")}}`

  const claim = {
    "https://hasura.io/jwt/claims": {
      "x-hasura-default-role": role,
      "x-hasura-allowed-roles": [role],
      "x-hasura-allowed-teams": teamsValue,
    },
  }

  const token = jwt.sign(claim, process.env.HASURA_JWT_KEY || "", options)
  // console.log("token", token)
  return token
}
