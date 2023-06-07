import Button from "./Button";


function MessageSuccess({ onOpen, setOnOpen }) {
  const onClose = () => {
    setOnOpen(false);
  };

  return (
    <>
      {onOpen && (
        <div className="success">
          <div className="success-wrapper">
            <h2>SECRET GARDEN FLOWERS</h2>
            <p>Your order has been successfully processed.</p>
            <p>Thank you for your purchase!</p>
            <Button className="btn btn--light" text="Ok" onClick={onClose} />
          </div>
        </div>
      )}
    </>
  );
}

export default MessageSuccess;
