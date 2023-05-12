import React, { useRef } from "react";

function Modal({ header, body, showCloseButton,closeModal, actionBtnText, action }) {
  const modalRef = useRef(null);

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      closeModal();
    }
  };

  return (
    <>
      <div className="modal-wrapper" onClick={handleClickOutside}>
        <div className="modal" ref={modalRef}>
          <div className="modal-header">
            <h2>{header}</h2>
            {showCloseButton && (
              <button className="modal-close btn" onClick={closeModal}>
                <span>&times;</span>
              </button>
            )}
          </div>
          <div className="modal-body">
            <p className="modal-text">
              {body}
            </p>
          </div>
          <div className="modal-footer">
            <button className="modal-action btn" onClick={action}>
              {actionBtnText}
            </button>
            <button className="modal-close btn" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
