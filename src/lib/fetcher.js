import fetch from "isomorphic-unfetch"

const fetcher = (...args) =>
  fetch(...args).then((response) => {
    if (response.status < 400) return response.json()
    else throw new Error(response.statusText)
  })

export default fetcher
