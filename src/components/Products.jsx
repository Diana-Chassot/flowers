import React, { useState, useEffect } from "react";
import Card from "./Card";
import Button from "./Button";
import Modal from "./Modal";
import ModalFooter from "./ModalFooter";
import { fetchData } from "../api/fetchData";

function Products() {
  const [products, setProducts] = useState([]);
  const [showModalBasket, setShowModalBasket] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [favoriteProduct, setFavoriteProduct] = useState([]);
  const [productInBasket, setProductInBasket] = useState([]);
  
  console.log('Favorite Products:', favoriteProduct);
  console.log('Products in Basket:', productInBasket);
  
  const onAddToBasket = () => {
    setProductInBasket([...productInBasket, selectedProduct]);
    handleCloseBasketModal();
  };

  const onAddToFavorite = (product) => {
    setFavoriteProduct((favoriteProduct) => [...favoriteProduct, product]);
  };

  const handleOpenBasketModal = (product) => {
    setSelectedProduct(product);
    setShowModalBasket(true);
  };
  const handleCloseBasketModal = () => setShowModalBasket(false);

  useEffect(() => {
    fetchData("./data.json")
      .then((data) => {
        setProducts(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <div className="products">
      {products.map((product) => (
        <Card
          key={product.sku}
          imageUrl={product.imageUrl}
          name={product.name}
          color={product.color}
          price={product.price}
          addToFavorite={() => onAddToFavorite(product)}
          cardFooter={
            <Button
              backgroundColor="#000000e6"
              text="Add to Basket"
              onClick={() => handleOpenBasketModal(product)}
            />
          }
        />
      ))}
      {showModalBasket && (
        <Modal
          body={
            <p className="modal-text">
              Add <span className="modal-title">"{selectedProduct.name}"</span>{" "}to the basket?
            </p>
          }
          footer={
            <ModalFooter
              action={onAddToBasket}
              actionBtnText={"Add"}
              closeModal={handleCloseBasketModal}
            />
          }
          closeModal={handleCloseBasketModal}
        />
      )}
    </div>
  );
}

export default Products;