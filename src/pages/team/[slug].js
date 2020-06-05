import React from "react"

import fetcher from "lib/fetcher"
import Nav from "components/nav/Nav"
import Intro from "components/Intro"
import Footer from "components/Footer"
import { TeamsContext } from "lib/teams"
import { PostsContext } from "lib/posts"
import { AdminsContext } from "lib/admins"
import Teams from "components/teams/Teams"
import Posts from "components/posts/Posts"

const Page = ({ teams, posts, slug, admins }) => (
  <TeamsContext.Provider value={teams}>
    <AdminsContext.Provider value={admins}>
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
    </AdminsContext.Provider>
  </TeamsContext.Provider>
)

export async function getServerSideProps({ req, params }) {
  const { slug } = params
  const baseUrl = `http://localhost:${req.socket.localPort}`
  const { teams, admins } = await fetcher(`${baseUrl}/api/teams`)
  const posts = await fetcher(`${baseUrl}/api/teams/${slug}/posts`)
  return { props: { teams, posts, slug, admins } }
}

export default Page
