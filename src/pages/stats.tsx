import Head from "next/head"
import { NextPage } from "next"
import Chart from "@/components/chart"
import Statuses from "@/components/statuses"

const StatPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Carnets - Statistiques</title>
        <meta
          name="description"
          content="Carnets de bord des produits de la Fabrique Numérique des ministères sociaux."
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Carnets - Statistiques" />
        <meta
          property="og:url"
          content="https://carnets.fabrique.social.gouv.fr/stats"
        />
        <meta
          property="og:description"
          content="Carnets de bord des produits de la Fabrique Numérique des ministères sociaux."
        />
      </Head>
      <main className="container flex flex-col">
        <section className="p-10">
          <h2 className="pb-10">Nombre de publications par semaine</h2>
          <Chart />
        </section>
        <section className="p-10">
          <h2 className="pb-10">Statuts des produits</h2>
          <Statuses />
        </section>
      </main>
    </>
  )
}

export default StatPage
