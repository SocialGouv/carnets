import React from "react"

const Footer = ({ isSubmitting }) => (
  <div className="footer">
    <button type="submit" className="plain" disabled={isSubmitting}>
      Publier
    </button>
  </div>
)

export default Footer
