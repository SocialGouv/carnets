import React from "react"
import { ChevronRight } from "react-feather"

const Footer = ({ isSubmitting }) => (
  <div className="footer">
    <button type="submit" disabled={isSubmitting}>
      <ChevronRight size={24} /> Publier
    </button>
  </div>
)

export default Footer
