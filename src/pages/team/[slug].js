import Files from "@components/files"
import Followup from "@components/followup"
import Intro from "@components/Intro"
import Posts from "@components/posts/Posts"
import TabPanel from "@components/tabpanel"
import Teams from "@components/teams/Teams"
import fetcher from "@lib/fetcher"
import { PostsContext } from "@lib/posts"
import React from "react"

const Page = ({ posts, files, followup, slug }) => {
  const tabs = [
    {
      content: (
        <PostsContext.Provider value={posts}>
          <Posts slug={slug} />
        </PostsContext.Provider>
      ),
      name: "Publications",
    },
    {
      content: <Followup slug={slug} followup={followup} />,
      name: "Suivi technique",
    },
    {
      content: <Files files={files} slug={slug} />,
      name: <span>Fichiers {files.length ? `(${files.length})` : ""}</span>,
    },
  ]

  return (
    <>
      <div className="content">
        <Teams slug={slug} />
        <div className="page">
          <Intro slug={slug} />
          <TabPanel tabs={tabs} />
        </div>
      </div>
    </>
  )
}

export async function getServerSideProps({ req, params }) {
  const { slug } = params
  const baseUrl = `http://localhost:${req.socket.localPort}`
  try {
    const posts = await fetcher(`${baseUrl}/api/teams/${slug}/posts`)
    const files = await fetcher(`${baseUrl}/api/teams/${slug}/files`)
    const followups = await fetcher(`${baseUrl}/api/teams/${slug}/followup`)
    return { props: { files, followup: followups[0] || {}, posts, slug } }
  } catch (error) {
    console.error(error)
    return { props: { files: [], followup: {}, posts: [], slug } }
  }
}

export default Page
