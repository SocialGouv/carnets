import { Text, View } from "@react-pdf/renderer"
import moment from "moment"
import React from "react"

moment.locale("fr")

const Date = ({ item }) => (
  <View
    style={{
      // backgroundColor: "cyan",
      flexDirection: "row",
      justifyContent: "space-between",
      marginBottom: 5,
    }}
  >
    <Text>{item.label}</Text>
    <Text>{moment(item.date).format("D/MM/YYYY")}</Text>
  </View>
)

export default Date
