import { useRouter } from "next/router"
import { useSession } from "next-auth/client"

import Post from "@/components/post"
import fetcher from "@/utils/fetcher"
import useToken from "@/services/token"
import { deletePost as deletePostQuery } from "../queries"

const Posts = ({ posts }: { posts: Post[] }) => {
  const {
    query: { slug },
  } = useRouter()

  const [token] = useToken()
  const [session] = useSession()

  const isAuthorized = (slug: string) =>
    session?.user.role === "admin" || session?.user.teams.includes(slug)
      ? true
      : false

  const deletePost = async (id: string | undefined) => {
    if (id) {
      await fetcher(deletePostQuery, token, { id })
    }
  }

  return (
    <section className="posts">
      <ul className="list">
        {posts &&
          posts.map((post, i) => (
            <li key={i}>
              <Post
                {...post}
                editable={isAuthorized(String(post.team_slug))}
                handlePostDeletion={() => deletePost(post.id)}
              />
            </li>
          ))}
      </ul>
    </section>
  )
}

export default Posts
