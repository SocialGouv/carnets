import { useTheme } from "@lib/theme"
import React from "react"
import ContainerDimensions from "react-container-dimensions"
import { VictoryAxis, VictoryBar, VictoryChart } from "victory"

const Posts = ({ data }) => {
  const { theme } = useTheme()
  const weeks = Array.from(Array(52), (e, i) => i + 1)
  const primaryColor = theme === "light" ? "#212121" : "#b3b3b3"
  const secondaryColor = theme === "light" ? "#eee" : "#424242"

  const styles = {
    axis: {
      axis: { stroke: primaryColor },
      axisLabel: {
        fontSize: 16,
        fontWeight: "lighter",
        padding: 25,
        stroke: primaryColor,
      },
      grid: { stroke: secondaryColor },
      tickLabels: {
        fontSize: 12,
        fontWeight: "lighter",
        padding: 4,
        stroke: primaryColor,
      },
      ticks: { size: 5, stroke: primaryColor },
    },
    bar: {
      data: { fill: primaryColor },
    },
  }

  return (
    <div className="posts">
      <h2>Nombre de publications par semaine</h2>
      <div className="chart">
        <ContainerDimensions>
          {({ width, height }) => (
            <VictoryChart
              width={width || 0}
              height={height || 0}
              domainPadding={{ x: 20, y: 0 }}
              padding={{ bottom: 40, left: 40, right: 0, top: 10 }}
            >
              <VictoryAxis
                dependentAxis
                style={styles.axis}
                label="Publications"
                tickFormat={(t) => Math.round(t)}
              />
              <VictoryAxis
                label="Semaines"
                tickValues={weeks}
                style={styles.axis}
              />
              <VictoryBar
                x="week"
                y="count"
                data={data}
                barWidth={10}
                style={styles.bar}
              />
            </VictoryChart>
          )}
        </ContainerDimensions>
      </div>
    </div>
  )
}

export default Posts
