import React from "react"

const Needs = ({ handleChange, value }) => (
  <label>
    Besoins
    <textarea
      rows="5"
      name="needs"
      value={value || ""}
      onChange={handleChange}
    />
  </label>
)

export default Needs
