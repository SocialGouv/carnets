import React from "react"

const Term = ({ handleChange, value }) => (
  <textarea name="term" onChange={handleChange} value={value} />
)

export default Term
