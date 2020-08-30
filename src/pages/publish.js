import Publish from "@components/publish"
import Auth0 from "@lib/auth0"
import fetcher from "@lib/fetcher"
import React from "react"

const Page = ({ post }) => (
  <div className="content">
    <Publish post={post} />
  </div>
)

export async function getServerSideProps({ req, res, query }) {
  const { id } = query
  const auth0 = Auth0()
  const user = await auth0.getSession(req)
  const baseUrl = `http://localhost:${req.socket.localPort}`

  if (!user) {
    res.writeHead(301, { Location: "/" })
    res.end()
  }

  if (id) {
    const [post] = await fetcher(`${baseUrl}/api/posts/${id}`)
    return { props: { post } }
  }

  return { props: {} }
}

export default Page
