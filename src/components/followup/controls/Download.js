import PDF from "@components/followup/pdf"
import { useTeams } from "@lib/teams"
import { pdf } from "@react-pdf/renderer"
import { saveAs } from "file-saver"
import React from "react"
import { Download as DownloadIcon } from "react-feather"

const Download = ({ fileName, data, slug }) => {
  const teams = useTeams()
  const team = teams.find((team) => slug === team.slug)

  const generatePdfDocument = async () => {
    const blob = await pdf(<PDF followup={data} team={team} />).toBlob()
    saveAs(blob, fileName)
  }

  return (
    <button
      title="Télécharger"
      className="button no-text"
      onClick={() => generatePdfDocument()}
    >
      <DownloadIcon size={12} />
    </button>
  )
}

export default Download
