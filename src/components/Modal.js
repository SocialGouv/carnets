import React from "react"
import { X } from "react-feather"
import { PongSpinner } from "react-spinners-kit"

const Modal = ({ isVisible, children, onClose, loading }) => {
  const close = (event) => {
    event.preventDefault()
    if (event.target === event.currentTarget) {
      onClose()
    }
  }

  return (
    <>
      {isVisible && (
        <div
          tabIndex={0}
          role="button"
          onClick={close}
          className="modal"
          onKeyPress={close}
        >
          <div className="window">
            <X size={14} onClick={close} className="close" />
            <div className="body">
              {loading ? (
                <div className="loader">
                  <PongSpinner size={100} color="darkblue" loading={loading} />
                </div>
              ) : (
                children
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Modal
