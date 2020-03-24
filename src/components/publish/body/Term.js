import React from "react"

const Term = ({ handleChange, value }) => (
  <label>
    Evénements / Echéances:
    <textarea name="term" onChange={handleChange} value={value} rows="5" />
  </label>
)

export default Term
