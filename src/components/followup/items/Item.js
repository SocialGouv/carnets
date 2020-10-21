import React from "react"

import Items from "."
import Date from "./Date"
import List from "./List"
import Select from "./Select"
import Status from "./Status"
import Value from "./Value"

const Item = ({ item, edit }) => (
  <>
    {Object.prototype.hasOwnProperty.call(item, "status") && (
      <Status item={item} edit={edit} />
    )}
    {item.value && <Value item={item} edit={edit} />}
    {item.date && <Date item={item} edit={edit} />}
    {item.list && <List item={item} edit={edit} />}
    {item.items && item.status && <Items items={item.items} edit={edit} />}
    {item.options && <Select item={item} edit={edit} />}
  </>
)

export default Item
