import "chart.js/auto"
import { Chart } from "react-chartjs-2"
import type { ChartDataset } from "chart.js"

import useStat from "@/services/stat"

const BarChart = () => {
  const [{ posts_stat: data }] = useStat()

  const labels =
    data &&
    data.map(
      ({ week, year }: { week: number; year: number }) => `${week}-${year}`
    )

  const datasets = [
    {
      type: "bar",
      label: "Nombre de publications",
      data: data && data.map(({ count }: { count: number }) => count),
    },
  ] as ChartDataset[]

  const options = {
    responsive: true,
  }

  return <Chart type="line" data={{ labels, datasets }} options={options} />
}

export default BarChart
