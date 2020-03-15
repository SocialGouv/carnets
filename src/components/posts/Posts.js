import React from "react"
import Post from "./Post"
import { PostsContext } from "../../lib/posts"
import { TeamsContext } from "../../lib/teams"

const Posts = ({ slug }) => (
  <div className="posts">
    <TeamsContext.Consumer>
      {teams =>
        teams.map(
          (team, i) =>
            team.slug === slug && (
              <div key={i} className="team">
                <div>{team.name}</div>
                <div>{team.description}</div>
              </div>
            )
        )
      }
    </TeamsContext.Consumer>
    <PostsContext.Consumer>
      {posts => posts.map((post, i) => <Post key={i} post={post} />)}
    </PostsContext.Consumer>
  </div>
)

export default Posts
