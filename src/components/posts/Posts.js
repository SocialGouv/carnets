import React from "react"
import Post from "./Post"
import { PostsContext } from "../../lib/posts"

const Posts = () => (
  <div className="posts">
    <PostsContext.Consumer>
      {posts => posts.map((post, i) => <Post key={i} post={post} />)}
    </PostsContext.Consumer>
  </div>
)

export default Posts
