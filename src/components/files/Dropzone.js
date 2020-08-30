import React, { useMemo } from "react"
import { useDropzone } from "react-dropzone"

const Dropzone = ({ onDrop }) => {
  const activeStyle = { borderColor: "#2196f3" }
  const acceptStyle = { borderColor: "green" }
  const rejectStyle = { borderColor: "red" }

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({ onDrop })

  const style = useMemo(
    () => ({
      ...(isDragActive ? activeStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [
      isDragActive,
      isDragAccept,
      isDragReject,
      activeStyle,
      acceptStyle,
      rejectStyle,
    ]
  )

  return (
    // <section className="container">
    <div {...getRootProps({ className: "dropzone", style })}>
      <input {...getInputProps()} />
      <p>Glisser / déposer les fichiers ici.</p>
    </div>
    // </section>
  )
}

export default Dropzone
