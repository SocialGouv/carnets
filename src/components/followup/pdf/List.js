import { Text, View } from "@react-pdf/renderer"
import React from "react"

const List = ({ item }) => {
  const styles = {
    bulletPoint: {
      fontSize: 10,
      width: 10,
    },
    item: {
      alignItems: "center",
      flexDirection: "row",
    },
    items: {
      marginLeft: 10,
    },
    list: {
      marginBottom: 5,
    },
  }
  return (
    <View style={styles.list}>
      <Text>{item.label}</Text>
      <View style={styles.items}>
        {item.list.map((item, i) => (
          <View key={i} style={styles.item}>
            <Text style={styles.bulletPoint}>•</Text>
            <Text>{item}</Text>
          </View>
        ))}
      </View>
    </View>
  )
}

export default List
