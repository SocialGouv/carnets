import React from "react"

const Modal = ({ isVisible, children }) => (
  <>
    {isVisible && (
      <div className="modal">
        <div className="window">
          <div className="body">{children}</div>
        </div>
      </div>
    )}
  </>
)

export default Modal
