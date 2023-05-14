
function Modal({ header, body, footer, showCloseButton, closeModal }) {
  return (
    <>
      <div className="modal-wrapper" onClick={closeModal}>
        <div className="modal" onClick={(event) => event.stopPropagation()}>
          <div className="modal-header">
            {header}
            {showCloseButton && (
              <button onClick={closeModal}>
                <span>&times;</span>
              </button>
            )}
          </div>
          <div className="modal-body">{body}</div>
          <div className="modal-footer">{footer}</div>
        </div>
      </div>
    </>
  );
};

export default Modal;
