import { PostsContext } from "@lib/posts"
import React from "react"

import Empty from "./Empty"
import Post from "./Post"

const Posts = () => (
  <PostsContext.Consumer>
    {(posts) => {
      return posts && posts.length ? (
        <div className="posts">
          {posts.map((post, i) => (
            <Post key={i} post={post} />
          ))}
        </div>
      ) : (
        <Empty />
      )
    }}
  </PostsContext.Consumer>
)

export default Posts
