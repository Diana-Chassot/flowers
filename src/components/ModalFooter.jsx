
function ModalFooter({action,actionBtnText,closeModal}) {
  return (
    <>
      <button className="modal-action btn" onClick={action}>
        {actionBtnText}
      </button>
      <button className="modal-close btn" onClick={closeModal}>
        Cancel
      </button>
    </>
  );
}

export default ModalFooter;
