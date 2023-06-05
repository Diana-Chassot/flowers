import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../../features/shopingCartSlice";
import { openModal, closeModal } from "../../features/modalSlice";
import { calculateTotal } from "../../features/shopingCartSlice";
import { addToStock } from "../../features/productsSlice";
import Button from "../Button";
import Card from "../Card";
import Modal from "../Modal";

function ShopingCart() {
  const cartProducts = useSelector((state) => state.shopingCart.items);
  const selectedProduct = useSelector((state) => state.modal.selectedProduct);
  const total = useSelector((state) => state.shopingCart.total);

  const dispatch = useDispatch();

  function handleConfirm(product) {
    dispatch(openModal(product));
  }

  const handleRemove = () => {
    if (selectedProduct) {
      dispatch(removeFromCart(selectedProduct.sku));
      dispatch(addToStock(selectedProduct));
      dispatch(closeModal());
      dispatch(calculateTotal());
    }
  };

  const EmptyShopingCartMessage = () => {
    return (
      <div className="empty-cart">
        <h2>"Cart"</h2>
        <p>Your "Bag" is empty.</p>
        <i className="fa-solid fa-heart-crack"></i>
      </div>
    );
  };

  const ShopingCartItems = () => {
    return (
      <>
        
        {cartProducts.map((product) => (
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
                text="&times;"
                onClick={() => handleConfirm(product)}
              />
            }
          />
        ))}
        <Modal
          header={<span>Remove from Cart?</span>}
          modalActionBtn={
            <Button
              className="btn"
              backgroundColor="#c30d0e"
              onClick={handleRemove}
              text="Remove"
            />
          }
        />
        <div className="cart__total">Total: {total}$</div>
      </>
    );
  };
  return (
    <>
      {cartProducts.length === 0 ? (
        <EmptyShopingCartMessage />
      ) : (
        <ShopingCartItems />
      )}
    </>
  );
}

export default ShopingCart;
