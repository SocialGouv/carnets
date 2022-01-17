import "chart.js/auto"
import { Chart as ReactChart } from "react-chartjs-2"
import { Chart } from "chart.js"
import type { ChartDataset } from "chart.js"
import ChartDataLabels from "chartjs-plugin-datalabels"

import useStat from "@/services/stat"

Chart.register(ChartDataLabels)

const BarChart = () => {
  const [{ posts_stat: data }] = useStat()

  console.log("DATA:", data)

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
      datalabels: {
        align: "top",
        anchor: "end",
        display: "auto",
        color: "#0000dd",
        font: { size: 10, weight: "bold" },
        padding: { top: 0, left: 2, right: 2, bottom: 0 },
      },
    },
  ] as ChartDataset[]

  const options = {
    responsive: true,
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          drawBorder: false,
        },
      },
    },
    elements: {
      bar: {
        backgroundColor: "#0000dd",
      },
    },
  }

  return <ReactChart type="bar" data={{ labels, datasets }} options={options} />
}

export default BarChart
