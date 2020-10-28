import React from "react"

const Tabs = ({ tabs, activeTab, onChange }) => {
  return (
    <div className="tabs">
      {tabs.map((tab, i) => (
        <div
          key={i}
          tabIndex={i}
          role="menuitem"
          onClick={() => tab.content && onChange(i)}
          onKeyPress={() => tab.content && onChange(i)}
          className={`${i === activeTab ? "selected" : ""}${
            tab.content ? "" : " disabled"
          }`}
        >
          {tab.name}
        </div>
      ))}
    </div>
  )
}

export default Tabs
