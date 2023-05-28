import React, { useState} from "react";
import Card from "./Card";
import Modal from "./Modal";
import Button from "./Button";
import useFetch from "../api/useFetch";

function Products({ cartItems, favoriteItems, setCartItems, setFavoriteItems }) {
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
    setCartItems([...cartItems, selectedProduct]);
    closeModal();
  };

  const addToFavorite = (product) => {
    const isFavorite = favoriteItems.some((item) => item.sku === product.sku);
    
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
            imageUrl={product.imageUrl}
            name={product.name}
            color={product.color}
            price={product.price}
            action={() => openModal(product)}
            isFavorite={favoriteItems.some(item => item.sku === product.sku)}

            addToFavorite={() => addToFavorite(product)}
          />
        ))}

      {showModal && (
        <Modal
          onClose={closeModal}
          header={<span>Add to the basket?</span>}
          body={
            <>
              <img src={selectedProduct.imageUrl} alt={selectedProduct.name} />
              <span>{selectedProduct.name}</span>
              <span>{selectedProduct.price}$</span>
            </>
          }
          footer={
            <>
              <Button
                className="btn"
                backgroundColor="#96001a"
                onClick={addToCart}
                text="Add"
              />
              <Button className="btn" onClick={closeModal} text="Cancel" />
            </>
          }
        />
      )}
    </section>
  );
}

export default Products;
