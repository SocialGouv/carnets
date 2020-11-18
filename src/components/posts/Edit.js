import Link from "next/link"
import React from "react"
import { Edit3 } from "react-feather"

const Post = ({ post }) => (
  <Link href={{ pathname: "/publish", query: { id: post.id } }}>
    <a className="edit button no-text" title="éditer">
      <Edit3 size={12} />
    </a>
  </Link>
)

export default Post
