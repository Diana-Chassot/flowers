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

  const messageBye = () => {
    alert("Bye");
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
        text="Bye"
        onClick={() =>
          handleOpenModal("Second Modal", "This is the second modal.",false, "Click to see Message Bye", messageBye )
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
