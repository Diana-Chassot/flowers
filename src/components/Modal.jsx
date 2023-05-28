import PropTypes from "prop-types";
import Button from "./Button";

function Modal({ header, body, footer, showCloseButton,onClose }) {
  return (
    <>
      <div className="modal-wrapper" onClick={onClose}>
        <div className="modal" onClick={(event) => event.stopPropagation()}>
          <div className="modal__header">
            {header}
            {showCloseButton && (
              <Button 
              className="btn-close" 
              onClick={onClose} 
              text="&times;">
              </Button>
            )}
          </div>
          <div className="modal__body">
            {body}
          </div>
          <div className="modal__footer">
            {footer}
          </div>
        </div>
      </div>
    </>
  );
}

Modal.propTypes = {
  header: PropTypes.node,
  body: PropTypes.node.isRequired,
  footer: PropTypes.node.isRequired,
  showCloseButton: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
};
Modal.defaultProps = {
  header: null,
  showCloseButton: false,
};
export default Modal;
