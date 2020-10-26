import { View } from "@react-pdf/renderer"
import React from "react"

import Date from "./Date"
import Items from "./Items"
import List from "./List"
import Select from "./Select"
import Status from "./Status"
import Value from "./Value"

const Item = ({ item }) => (
  <View>
    {item.list && <List item={item} />}
    {item.date && <Date item={item} />}
    {Object.prototype.hasOwnProperty.call(item, "value") && (
      <Value item={item} />
    )}
    {Object.prototype.hasOwnProperty.call(item, "status") && (
      <Status item={item} />
    )}
    {item.options && <Select item={item} />}
    {item.items && <Items items={item.items} />}
  </View>
)

export default Item
