import TabPanel from "@components/tabpanel"
import React from "react"
import ReactMarkdown from "react-markdown"

import Header from "./Header"
import Info from "./Info"
import KPIs from "./KPIs"

const useMarkdown = (source) =>
  source ? <ReactMarkdown className="markdown-body" source={source} /> : null

const Post = ({ post }) => {
  const tabs = [
    {
      content: useMarkdown(post["priorities"]),
      name: "Priorités",
    },
    { content: useMarkdown(post["term"]), name: "Echéances" },
    { content: useMarkdown(post["needs"]), name: "Besoins" },
  ]

  return (
    <div className="post">
      <div className="content">
        <Header post={post} />
        <div className="body">
          <KPIs post={post} />
          <TabPanel tabs={tabs} />
        </div>
        <div className="footer">
          <Info post={post} />
        </div>
      </div>
    </div>
  )
}
export default Post
