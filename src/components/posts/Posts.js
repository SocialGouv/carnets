import React from "react"
import Post from "./Post"
import Empty from "./Empty"
import { PostsContext } from "../../lib/posts"

const Posts = () => (
  <div className="posts">
    <PostsContext.Consumer>
      {posts => {
        return posts.length ? (
          posts.map((post, i) => <Post key={i} post={post} />)
        ) : (
          <Empty />
        )
      }}
    </PostsContext.Consumer>
  </div>
)

export default Posts
