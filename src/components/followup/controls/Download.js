import PDF from "@components/followup/pdf"
import { PDFDownloadLink } from "@react-pdf/renderer"
import React, { useEffect, useState } from "react"
import { Download as DownloadIcon } from "react-feather"

const Download = ({ fileName, data }) => {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <div title="Télécharger">
      {isClient && (
        <PDFDownloadLink
          document={<PDF data={data} />}
          fileName={fileName}
          className="button no-text"
        >
          <DownloadIcon size={12} />
        </PDFDownloadLink>
      )}
    </div>
  )
}

export default Download
