import React from "react"
import Nav from "../components/Nav"
import fetcher from "../lib/fetcher"
import Teams from "../components/Teams"
import Posts from "../components/Posts"
import { TeamsContext } from "../lib/teams"
import { PostsContext } from "../lib/posts"

const Page = ({ teams, posts }) => (
  <TeamsContext.Provider value={teams}>
    <Nav />
    <Teams />
    <PostsContext.Provider value={posts}>
      <Posts />
    </PostsContext.Provider>
  </TeamsContext.Provider>
)

export async function getServerSideProps({ req }) {
  const baseUrl = `http://localhost:${req.socket.localPort}`
  const teams = await fetcher(`${baseUrl}/api/teams`)
  const posts = await fetcher(`${baseUrl}/api/posts`)
  return { props: { teams, posts } }
}

export default Page
