import React from "react"

import fetcher from "../../lib/fetcher"
import Nav from "../../components/nav/Nav"
import Intro from "../../components/Intro"
import Footer from "../../components/Footer"
import { TeamsContext } from "../../lib/teams"
import { PostsContext } from "../../lib/posts"
import Teams from "../../components/teams/Teams"
import Posts from "../../components/posts/Posts"

const Page = ({ teams, posts, slug }) => (
  <TeamsContext.Provider value={teams}>
    <Nav />
    <div className="content">
      <Teams slug={slug} />
      <div className="page">
        <Intro slug={slug} />
        <PostsContext.Provider value={posts}>
          <Posts slug={slug} />
        </PostsContext.Provider>
      </div>
    </div>
    <Footer />
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
