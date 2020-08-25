import React from "react"

const Tabs = ({ tabs, activeTab }) => {
  return (
    <div className="panels">
      {tabs.map((tab, i) => (
        <div key={i} className={activeTab === i ? "selected" : ""}>
          {tab.content}
        </div>
      ))}
    </div>
  )
}

export default Tabs
