import Router from "next/router"
import React, { useState } from "react"
import { Trash2 } from "react-feather"

import Modal from "@components/Modal"
import { UserContext } from "@lib/user"

const Post = ({ post }) => {
  const [loading, setLoading] = useState(false)
  const [modalVisibility, setModalVisibility] = useState(false)

  const suppress = async () => {
    setLoading(true)
    await fetch("/api/post", {
      method: "DELETE",
      body: JSON.stringify({ id: post.id }),
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
          <button onClick={() => suppress()} className="important">
            Supprimer
          </button>
        </div>
      </Modal>
      <UserContext.Consumer>
        {(user) =>
          user?.nickname === post.author && (
            <a
              role="button"
              tabIndex={0}
              className="delete button important no-text"
              onClick={() => setModalVisibility(true)}
              onKeyPress={() => setModalVisibility(true)}
            >
              <Trash2 size={13} title="Supprimer" />
            </a>
          )
        }
      </UserContext.Consumer>
    </>
  )
}

export default Post
