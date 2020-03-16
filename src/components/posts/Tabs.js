import React, { useState } from "react"
import ReactMarkdown from "react-markdown"

const Tabs = ({ post }) => {
  const [index, setIndex] = useState(0)
  const tabs = [
    { name: "Piorités", slug: "priorities" },
    { name: "Besoins", slug: "needs" },
    { name: "Echéances", slug: "term" }
  ]

  return (
    <>
      <div className="tabs">
        {tabs.map((tab, i) => (
          <div
            key={i}
            tabIndex={i}
            role="menuitem"
            onClick={() => setIndex(i)}
            onKeyPress={() => setIndex(i)}
            className={index === i ? "selected" : ""}
          >
            {tab.name}
          </div>
        ))}
      </div>
      <div className="panels">
        {tabs.map((tab, i) => (
          <div
            key={i}
            className={`markdown-body ${index === i ? "selected" : ""}`}
          >
            <ReactMarkdown source={post[tab.slug]} />
          </div>
        ))}
      </div>
    </>
  )
}

export default Tabs
