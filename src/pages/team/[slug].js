import React from "react"
import Nav from "../../components/Nav"
import fetcher from "../../lib/fetcher"
import Teams from "../../components/Teams"
import Posts from "../../components/Posts"
import { TeamsContext } from "../../lib/teams"
import { PostsContext } from "../../lib/posts"

const Page = ({ teams, posts, slug }) => (
  <TeamsContext.Provider value={teams}>
    <Nav />
    <div className="content">
      <Teams slug={slug} />
      <PostsContext.Provider value={posts}>
        <Posts slug={slug} />
      </PostsContext.Provider>
    </div>
  </TeamsContext.Provider>
)

export async function getServerSideProps({ req, params }) {
  const { slug } = params
  const baseUrl = `http://localhost:${req.socket.localPort}`
  const teams = await fetcher(`${baseUrl}/api/teams`)
  const posts = await fetcher(`${baseUrl}/api/posts?slug=${slug}`)
  return { props: { teams, posts, slug } }
}

export default Page
