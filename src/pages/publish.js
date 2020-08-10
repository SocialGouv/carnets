import Footer from "@components/Footer"
import Nav from "@components/nav/Nav"
import Publish from "@components/publish/Publish"
import Auth0 from "@lib/auth0"
import fetcher from "@lib/fetcher"
import { TeamsContext } from "@lib/teams"
import React from "react"

const Page = ({ teams, post }) => (
  <TeamsContext.Provider value={teams}>
    <Nav />
    <div className="content">
      <Publish post={post} />
    </div>
    <Footer />
  </TeamsContext.Provider>
)

export async function getServerSideProps({ req, res, query }) {
  const { id } = query
  const auth0 = Auth0()
  const user = await auth0.getSession(req)
  const baseUrl = `http://localhost:${req.socket.localPort}`
  const { teams } = await fetcher(`${baseUrl}/api/teams`)

  if (!user) {
    res.writeHead(301, { Location: "/" })
    res.end()
  }

  if (id) {
    const [post] = await fetcher(`${baseUrl}/api/posts/${id}`)
    return { props: { post, teams } }
  }

  return { props: { teams } }
}

export default Page
