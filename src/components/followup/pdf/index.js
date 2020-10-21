import { Document, Page, Text } from "@react-pdf/renderer"
import React from "react"

import Footer from "./Footer"
import Section from "./Section"

const PDF = ({ followup }) => {
  const styles = {
    body: {
      fontSize: 12,
      padding: 32,
    },
    title: {
      fontSize: 24,
      marginBottom: 10,
      textAlign: "center",
    },
  }

  return (
    <Document>
      <Page style={styles.body}>
        <Text style={styles.title}>Suivi Technique</Text>
        {followup.data.map((section, i) => (
          <Section key={i} section={section} />
        ))}
        <Footer />
      </Page>
    </Document>
  )
}

export default PDF
