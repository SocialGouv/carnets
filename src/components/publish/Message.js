import React from "react"

const Message = ({ message }) => (
  <div className="message">
    {message === "Forbidden" && (
      <p>
        Vous ne possédez pas les droits suffisants pour effectuer une
        publication.
      </p>
    )}
    {message !== "Forbidden" && (
      <p>Une erreur est survenue, veuillez réessayer ultérieurement.</p>
    )}
  </div>
)

export default Message
