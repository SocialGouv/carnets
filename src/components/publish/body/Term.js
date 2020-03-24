import React from "react"

const Term = ({ handleChange, value }) => (
  <label>
    Evénements / Echéances
    <textarea
      rows="5"
      name="term"
      value={value || ""}
      onChange={handleChange}
    />
  </label>
)

export default Term
