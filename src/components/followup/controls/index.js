import { useUser } from "@lib/user"
import React from "react"

import Download from "./Download"
import Toggle from "./Toggle"
import Update from "./Update"

const Controls = ({ toggle, edit, data, slug }) => {
  const user = useUser()
  const isAllowed = user && (user.isAdmin || user.teams?.includes(slug))

  return (
    <div className="controls">
      <Update date={data?.updated_at} />
      {isAllowed && <Toggle toggle={toggle} edit={edit} />}
      <Download fileName="suivi-technique.pdf" data={data} slug={slug} />
    </div>
  )
}

export default Controls
