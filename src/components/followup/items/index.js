import React from "react"

import Item from "./Item"

const Items = ({ items, edit }) => (
  <div className="items">
    {items.map((item, i) => (
      <Item key={i} item={item} edit={edit} />
    ))}
  </div>
)

export default Items
