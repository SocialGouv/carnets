import React from "react"
import Link from "next/link"
import { Edit3 } from "react-feather"

import { UserContext } from "../../lib/user"

const Post = ({ post }) => (
  <UserContext.Consumer>
    {(user) =>
      user?.nickname === post.author && (
        <Link href={{ pathname: "/publish", query: { id: post.id } }}>
          <a className="edit button">
            <Edit3 size={12} />
            Editer
          </a>
        </Link>
      )
    }
  </UserContext.Consumer>
)

export default Post
