import React, { useState } from 'react';
import Button from './components/Button';
import Modal from './components/Modal';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({
    header: "",
    body: "",
    actionBtnText: "",
    action: null,
    showCloseButton: true
  });

  const handleOpenModal = (header, body, showCloseButton, actionBtnText, action,) => {
    setModalContent({ header, body,showCloseButton, actionBtnText, action  });
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const messageWelcome = () => {
    alert("Welcome");
    handleCloseModal();
  };

  const messageDelete = () => {
    alert("You have been deleted your file!");
    handleCloseModal();
  };

  return (
    <div className="container">

      <Button
        backgroundColor="gray"
        text="Welcome"
        onClick={() =>
          handleOpenModal("First Modal", "This is the first modal.",true, "Click to see Message Welcome", messageWelcome, )
        }
      />
      <Button
        backgroundColor="Teal"
        text="Delete"
        onClick={() =>
          handleOpenModal("Do you want to Delete this file ?", "Are you sure you want to Delete this?",false, "Delete", messageDelete )
        }
      />
      {showModal && (
        <Modal
          header={modalContent.header}
          body={modalContent.body}
          closeModal={handleCloseModal}
          actionBtnText={modalContent.actionBtnText}
          showCloseButton={modalContent.showCloseButton}
          action={modalContent.action}
        />
      )}

    </div>
  );
}

export default App;
