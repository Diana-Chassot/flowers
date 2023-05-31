import { useState } from "react";
import PropTypes from "prop-types";
import Modal from "./Modal";
import Button from "./Button";
import Card from "./Card";

function Cart({ items = [], setItems, type }) {
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openModal = (product) => {
    setShowModal(true);
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedProduct(null);
  };

  const CartModalHeader = () => {
    return (
      <span>
        {" "}
        Remove from {type === "shopping-cart" ? "Cart" : "Favorites"}?
      </span>
    );
  };

  const CartModalBody = () => {
    if (!selectedProduct) {
      return null;
    }
    return (
      <>
        <img src={selectedProduct.imageUrl} alt={selectedProduct.name} />
        <span>{selectedProduct.name}</span>
        <span>{selectedProduct.price}$</span>
      </>
    );
  };

  const CartModalFooter = () => (
    <>
      <Button
        className="btn"
        backgroundColor="#96001a"
        onClick={confirmRemoveFromCart}
        text="Remove"
      />
      <Button className="btn" onClick={closeModal} text="Cancel" />
    </>
  );

  const EmptyCartMessage = () => {
    return (
      <div className="empty-cart">
        <h2>{type === "shopping-cart" ? "Cart" : "Favorites"}</h2>
        <p>Your {type === "shopping-cart" ? "cart" : "favorites"} is empty.</p>
        <i className="fa-solid fa-heart-crack"></i>
      </div>
    );
  };

  const CartItems = () => {
    return (
      <div className="card-wrapper">
        {items.map((product) => (
          <Card
            id={product.sku}
            key={product.sku}
            name={product.name}
            imageUrl={product.imageUrl}
            color={product.color}
            price={product.price}
            cardFooter={
              <Button
                className="btn-close"
                onClick={() => removeFromCart(product)}
                text="&times;"
              />
            }
          />
        ))}
      </div>
    );
  };

  const removeFromCart = (product) => {
    openModal(product);
  };

  const confirmRemoveFromCart = () => {
    if (selectedProduct) {
      const updatedItems = items.filter(
        (item) => item.sku !== selectedProduct.sku
      );
      setItems(updatedItems);
      closeModal();
    }
  };

  return (
    <>
      {items && items.length === 0 ? <EmptyCartMessage /> : <CartItems />}
      {showModal && (
        <Modal
          onClose={closeModal}
          header={<CartModalHeader />}
          body={<CartModalBody />}
          footer={<CartModalFooter />}
        />
      )}
    </>
  );
}

Cart.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Cart;
