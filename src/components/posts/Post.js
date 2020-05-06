import React from "react"

import Tabs from "./Tabs"
import Info from "./Info"
import KPIs from "./KPIs"
import Header from "./Header"

const Post = ({ post }) => (
  <div className="post">
    <Header post={post} />
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
