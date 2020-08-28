// import bytes from "bytes"
// import Link from "next/link"
import React, { useCallback, useMemo, useState } from "react"
import { useDropzone } from "react-dropzone"
// import { Loader, X } from "react-feather"
// import styled from "styled-components"

const Dropzone = ({ onDrop }) => {
  // const { pubid, value, name, setfieldvalue } = props
  // const [deleting, setDeleting] = useState(false)
  const activeStyle = { borderColor: "#2196f3" }
  const acceptStyle = { borderColor: "green" }
  const rejectStyle = { borderColor: "red" }

  // const confirmRemove = (index) => {
  //   const message = "Etes vous sur de vouloir supprimer ce document ?"
  //   confirm(message) && remove(index)
  // }

  // const remove = async (index) => {
  //   setDeleting(index)
  //   const file = value[index]
  //   if (file && file.blobName) {
  //     try {
  //       await fetch("/api/tests/file/remove", {
  //         body: JSON.stringify({ id: pubid, name: file.blobName }),
  //         credentials: "include",
  //         headers: { "content-type": "application/json" },
  //         method: "DELETE",
  //       })
  //     } catch (error) {
  //       console.log(error)
  //       alert(`
  //         Un probleme est survenu lors de la suppression du document.
  //         Veuillez réessayer ulterieurement.
  //       `)
  //       setDeleting(false)
  //       return false
  //     }
  //   }
  //   value.splice(index, 1)
  //   setfieldvalue(name, value)
  //   setDeleting(false)
  // }

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({ onDrop })

  // const files = value.map((file, index) => (
  //   <li key={index}>
  //     {file.blobName ? (
  //       <Link
  //         href={{
  //           pathname: "/api/tests/file/get",
  //           query: { id: pubid, name: file.blobName },
  //         }}
  //       >
  //         <a>{file.name}</a>
  //       </Link>
  //     ) : (
  //       <span>{file.name}</span>
  //     )}
  //     <span>({bytes(file.size)})</span>
  //     {deleting === index ? (
  //       <Loader size={12} />
  //     ) : (
  //       <X
  //         size={12}
  //         color="darkred"
  //         title="supprimer"
  //         onClick={() => confirmRemove(index)}
  //       />
  //     )}
  //   </li>
  // ))

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
    <section className="container">
      <div {...getRootProps({ className: "dropzone", style })}>
        <input {...getInputProps()} />
        <p>Glisser / déposer les fichiers ici.</p>
      </div>
      {/* <FilesWrapper>{files}</FilesWrapper> */}
    </section>
  )
}

// const FilesWrapper = styled.ul`
//   padding: 0;
//   margin: 1rem 0 0;
//   list-style: none;
//   font-size: 0.8rem;

//   li {
//     display: flex;
//     align-items: center;
//     padding-left: 1.2rem;
//     background-size: 14px;
//     background-repeat: no-repeat;
//     background-position: center left;
//     background-image: url(/images/icons/file.svg);

//     a {
//       margin-left: 0.2rem;
//     }

//     span {
//       margin: 0.3rem;
//       font-size: 0.7rem;
//     }

//     svg {
//       cursor: pointer;
//     }
//   }
// `

export default Dropzone
