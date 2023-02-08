import { useRouter } from "next/router"

import TeamsLoader from "@/components/loaders/teams-loader"
import { TeamLoader } from "@/components/loaders/team-loader"
import TeamPostsLoader from "@/components/loaders/team-posts-loader"

const Page = () => {
  const { query } = useRouter()
  const slug = Array.isArray(query.slug) ? query.slug[0] : query.slug

  return (
    <div className="container">
      <aside>
        <TeamsLoader />
      </aside>
      <main className="flex-col">
        <TeamLoader slug={slug} />
        <TeamPostsLoader slug={slug} />
      </main>
    </div>
  )
}

export default Page
