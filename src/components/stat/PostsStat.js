import React from "react";
import styled from "styled-components";
import Dimensions from "react-dimensions";
import { VictoryChart, VictoryBar, VictoryAxis } from "victory";

const PostsStat = ({ data, containerWidth }) => {
  const weeks = Array.from(Array(52), (e, i) => i + 1);

  const styles = {
    bar: {
      data: { fill: "#54677A" }
    },
    axis: {
      grid: { stroke: "#ccc" },
      axis: { stroke: "#54677A" },
      ticks: { stroke: "#54677A", size: 5 },
      axisLabel: { fontSize: 16, padding: 25 },
      tickLabels: { fontSize: 12, padding: 4 }
    }
  };

  return (
    <Wrapper>
      <h4>Nombre de publications par semaine</h4>
      <VictoryChart
        height={200}
        width={containerWidth}
        domainPadding={{ x: 20, y: 0 }}
        padding={{ top: 20, bottom: 60, left: 40, right: 40 }}
      >
        <VictoryAxis dependentAxis style={styles.axis} label="Publications" />
        <VictoryAxis label="Semaines" tickValues={weeks} style={styles.axis} />
        <VictoryBar
          x="week"
          y="count"
          data={data}
          barWidth={10}
          style={styles.bar}
        />
      </VictoryChart>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 200px;
  /* background-color: pink; */

  h4 {
    /* margin-bottom: 20px; */
  }
`;

export default Dimensions()(PostsStat);
