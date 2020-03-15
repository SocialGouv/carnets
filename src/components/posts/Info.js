import React from "react"
import moment from "moment"

moment.locale("fr")

const Info = ({ post }) => (
  <div className="info">
    Publié {moment(post.created_at).fromNow()}&nbsp;par&nbsp;
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={`https://github.com/${post.author || "plop"}`}
    >
      {post.author || "plop"}
    </a>
  </div>
)

export default Info
