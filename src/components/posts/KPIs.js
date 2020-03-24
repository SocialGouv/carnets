import React from "react"

const KPIs = ({ post }) => (
  <div className="kpis">
    {post.kpis &&
      post.kpis.map((kpi, i) => (
        <h4 key={i} className="kpi">
          {kpi.value}
          <small className="name">{kpi.name}</small>
        </h4>
      ))}
  </div>
)

export default KPIs
