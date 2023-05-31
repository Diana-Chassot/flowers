import React, { useState } from "react";
import Card from "./Card";
import Modal from "./Modal";
import Button from "./Button";
import useFetch from "../api/useFetch";

const ProductModalBody = ({ selectedProduct }) => (
  <>
    <img src={selectedProduct.imageUrl} alt={selectedProduct.name} />
    <span>{selectedProduct.name}</span>
    <span>{selectedProduct.price}$</span>
  </>
);

const ProductModalFooter = ({ addToCart, closeModal }) => (
  <>
    <Button
      className="btn"
      backgroundColor="#96001a"
      onClick={addToCart}
      text="Add"
    />
    <Button className="btn" onClick={closeModal} text="Cancel" />
  </>
);

const Products = ({
  cartItems,
  favoriteItems,
  setCartItems,
  setFavoriteItems,
}) => {
  const [data] = useFetch("./data.json");
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

  const addToCart = () => {
    const isProductInCart = cartItems.some(
      (item) => item.sku === selectedProduct.sku
    );
    if (!isProductInCart) {
      setCartItems([...cartItems, selectedProduct]);
    }
    closeModal();
  };

  const addToFavorite = (product) => {
    const isFavorite =
      favoriteItems && favoriteItems.some((item) => item.sku === product.sku);
    if (isFavorite) {
      const updatedFavoriteItems = favoriteItems.filter(
        (item) => item.sku !== product.sku
      );
      setFavoriteItems(updatedFavoriteItems);
    } else {
      setFavoriteItems([...favoriteItems, product]);
    }
  };

  return (
    <section className="products">
      {data &&
        data.map((product) => (
          <Card
            key={product.sku}
            id={product.sku}
            name={product.name}
            imageUrl={product.imageUrl}
            color={product.color}
            price={product.price}
            showFavoriteIcon={true}
            isFavorite={favoriteItems.some((item) => item.sku === product.sku)}
            addToFavorite={() => addToFavorite(product)}
            cardFooter={
              <Button
                className="btn"
                text="Add to Basket"
                onClick={() => openModal(product)}
              />
            }
          />
        ))}
      {showModal && (
        <Modal
          onClose={closeModal}
          header={<span>Add to the basket?</span>}
          body={
          <ProductModalBody 
          selectedProduct={selectedProduct} />
          }
          footer={
            <ProductModalFooter 
            addToCart={addToCart} 
            closeModal={closeModal} />
          }
        />
      )}
    </section>
  );
};

export default Products;
