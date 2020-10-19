import { Text, View } from "@react-pdf/renderer"
import React from "react"

const Status = ({ item }) => (
  <View
    style={{
      // backgroundColor: "purple",
      flexDirection: "row",
      justifyContent: "space-between",
      marginBottom: 5,
    }}
  >
    <Text>{item.label}</Text>
    <Text>{item.status ? "OK" : "KO"}</Text>
  </View>
)

export default Status
