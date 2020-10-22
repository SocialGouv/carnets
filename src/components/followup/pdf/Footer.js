import { Text, View } from "@react-pdf/renderer"
import moment from "moment"
import React from "react"

moment.locale("fr")

const Footer = () => (
  <View
    style={{
      bottom: 10,
      color: "gray",
      fontSize: 10,
      position: "absolute",
      textAlign: "center",
    }}
  >
    <Text>{moment().format("dddd DD MMMM YYYY")}</Text>
  </View>
)

export default Footer
