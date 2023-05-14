import React, { useState } from 'react';
import Button from './components/Button';
import Modal from './components/Modal';
import ModalFooter from './components/ModalFooter';

function App() {
  const [showModalFirst, setShowFirstModal] = useState(false);
  const [showModalSecond, setShowSecondModal] = useState(false);

  const handleOpenFirstModal = () => setShowFirstModal(true);
  const handleCloseFirstModal = () => setShowFirstModal(false);

  const handleOpenSecondModal = () => setShowSecondModal(true);
  const handleCloseSecondModal = () => setShowSecondModal(false);

  const messageWelcome = () => {
    alert("Welcome");
    handleCloseFirstModal();
  };

  const messageDelete = () => {
    alert("You have deleted your file!");
    handleCloseSecondModal();
  };

  return (
    <>
      <Button
        backgroundColor="blue"
        text="Welcome"
        onClick={handleOpenFirstModal}
      />
      {showModalFirst && (
        <Modal
          header={<h3>First modal</h3>}
          body={<p className='modal-text'>First modal content</p>}
          footer={
          <ModalFooter 
          action={messageWelcome} 
          actionBtnText={"Click to see message Welcome"} 
          closeModal={handleCloseFirstModal}/>
          }
          closeModal={handleCloseFirstModal}
        />
      )}

      <Button
        backgroundColor="Teal"
        text="Delete"
        onClick={handleOpenSecondModal}
      />
      {showModalSecond && (
        <Modal
          header={<h3>Second modal</h3>}
          body={<p className='modal-text'>Second modal content</p>}
          footer={
          <ModalFooter 
          action={messageDelete} 
          actionBtnText={"Delete"} 
          closeModal={handleCloseSecondModal}/>
          }
          closeModal={handleCloseSecondModal}
          showCloseButton={true}
        />
      )}
    </>
  );
}

export default App;
