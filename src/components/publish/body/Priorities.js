import React from "react"

const Priorities = ({ field, form: { touched, errors }, ...props }) => (
  <label>
    Priorités*
    <textarea
      rows="5"
      {...field}
      {...props}
      className={touched.priorities && errors.priorities ? "error" : ""}
    />
  </label>
)

export default Priorities
