import React from "react"

import Download from "./Download"
import Toggle from "./Toggle"
import Update from "./Update"

const Controls = ({ toggle, edit, data }) => {
  return (
    <div className="controls">
      <Update />
      <Toggle toggle={toggle} edit={edit} />
      <Download fileName="suivi-technique.pdf" data={data} />
    </div>
  )
}
export default Controls
