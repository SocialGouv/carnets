import React from "react"
import Nav from "../components/Nav"
import fetcher from "../lib/fetcher"
import Teams from "../components/Teams"
import { TeamsContext } from "../lib/teams"
import { PostsContext } from "../lib/posts"
import Posts from "../components/posts/Posts"

const Page = ({ teams, posts }) => (
  <TeamsContext.Provider value={teams}>
    <Nav />
    <div className="content">
      <Teams />
      <div className="page">
        <PostsContext.Provider value={posts}>
          <Posts />
        </PostsContext.Provider>
      </div>
    </div>
  </TeamsContext.Provider>
)

export async function getServerSideProps({ req }) {
  const baseUrl = `http://localhost:${req.socket.localPort}`
  const teams = await fetcher(`${baseUrl}/api/teams`)
  const posts = await fetcher(`${baseUrl}/api/posts`)
  return { props: { teams, posts } }
}

export default Page
