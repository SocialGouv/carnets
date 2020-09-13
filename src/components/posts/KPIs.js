import React from "react"

const KPIs = ({ post }) => (
  <div className="kpis">
    {post.kpis &&
      post.kpis.map((kpi, i) => (
        <div key={i} className="kpi">
          <div className="value">{kpi.value}</div>
          <div className="name">{kpi.name}</div>
        </div>
      ))}
  </div>
)

export default KPIs
