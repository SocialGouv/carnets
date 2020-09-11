import { sync } from "@lib/teams"
import crypto from "crypto"

export default async (req, res) => {
  try {
    if (req.method === "POST") {
      if (isGithub(req)) {
        await sync({ role: "webhook" })
        res.status(200)
      } else {
        res.status(401)
        throw new Error("Not authorized")
      }
      res.send(null)
    } else {
      res.status(405)
      throw new Error("Wrong method")
    }
  } catch (error) {
    if (res.statusCode < 400) res.status(500)
  }
  res.send(null)
}

const isGithub = (req) => {
  const payload = JSON.stringify(req.body)
  const sig = req.headers["x-hub-signature"] || ""
  const hmac = crypto.createHmac("sha1", process.env.GITHUB_WEBHOOKS_TOKEN)
  const digest = Buffer.from(
    "sha1=" + hmac.update(payload).digest("hex"),
    "utf8"
  )
  const checksum = Buffer.from(sig, "utf8")
  return !(
    checksum.length !== digest.length ||
    !crypto.timingSafeEqual(digest, checksum)
  )
}
