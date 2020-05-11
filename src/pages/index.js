import React from "react"

import fetcher from "@lib/fetcher"
import Nav from "@components/nav/Nav"
import Footer from "@components/Footer"
import { TeamsContext } from "@lib/teams"
import { PostsContext } from "@lib/posts"
import { AdminsContext } from "@lib/admins"
import Teams from "@components/teams/Teams"
import Posts from "@components/posts/Posts"

const Page = ({ teams, posts, admins }) => (
  <TeamsContext.Provider value={teams}>
    <AdminsContext.Provider value={admins}>
      <Nav />
      <div className="content">
        <Teams />
        <div className="page">
          <PostsContext.Provider value={posts}>
            <Posts />
          </PostsContext.Provider>
        </div>
      </div>
      <Footer />
    </AdminsContext.Provider>
  </TeamsContext.Provider>
)

export async function getServerSideProps({ req }) {
  const baseUrl = `http://localhost:${req.socket.localPort}`
  const { teams, admins } = await fetcher(`${baseUrl}/api/teams`)
  const slugs = teams.map(({ slug }) => slug)
  const posts = (await fetcher(`${baseUrl}/api/posts`)).filter((post) =>
    slugs.includes(post.team_slug)
  )
  return { props: { teams, posts, admins } }
}

export default Page
