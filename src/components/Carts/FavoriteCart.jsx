import { useSelector, useDispatch } from "react-redux";
import { removeFromFavorite } from "../../features/favoriteSlice";
import { openModal, closeModal } from "../../features/modalSlice";
import { addToCart } from "../../features/shopingCartSlice";
import { calculateTotal } from "../../features/shopingCartSlice";
import { removeFromStock } from "../../features/productsSlice";
import Button from "../Button";
import Card from "../Card";
import Modal from "../Modal";

function FavoriteCart() {
  const favoriteProducts = useSelector((state) => state.favoriteCart);
  const selectedProduct = useSelector((state) => state.modal.selectedProduct);
  const productsStocked = useSelector((state) => state.products.stock)

  const dispatch = useDispatch();

  function handleConfirm(product) {
    dispatch(openModal(product));
  }

  const handleRemove = () => {
    if (selectedProduct) {
      dispatch(removeFromFavorite(selectedProduct.sku));
      dispatch(closeModal());
    }
  };
  function handleAddToCart(product) {
    dispatch(addToCart(product));
    dispatch(removeFromStock(product.sku));
    dispatch(calculateTotal());
  }

  const EmptyFavoriteCartMessage = () => {
    return (
      <div className="empty-cart">
        <h2>"Favorites"</h2>
        <p>Your "favorites" is empty.</p>
        <i className="fa-solid fa-heart-crack"></i>
      </div>
    );
  };

  const FavoriteCartItems = () => {
    return (
      <div className="card-wrapper">
        
        {favoriteProducts.map((product) => (
          <Card
            id={product.sku}
            key={product.sku}
            name={product.name}
            imageUrl={product.imageUrl}
            color={product.color}
            price={product.price}
            cardFooter={
              <>
                {productsStocked.some((item) => item.sku === product.sku) ?(
                  <Button
                    className="btn"
                    text={<i className="fa-solid fa-bag-shopping"></i>}
                    onClick={() => handleAddToCart(product)}
                  />
                ):
                <div>Out of stock</div>
                }
                <Button
                  className="btn-close"
                  text="&times;"
                  onClick={() => handleConfirm(product)}
                />
              </>
            }
          />
        ))}
        <Modal
          header={<span>Remove from Favorites?</span>}
          modalActionBtn={
            <Button
              className="btn"
              backgroundColor="#c30d0e"
              onClick={handleRemove}
              text="Remove"
            />
          }
        />
      </div>
    );
  };
  return (
    <>
      {favoriteProducts.length === 0 ? (
        <EmptyFavoriteCartMessage />
      ) : (
        <FavoriteCartItems />
      )}
    </>
  );
}

export default FavoriteCart;
