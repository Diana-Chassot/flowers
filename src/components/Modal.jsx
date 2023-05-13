import ModalFooter from "./ModalFooter";

function Modal({ header, body, showCloseButton,closeModal, actionBtnText, action }) {

  return (
    <>
      <div className="modal-wrapper" onClick={closeModal}>
        <div className="modal"  onClick={event => event.stopPropagation()}>
          <div className="modal-header">
            <h2>{header}</h2>
            {showCloseButton && (
              <button onClick={closeModal}>
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
            <ModalFooter actionBtnText={actionBtnText} action={action} closeModal={closeModal} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
