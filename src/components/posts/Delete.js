import Modal from "@components/Modal"
import Router from "next/router"
import React, { useState } from "react"
import { Trash2 } from "react-feather"

const Post = ({ post }) => {
  const [loading, setLoading] = useState(false)
  const [modalVisibility, setModalVisibility] = useState(false)

  const remove = async () => {
    setLoading(true)
    const { id } = post
    await fetch(`/api/posts/${id}`, {
      body: JSON.stringify({ team_slug: post.team_slug }),
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
        <p>Etes-vous sur de vouloir supprimer cette publication ?</p>
        <div className="buttons">
          <button onClick={() => setModalVisibility(false)}>Annuler</button>
          <button onClick={() => remove()} className="important">
            Supprimer
          </button>
        </div>
      </Modal>
      <>
        <a
          role="button"
          tabIndex={0}
          className="delete button important no-text"
          onClick={() => setModalVisibility(true)}
          onKeyPress={() => setModalVisibility(true)}
        >
          <Trash2 size={13} title="Supprimer" />
        </a>
      </>
    </>
  )
}

export default Post
