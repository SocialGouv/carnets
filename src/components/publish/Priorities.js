import React from "react"

const Priorities = ({ handleChange, value }) => (
  <textarea name="priorities" onChange={handleChange} value={value} />
)

export default Priorities
