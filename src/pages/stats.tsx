import { NextPage } from "next"
import Chart from "@/components/chart"
import Statuses from "@/components/statuses"

const StatPage: NextPage = () => {
  return (
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
  )
}

export default StatPage
