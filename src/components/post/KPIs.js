import React from "react";
import styled from "styled-components";

const KPIs = ({ kpis }) => (
  <Wrapper className="kpis d-flex">
    {kpis &&
      kpis.map((kpi, i) => (
        <React.Fragment key={i}>
          {kpi.name && kpi.value && (
            <div className="kpi d-flex flex-column">
              <div className="value d-flex flex-fill justify-content-center">
                {kpi.value}
              </div>
              <div className="name d-flex flex-fill justify-content-center">
                {kpi.name}
              </div>
            </div>
          )}
        </React.Fragment>
      ))}
  </Wrapper>
);

const Wrapper = styled.div`
  .kpi {
    flex: 1;
    padding: 5px;
    border-right: 1px solid rgba(28, 28, 28, 0.125);
  }

  .kpi:last-child {
    border-right: none;
  }

  .kpi .name {
    font-size: 0.8em;
    text-align: center;
  }

  .kpi .value {
    color: #8bad95;
    font-size: 1.6em;
    font-weight: bold;
  }
`;

export default KPIs;
