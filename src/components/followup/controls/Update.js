import moment from "moment"
import React from "react"

moment.locale("fr")

const Update = ({ date, isSubmitting }) => (
  <div>
    {isSubmitting
      ? "Sauvegarde en cours..."
      : date && `Mis à jour ${moment(date).fromNow()}`}
  </div>
)

export default Update
