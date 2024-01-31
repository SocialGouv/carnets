import Chart from "@/components/chart";
import getStats from "@/actions/get-stats";
import Statuses from "@/components/statuses";

export default async function Page() {
  const { posts_stat, teams_status } = await getStats();

  return (
    <main>
      <section className="mt-12">
        <h2 className="fr-h2">Nombre de publications par semaine</h2>
        <div className="h-96 relative mb-12">
          <Chart stats={posts_stat} />
        </div>
      </section>
      <section>
        <h2 className="fr-h2">Statuts des produits</h2>
        <Statuses statuses={teams_status} />
      </section>
    </main>
  );
}
