import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../features/productsSlice";
import { addToFavorite  } from "../features/favoriteSlice";
import { addToCart } from "../features/shopingCartSlice";
import { openModal, closeModal } from "../features/modalSlice";
import { calculateTotal } from "../features/shopingCartSlice";
import { removeFromStock } from "../features/productsSlice";
import Card from "./Card";
import Button from "./Button";
import Modal from "./Modal";

const Products = () => {
  const dispatch = useDispatch();

  const { data: products, status } = useSelector((state) => state.products);
  const productsStocked = useSelector((state) => state.products.stock)
  const favoriteProducts = useSelector((state) => state.favoriteCart);
  const selectedProduct = useSelector((state) => state.modal.selectedProduct);
  const isDataLoaded = useSelector((state) => state.products.isDataLoaded);

  const isProductInFavorites = (product) =>
  favoriteProducts.some((favProduct) => favProduct.sku === product.sku);

  useEffect(() => {
    if(!isDataLoaded){
    dispatch(getProducts())
  }
  }, []);

  if (status === "loading") {
    return <p>Loading....</p>;
  }

  if (status === "error") {
    return <p>Something went Wrong!</p>;
  }

  function handleConfirm(product) {
    dispatch(openModal(product));
  }

  function handleAddToFavorite(product) {
    dispatch(addToFavorite(product));
  }

  function handleAddToCart() {
    if (selectedProduct) {
      dispatch(addToCart(selectedProduct));
      dispatch(removeFromStock(selectedProduct.sku))
      dispatch(calculateTotal())
      dispatch(closeModal());
    }
  }
  return (
    <section className="our-products">
      <div className="container">
      <div className="our-products__products">
      {products &&
        products.map((product) => (
          <Card
            key={product.sku}
            id={product.sku}
            name={product.name}
            imageUrl={product.imageUrl}
            color={product.color}
            price={product.price}
            cardHeader={
              <Button
                className="favorite card-icon"
                onClick={() => handleAddToFavorite(product)}
                text={
                  isProductInFavorites(product) ? (
                    <i className="fa-solid fa-star"></i>
                  ) : (
                    <i className="fa-regular fa-star"></i>
                  )
                }
              />
            }
            cardFooter={
              productsStocked.some((item) => item.sku === product.sku) ? (
                <Button
                  onClick={() => handleConfirm(product)}
                  className="btn"
                  text="Add to Basket"
                />
              ) : (
                <div>Out of Stock</div>
              )
            }
          />
        ))}
      <Modal
        header={<span>Add to the basket?</span>}
        modalActionBtn={
          <Button
            className="btn"
            backgroundColor="#c30d0e"
            onClick={handleAddToCart}
            text="Add to basket"
          />
        }
      />
      </div>
      </div>
    </section>
  );
};

export default Products;
