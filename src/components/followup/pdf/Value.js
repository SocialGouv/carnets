import { Text, View } from "@react-pdf/renderer"
import React from "react"

const Value = ({ item }) => (
  <View
    style={{
      // backgroundColor: "gray",
      flexDirection: "row",
      justifyContent: "space-between",
      marginBottom: 5,
    }}
  >
    <Text>{item.label}</Text>
    <Text>{item.value}</Text>
  </View>
)

export default Value
