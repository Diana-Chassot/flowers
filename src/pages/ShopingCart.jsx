import Cart from '../components/Cart';

function ShopingCart({cartItems,setCartItems}) {
  return (
    <section className="cart">
      <div className="container">
        <Cart items={cartItems} setItems={setCartItems} type="shopping-cart" />
      </div>
    </section>
  );
}

export default ShopingCart;
