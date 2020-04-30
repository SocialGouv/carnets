import fetch from "isomorphic-unfetch"

const user = process.env.GITHUB_USER
const token = process.env.GITHUB_TOKEN
const allowedOrganisation = process.env.GITHUB_ORGANIZATION

const auth = Buffer.from(`${user}:${token}`).toString("base64")

const options = {
  headers: {
    Authorization: `Basic ${auth}`,
  },
}

export const isAllowedToPost = (username) => {
  return fetch(
    `https://api.github.com/orgs/${allowedOrganisation}/members/${username}`,
    options
  )
    .then((r) => console.log(r.status) || r.status === 204)
    .catch(() => false)
}
