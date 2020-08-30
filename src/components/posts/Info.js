import moment from "moment"
import React from "react"

moment.locale("fr")

const Info = ({ post }) => (
  <div className="info">
    Publié {moment(post.created_at).fromNow()}
    {post.author && (
      <>
        &nbsp;par&nbsp;
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={`https://github.com/${post.author}`}
        >
          {post.author}
        </a>
      </>
    )}
  </div>
)

export default Info
