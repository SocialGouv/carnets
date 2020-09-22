import Files from "@components/files"
import Intro from "@components/Intro"
import Posts from "@components/posts/Posts"
import TabPanel from "@components/TabPanel"
import Teams from "@components/teams/Teams"
import fetcher from "@lib/fetcher"
import { PostsContext } from "@lib/posts"
import React from "react"

const Page = ({ posts, files, slug }) => {
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
    return { props: { files, posts, slug } }
  } catch (error) {
    console.log(error)
    return { props: { files: [], posts: [], slug } }
  }
}

export default Page
