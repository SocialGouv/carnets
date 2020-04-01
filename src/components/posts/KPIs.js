import React from "react"

const KPIs = ({ post }) => (
  <div className="kpis">
    {post.kpis &&
      post.kpis.map((kpi, i) => (
        <div key={i} className="kpi">
          {/*{kpi.value}*/}
          <div className="value">{kpi.value}</div>
          <div className="name">{kpi.name}</div>
          {/*<div className="value">
            <p>{kpi.value}</p>
          </div>
          <small className="name">{kpi.name}</small>*/}
        </div>
      ))}
  </div>
)

export default KPIs
