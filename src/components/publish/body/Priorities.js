import React from "react"

const Priorities = ({ handleChange, value, error }) => (
  <label>
    Priorités*:
    <textarea
      rows={5}
      value={value}
      name="priorities"
      onChange={handleChange}
      className={`${error ? "error" : ""}`}
    />
  </label>
)

export default Priorities
