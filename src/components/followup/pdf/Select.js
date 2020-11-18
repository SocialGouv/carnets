import { View } from "@react-pdf/renderer"
import React from "react"

import Items from "./Items"
import Value from "./Value"

const Select = ({ item }) => {
  const styles = {
    select: {
      marginLeft: 10,
    },
  }

  const { items, name: value } = item.options[item.selected]

  return (
    <View style={styles.select}>
      <Value item={{ label: item.label, value }} />
      <Items items={items} />
    </View>
  )
}

export default Select
