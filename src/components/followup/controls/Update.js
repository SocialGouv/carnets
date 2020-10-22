import moment from "moment"
import React from "react"

moment.locale("fr")

const Update = ({ date }) => (
  <div>{date && `Mis à jour ${moment(date).fromNow()}`}</div>
)

export default Update
