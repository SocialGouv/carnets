"use client";

import {
  Tooltip,
  BarElement,
  LinearScale,
  PointElement,
  CategoryScale,
  Chart as ChartJS,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import type { PostsStat } from "@/actions/get-stats";
import { format, setISOWeek, startOfWeek } from "date-fns";

ChartJS.register(Tooltip, BarElement, LinearScale, PointElement, CategoryScale);

export default function Chart({ stats }: { stats: PostsStat[] }) {
  const data = stats.reduce(
    (data, { count, week, year }) => {
      const date = startOfWeek(setISOWeek(new Date(year, 0, 1), week), {
        weekStartsOn: 1,
      });

      data.values.push(count);
      data.labels.push(format(date, "ww - yyyy"));

      return data;
    },
    { labels: [], values: [] } as { labels: string[]; values: number[] },
  );

  return (
    <Bar
      options={{
        maintainAspectRatio: false,
        scales: {
          x: {
            grid: {
              display: false,
            },
          },
        },
      }}
      data={{
        labels: data.labels,
        datasets: [
          {
            data: data.values,
            backgroundColor: "#8585F6",
          },
        ],
      }}
    />
  );
}
