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

const useLastPosts = () => {
  const [token] = useToken()
  const { data, error, isValidating } = useSWR(token ? "posts" : null, () =>
    fetcher(getLastPostsQuery, token)
  )

  if (error) throw new Error(`${error} (${token})`)
  return Array.isArray(data) ? data : data?.posts
}

const useTeamPosts = (slug?: string) => {
  const [token] = useToken()
  console.log("useTeamPosts", token, slug)
  const { data, error, isValidating } = useSWR(
    slug ? `posts/${slug}` : null,
    () =>
      token
        ? fetcher(getTeamPostsQuery, token, { slug })
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

export const TeamPostsLoader = ({ slug }: { slug?: string }) => {
  const posts = useTeamPosts(slug)

  if (!posts) return <Loader size="lg" />
  if (!posts.length) return <div>Aucune publication pour le moment...</div>

  return <Posts posts={posts} />
}

export const LastPostsLoader = () => {
  const posts = useLastPosts()

  if (!posts) return <Loader size="lg" />
  if (!posts.length) return <div>Aucune publication pour le moment...</div>

  return <Posts posts={posts} />
}

export const TeamLoader = ({ slug }: { slug?: string }) => {
  const teams = useTeams()
  const team = teams && teams.find((team: Team) => team.slug === slug)

  return <Team team={team} />
}
