import { useSession } from "next-auth/client"

import Post from "@/components/post"
import fetcher from "@/utils/fetcher"
import useToken from "@/hooks/use-token"
import { deletePost as deletePostQuery } from "../queries"
import Masonry from "react-masonry-component"

const Posts = ({ posts }: { posts: Post[] }) => {
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
    <section>
      <Masonry elementType={"ul"}>
        {posts &&
          posts.map((post, i) => (
            <li key={i} className="post">
              <Post
                data={post}
                editable={isAuthorized(String(post.team_slug))}
                handlePostDeletion={() => deletePost(post.id)}
              />
            </li>
          ))}
      </Masonry>
    </section>
  )
}

export default Posts
