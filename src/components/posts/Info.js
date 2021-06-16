import moment from "moment"
import React from "react"

moment.locale("fr")

const Publication = ({ date }) => {
  const now = moment()
  const publicationDate = moment(date)

  return now.diff(publicationDate, "days") + 1 > 15
    ? `le ${publicationDate.format("DD/MM/YYYY")}`
    : publicationDate.fromNow()
}

const Info = ({ post }) => (
  <div className="info">
    Publié <Publication date={post.created_at} />
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
