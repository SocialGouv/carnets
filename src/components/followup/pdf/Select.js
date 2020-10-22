import { View } from "@react-pdf/renderer"
import React from "react"

import Items from "./Items"
import Value from "./Value"

const Select = ({ item }) => {
  const styles = {
    select: {
      // backgroundColor: "green",
      marginLeft: 10,
    },
  }

  return (
    <View style={styles.select}>
      <Value item={{ ...item, value: item.options[item.selected].name }} />
      <Items items={item.options[item.selected].items} />
    </View>
  )
}

export default Select
