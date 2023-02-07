import Head from "next/head"

import { TeamsLoader, LastPostsLoader } from "@/utils/helpers"

const Page = () => (
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
      <aside>
        <TeamsLoader />
      </aside>
      <main>
        <LastPostsLoader />
      </main>
    </div>
  </>
)

export default Page
