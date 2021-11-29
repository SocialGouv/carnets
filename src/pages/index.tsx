import { SWRConfig } from "swr"
import type { GetStaticProps } from "next"

import { getTeams, getPosts, TeamsLoader, PostsLoader } from "@/utils/helpers"

export const getStaticProps: GetStaticProps = async () => {
  const teams = await getTeams()
  const posts = await getPosts()

  return {
    props: {
      fallback: { teams, posts },
    },
  }
}

const Page = ({
  fallback,
}: {
  fallback: Record<"teams" | "posts", Team[] | Post[]>
}) => (
  <div className="container">
    <SWRConfig value={{ fallback }}>
      <aside>
        <TeamsLoader />
      </aside>
      <main className="flex flex-1">
        <PostsLoader />
      </main>
    </SWRConfig>
  </div>
)

export default Page
