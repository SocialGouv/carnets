import Posts from "@/components/posts"
import Loader from "@/components/common/loader"
import useTeamPosts from "@/hooks/use-teams-posts"

export const TeamPostsLoader = ({ slug }: { slug?: string }) => {
  const posts = useTeamPosts(slug)

  if (!posts) return <Loader size="lg" />
  if (!posts.length) return <div>Aucune publication pour le moment...</div>

  return <Posts posts={posts} />
}

export default TeamPostsLoader
