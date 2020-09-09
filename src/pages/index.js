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
  console.log("INDEX getServerSideProps")
  const baseUrl = `http://localhost:${req.socket.localPort}`
  try {
    const posts = await fetcher(`${baseUrl}/api/posts`)
    // const posts = (await fetcher(`${baseUrl}/api/posts`)).filter((post) =>
    //   slugs.includes(post.team_slug)
    // )
    return { props: { posts } }
  } catch (error) {
    console.log(error)
    return { props: { posts: [] } }
  }
}

export default Page
