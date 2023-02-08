import Posts from "@/components/posts"
import Loader from "@/components/common/loader"
import useLastPosts from "@/hooks/use-last-posts"

export const LastPostsLoader = () => {
  const posts = useLastPosts()

  if (!posts) return <Loader size="lg" />
  if (!posts.length) return <div>Aucune publication pour le moment...</div>

  return <Posts posts={posts} />
}

export default LastPostsLoader
