import React from "react"
import fetcher from "../lib/fetcher"
import Nav from "../components/nav/Nav"
import { TeamsContext } from "../lib/teams"
import Publish from "../components/publish/Publish"

const Page = ({ teams, post }) => (
  <TeamsContext.Provider value={teams}>
    <Nav />
    <div className="content">
      <Publish post={post} />
    </div>
  </TeamsContext.Provider>
)

export async function getServerSideProps({ req, query }) {
  const { id } = query
  const baseUrl = `http://localhost:${req.socket.localPort}`
  const teams = await fetcher(`${baseUrl}/api/teams`)
  if (id) {
    const [post] = await fetcher(`${baseUrl}/api/posts?id=${id}`)
    console.log("getServerSideProps", id, teams, post)
    return { props: { teams, post } }
  }
  console.log("getServerSideProps", id, teams)
  return { props: { teams } }
}

export default Page
