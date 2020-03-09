import React from "react";
import styled from "styled-components";
// import Dimensions from "react-dimensions";
import { VictoryChart, VictoryBar, VictoryAxis } from "victory";

import ContainerDimensions from "react-container-dimensions";

const PostsStat = ({ data /*, containerWidth*/ }) => {
  const weeks = Array.from(Array(52), (e, i) => i + 1);

  const styles = {
    bar: {
      data: { fill: "#54677A" }
    },
    axis: {
      grid: { stroke: "#ccc" },
      axis: { stroke: "#54677A" },
      ticks: { stroke: "#54677A", size: 5 },
      axisLabel: { fontSize: 16, padding: 25, stroke: "#54677A" },
      tickLabels: { fontSize: 12, padding: 4, stroke: "#54677A" }
    }
  };

  return (
    <Wrapper>
      <h4>Nombre de publications par semaine</h4>
      <ContainerDimensions>
        {({ width, height }) => (
          <VictoryChart
            width={width || 0}
            height={height || 0}
            domainPadding={{ x: 20, y: 0 }}
            padding={{ top: 20, bottom: 60, left: 40, right: 40 }}
          >
            <VictoryAxis
              dependentAxis
              style={styles.axis}
              label="Publications"
              tickFormat={t => Math.round(t)}
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
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 200px;
`;

export default PostsStat;
