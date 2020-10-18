import React from "react"
import { Download, Edit3, Eye } from "react-feather"

const Controls = ({ toggle, edit }) => (
  <div className="controls">
    <div>Mise à jour il y a 5 minutes</div>
    <button
      onClick={toggle}
      className="button no-text"
      title={`${edit ? "Voir" : "Editer"}`}
    >
      {edit ? <Eye size={12} /> : <Edit3 size={12} />}
    </button>
    <button className="button no-text" title="Télécharger">
      <Download size={12} />
    </button>
  </div>
)

export default Controls
