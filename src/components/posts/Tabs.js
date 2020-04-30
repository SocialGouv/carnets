import React, { useState } from "react"
import ReactMarkdown from "react-markdown"

const Tabs = ({ post }) => {
  const [index, setIndex] = useState(0)
  const tabs = [
    { name: "Priorités", slug: "priorities" },
    { name: "Echéances", slug: "term" },
    { name: "Besoins", slug: "needs" },
  ]

  return (
    <>
      <div className="tabs">
        {tabs.map((tab, i) => (
          <div
            key={i}
            tabIndex={i}
            role="menuitem"
            onClick={() =>
              post[tab.slug] && post[tab.slug].length && setIndex(i)
            }
            onKeyPress={() =>
              post[tab.slug] && post[tab.slug].length && setIndex(i)
            }
            className={`${index === i ? "selected" : ""} ${
              !post[tab.slug] || !post[tab.slug].length ? "disabled" : ""
            }`}
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
