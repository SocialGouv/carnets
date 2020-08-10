import fetch from "isomorphic-unfetch"

const fetcher = (...args) => fetch(...args).then((response) => response.json())
export default fetcher
