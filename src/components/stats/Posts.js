import React from "react"
import ContainerDimensions from "react-container-dimensions"
import { VictoryChart, VictoryBar, VictoryAxis } from "victory"

const Posts = ({ data }) => {
  const weeks = Array.from(Array(52), (e, i) => i + 1)

  const styles = {
    bar: {
      data: { fill: "#54677A" },
    },
    axis: {
      grid: { stroke: "#eee" },
      axis: { stroke: "#54677A" },
      ticks: { stroke: "#54677A", size: 5 },
      axisLabel: { fontSize: 16, padding: 25, stroke: "#54677A" },
      tickLabels: { fontSize: 12, padding: 4, stroke: "#54677A" },
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
              padding={{ top: 10, bottom: 40, left: 40, right: 40 }}
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
