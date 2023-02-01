import Head from "next/head"
import { SWRConfig } from "swr"
// import type { GetStaticProps } from "next"

import {
  getTeams,
  getPosts,
  TeamsLoader,
  LastPostsLoader,
} from "@/utils/helpers"

// export const getStaticProps: GetStaticProps = async () => {
//   const teams = await getTeams()
//   const posts = await getPosts()

//   return {
//     props: {
//       fallback: { teams, posts },
//     },
//   }
// }

const Page = ({
  fallback,
}: {
  fallback: Record<"teams" | "posts", Team[] | Post[]>
}) => (
  <>
    <Head>
      <title>Carnets</title>
      <meta
        name="description"
        content="Carnets de bord des produits de la Fabrique Numérique des ministères sociaux."
      />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Carnets" />
      <meta
        property="og:url"
        content="https://carnets.fabrique.social.gouv.fr/"
      />
      <meta
        property="og:description"
        content="Carnets de bord des produits de la Fabrique Numérique des ministères sociaux."
      />
    </Head>
    <div className="container">
      {/* <SWRConfig value={{ fallback }}> */}
      <aside>
        <TeamsLoader />
      </aside>
      <main>
        <LastPostsLoader />
      </main>
      {/* </SWRConfig> */}
    </div>
  </>
)

export default Page
