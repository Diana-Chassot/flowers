import { closeModal } from "../features/modalSlice";
import { useSelector,useDispatch } from "react-redux";
import PropTypes from "prop-types";
import Button from "./Button";

const Modal = ({ header, showCloseButton, modalActionBtn }) => {
  const isModalOpen = useSelector((state) => state.modal.onOpen);
  const selectedProduct = useSelector((state) => state.modal.selectedProduct);
  const dispatch = useDispatch();
  const handleCancel = () => {
    dispatch(closeModal());
  };

  return (
    <>
      {isModalOpen && (
        <div className="modal-wrapper" onClick={handleCancel}>
          <div className="modal" onClick={(event) => event.stopPropagation()}>
            <div className="modal__header">
              {header}
              {showCloseButton && (
                <Button
                  className="btn-close"
                  onClick={handleCancel}
                  text="&times;"
                />
              )}
            </div>
            <div className="modal__body">
              <>
                {selectedProduct && (
                  <>
                    <img
                      src={selectedProduct.imageUrl}
                      alt={selectedProduct.name}
                    />
                    <span>{selectedProduct.name}</span>
                    <span>{selectedProduct.price}$</span>
                  </>
                )}
              </>
            </div>
            <div className="modal__footer">
              {modalActionBtn}
              <Button className="btn" onClick={handleCancel} text="Cancel"/>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

Modal.propTypes = {
  header: PropTypes.node, 
  showCloseButton: PropTypes.bool,
  modalActionBtn: PropTypes.node.isRequired,
};

Modal.defaultProps = {
  header: null,
  showCloseButton: false,
};

export default Modal;
