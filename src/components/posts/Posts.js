import React from "react"

import Post from "./Post"
import Empty from "./Empty"
import { PostsContext } from "lib/posts"

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
