import { View } from "@react-pdf/renderer"
import React from "react"

import Item from "./Item"

const Items = ({ items }) => {
  const styles = {
    items: {
      // backgroundColor: "crimson",
      marginLeft: 10,
    },
  }

  return (
    <View style={styles.items}>
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </View>
  )
}

export default Items
