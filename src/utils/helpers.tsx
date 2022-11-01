import useSWR from "swr"

import Team from "@/components/team"
import fetcher from "@/utils/fetcher"
import Posts from "@/components/posts"
import Teams from "@/components/teams"
import useToken from "@/hooks/use-token"
import Loader from "@/components/common/loader"
import {
  getTeams as getTeamsQuery,
  getLastPosts as getLastPostsQuery,
  getTeamPosts as getTeamPostsQuery,
} from "@/queries/index"

export const getTeams = async () => {
  const data = await fetcher(getTeamsQuery)

  const {
    admins_and_teams: { teams },
  } = data.github_data[0]

  return teams
}

export const getPosts = async (slug?: string) => {
  const query = slug ? getTeamPostsQuery : getLastPostsQuery
  const { posts: data } = await fetcher(query, "", slug ? { slug } : undefined)

  const posts =
    data &&
    data.reduce(
      (acc: [Post], post: Post) => (post.team && acc.push(post), acc),
      []
    )

  return posts
}

const useTeams = () => {
  const { data, error, isValidating } = useSWR("teams", () =>
    fetcher(getTeamsQuery)
  )

  return Array.isArray(data)
    ? data
    : data?.github_data[0].admins_and_teams.teams
}

const usePosts = (slug?: string) => {
  const [token] = useToken()
  const { data, error, isValidating } = useSWR(
    slug ? `posts/${slug}` : "posts",
    () =>
      token
        ? fetcher(
            slug ? getTeamPostsQuery : getLastPostsQuery,
            token,
            slug && { slug }
          )
        : Promise.resolve(undefined)
  )

  if (error) throw new Error(`${error} (${token})`)
  return Array.isArray(data) ? data : data?.posts
}

export const TeamsLoader = () => {
  const teams = useTeams()

  if (!teams) return <Loader />
  if (!teams.length) return <div>Aucune équipe pour le moment...</div>

  return <Teams teams={teams} />
}

export const PostsLoader = ({ slug }: { slug?: string }) => {
  const posts = usePosts(slug)

  if (!posts) return <Loader size="lg" />
  if (!posts.length) return <div>Aucune publication pour le moment...</div>

  return <Posts posts={posts} />
}

export const TeamLoader = ({ slug }: { slug?: string }) => {
  const teams = useTeams()
  const team = teams && teams.find((team: Team) => team.slug === slug)

  return <Team team={team} />
}
