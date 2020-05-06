import React from "react"
import Link from "next/link"
import { Edit3 } from "react-feather"

const Post = ({ post }) => (
  <Link href={{ pathname: "/publish", query: { id: post.id } }}>
    <a className="edit button no-text">
      <Edit3 size={12} />
    </a>
  </Link>
)

export default Post
