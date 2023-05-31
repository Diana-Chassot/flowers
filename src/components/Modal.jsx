import PropTypes from "prop-types";
import Button from "./Button";

const ModalHeader = ({ header, showCloseButton, onClose }) => (
  <div className="modal__header">
    {header}
    {showCloseButton && (
      <Button className="btn-close" onClick={onClose} text="&times;" />
    )}
  </div>
);

const ModalBody = ({ body }) => <div className="modal__body">{body}</div>;

const ModalFooter = ({ footer }) => <div className="modal__footer">{footer}</div>;

const Modal = ({ header, body, footer, showCloseButton, onClose }) => {
  return (
    <>
      <div className="modal-wrapper" onClick={onClose}>
        <div className="modal" onClick={(event) => event.stopPropagation()}>
          <ModalHeader
            header={header}
            showCloseButton={showCloseButton}
            onClose={onClose}
          />
          <ModalBody body={body} />
          <ModalFooter footer={footer} />
        </div>
      </div>
    </>
  );
};

Modal.propTypes = {
  header: PropTypes.node,
  body: PropTypes.node.isRequired,
  footer: PropTypes.node,
  showCloseButton: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
};

Modal.defaultProps = {
  header: null,
  footer: null,
  showCloseButton: false,
};

export default Modal;