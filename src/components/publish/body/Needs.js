import React from "react"

const Needs = ({ handleChange, value }) => (
  <label>
    Besoins:
    <textarea name="needs" onChange={handleChange} value={value} rows="5" />
  </label>
)

export default Needs
