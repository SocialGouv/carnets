import React from "react"

const Tabs = ({ tabs, activeTab }) => (
  <div className="panels">{tabs[activeTab].content}</div>
)

export default Tabs
