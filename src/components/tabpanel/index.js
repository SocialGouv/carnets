import React, { useState } from "react"

import Panels from "./Panels"
import Tabs from "./Tabs"

const TabPanel = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <div className="tabpanel">
      <Tabs tabs={tabs} activeTab={activeTab} onChange={setActiveTab} />
      <Panels tabs={tabs} activeTab={activeTab} />
    </div>
  )
}

export default TabPanel
