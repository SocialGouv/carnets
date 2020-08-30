import Modal from "@components/Modal"
import bytes from "bytes"
import moment from "moment"
import Link from "next/link"
import Router from "next/router"
import React, { useState } from "react"
import { File as FileIcon, X } from "react-feather"
import { CircleSpinner } from "react-spinners-kit"

moment.locale("fr")

const File = ({ file, slug }) => {
  const [loading, setLoading] = useState(false)
  const [modalVisibility, setModalVisibility] = useState(false)

  const remove = async () => {
    setLoading(true)
    const { id } = file
    await fetch(`/api/teams/${slug}/files/${id}`, {
      headers: { "Content-Type": "application/json" },
      method: "DELETE",
    })
    Router.reload()
    setModalVisibility(false)
  }

  return (
    <>
      <Modal
        loading={loading}
        isVisible={modalVisibility}
        onClose={() => setModalVisibility(false)}
      >
        <p>Etes-vous sur de vouloir supprimer ce fichier ?</p>
        <div className="buttons">
          <button onClick={() => setModalVisibility(false)}>Annuler</button>
          <button onClick={() => remove()} className="important">
            Supprimer
          </button>
        </div>
      </Modal>
      <div className="file">
        <div className="icon">
          {file.loading ? (
            <CircleSpinner size={16} color="#212121" />
          ) : (
            <FileIcon size={24} />
          )}
        </div>
        <div className="details">
          <Link
            href="/api/teams/[team]/files/[id]"
            as={`/api/teams/${slug}/files/${file.id}`}
          >
            <a>{file.name}</a>
          </Link>
          <div className="info">
            <div className="size">{bytes(file.size)}</div>
            <div className="date">
              {moment(file.created_at).format("D/MM/YY")}
            </div>
          </div>
        </div>
        <div
          className="delete"
          role="button"
          tabIndex={0}
          onClick={() => setModalVisibility(true)}
          onKeyPress={() => setModalVisibility(true)}
        >
          <X size={12} />
        </div>
      </div>
    </>
  )
}

export default File
