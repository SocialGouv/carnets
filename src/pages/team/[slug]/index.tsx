import { SWRConfig } from "swr"
import { useRouter } from "next/router"
import type { GetStaticPaths, GetStaticProps } from "next"

import {
  getTeams,
  getPosts,
  TeamLoader,
  TeamsLoader,
  TeamPostsLoader,
} from "@/utils/helpers"

// export const getStaticPaths: GetStaticPaths = async () => {
//   const teams = await getTeams()
//   const paths = teams.map((team: Team) => `/team/${team.slug}`)

//   return {
//     paths,
//     fallback: false,
//   }
// }

// export const getStaticProps: GetStaticProps = async ({ params }) => {
//   const { slug } = params as { slug: string }
//   const teams = await getTeams()
//   const posts = await getPosts(slug)
//   const team = teams.find((team: Team) => team.slug === slug)

//   return {
//     props: {
//       fallback: {
//         teams,
//         [`team/${slug}`]: team,
//         [`posts/${slug}`]: posts,
//       },
//     },
//   }
// }

const Page = ({ fallback }: { fallback: Record<string, Team[] | Post[]> }) => {
  const { query } = useRouter()
  const slug = Array.isArray(query.slug) ? query.slug[0] : query.slug

  return (
    <div className="container">
      {/* <SWRConfig value={{ fallback }}> */}
      <aside>
        <TeamsLoader />
      </aside>
      <main className="flex-col">
        <TeamLoader slug={slug} />
        <TeamPostsLoader slug={slug} />
      </main>
      {/* </SWRConfig> */}
    </div>
  )
}

export default Page
