import Footer from "@components/Footer"
import Nav from "@components/nav/Nav"
import Posts from "@components/posts/Posts"
import Teams from "@components/teams/Teams"
import { AdminsContext } from "@lib/admins"
import fetcher from "@lib/fetcher"
import { PostsContext } from "@lib/posts"
import { TeamsContext } from "@lib/teams"
import React from "react"

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
  try {
    const { teams, admins } = await fetcher(`${baseUrl}/api/teams`)
    const slugs = teams.map(({ slug }) => slug)
    const posts = (await fetcher(`${baseUrl}/api/posts`)).filter((post) =>
      slugs.includes(post.team_slug)
    )
    return { props: { admins, posts, teams } }
  } catch (error) {
    console.log(error)
    return { props: { admins: [], posts: [], teams: [] } }
  }
}

export default Page
