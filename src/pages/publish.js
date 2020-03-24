import React from "react"
import auth0 from "../lib/auth0"
import fetcher from "../lib/fetcher"
import Nav from "../components/nav/Nav"
import Footer from "../components/Footer"
import { TeamsContext } from "../lib/teams"
import Publish from "../components/publish/Publish"

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
  const user = await auth0.getSession(req)
  // console.log("user:", user, res)
  if (!user) {
    console.log("REDIRECT")
    res.writeHead(301, { Location: "/" })
    res.end()
  }

  console.log("GET DATA")
  const { id } = query
  const baseUrl = `http://localhost:${req.socket.localPort}`
  const teams = await fetcher(`${baseUrl}/api/teams`)
  if (id) {
    const [post] = await fetcher(`${baseUrl}/api/posts?id=${id}`)
    console.log("getServerSideProps", id, teams, post)
    return { props: { teams, post } }
  }
  // console.log("getServerSideProps", id, teams)
  return { props: { teams } }
}

export default Page
