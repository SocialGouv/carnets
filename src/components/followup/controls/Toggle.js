// import Download from "@components/followup/controls/Download"
import React from "react"
import { Edit3, Eye } from "react-feather"

const Toggle = ({ edit, toggle }) => (
  <button
    onClick={toggle}
    className="button no-text"
    title={`${edit ? "Voir" : "Editer"}`}
  >
    {edit ? <Eye size={12} /> : <Edit3 size={12} />}
  </button>
)

export default Toggle
