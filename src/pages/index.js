import Posts from "@components/posts/Posts"
import Teams from "@components/teams/Teams"
import fetcher from "@lib/fetcher"
import { PostsContext } from "@lib/posts"
import React from "react"

const Page = ({ posts }) => (
  <>
    <div className="content">
      <Teams />
      <div className="page">
        <PostsContext.Provider value={posts}>
          <Posts />
        </PostsContext.Provider>
      </div>
    </div>
  </>
)

export async function getServerSideProps({ req }) {
  console.log("INDEX PAGE")
  const baseUrl = `http://localhost:${req.socket.localPort}`
  try {
    const posts = await fetcher(`${baseUrl}/api/posts`)
    return { props: { posts } }
  } catch (error) {
    console.error(error)
    return { props: { posts: [] } }
  }
}

export default Page
