import { Text, View } from "@react-pdf/renderer"
import React from "react"

import Items from "./Items"

const Section = ({ section }) => {
  const styles = {
    section: {
      // backgroundColor: "pink",
    },
    title: {
      // backgroundColor: "lightblue",
      fontSize: 18,
      marginBottom: 5,
      marginTop: 10,
    },
  }
  return (
    <View style={styles.section}>
      <Text style={styles.title}>{section.title}</Text>
      <Items items={section.items} />
    </View>
  )
}

export default Section
