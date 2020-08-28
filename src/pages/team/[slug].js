import Files from "@components/files"
import Footer from "@components/Footer"
import Intro from "@components/Intro"
import Nav from "@components/nav/Nav"
import Posts from "@components/posts/Posts"
import TabPanel from "@components/TabPanel"
import Teams from "@components/teams/Teams"
import { AdminsContext } from "@lib/admins"
import fetcher from "@lib/fetcher"
import { PostsContext } from "@lib/posts"
import { TeamsContext } from "@lib/teams"
import React from "react"

const Page = ({ teams, posts, slug, admins }) => {
  const tabs = [
    {
      content: (
        <div>
          <Files slug={slug} />
        </div>
      ),
      name: "Informations",
    },
    {
      content: (
        <PostsContext.Provider value={posts}>
          <Posts slug={slug} />
        </PostsContext.Provider>
      ),
      name: "Publications",
    },
  ]

  return (
    <TeamsContext.Provider value={teams}>
      <AdminsContext.Provider value={admins}>
        <Nav />
        <div className="content">
          <Teams slug={slug} />
          <div className="page">
            <Intro slug={slug} />
            <TabPanel tabs={tabs} />
          </div>
        </div>
        <Footer />
      </AdminsContext.Provider>
    </TeamsContext.Provider>
  )
}

export async function getServerSideProps({ req, params }) {
  const { slug } = params
  const baseUrl = `http://localhost:${req.socket.localPort}`
  try {
    const { teams, admins } = await fetcher(`${baseUrl}/api/teams`)
    const posts = await fetcher(`${baseUrl}/api/teams/${slug}/posts`)
    return { props: { admins, posts, slug, teams } }
  } catch (error) {
    console.log(error)
    return { props: { admins: [], posts: [], slug, teams: [] } }
  }
}

export default Page
