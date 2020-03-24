import React from "react"
import Tabs from "./Tabs"
import Edit from "./Edit"
import Info from "./Info"
import KPIs from "./KPIs"
import { TeamsContext } from "../../lib/teams"

const Post = ({ post }) => (
  <div className="post">
    <div className="header">
      <div className="mood">{post.mood}</div>
      <TeamsContext.Consumer>
        {teams =>
          teams.map(
            (team, i) =>
              team.slug === post.team_slug && <h3 key={i}>{team.name}</h3>
          )
        }
      </TeamsContext.Consumer>
      <Edit post={post} />
    </div>
    <div className="body">
      <KPIs post={post} />
      <Tabs post={post} />
    </div>
    <div className="footer">
      <Info post={post} />
    </div>
  </div>
)

export default Post
