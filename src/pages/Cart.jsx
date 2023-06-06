import ShopingCart from "../components/Carts/ShopingCart";
import Form from "../components/Carts/Form";
function Cart() {
  return (
    <section className="cart">
      <div className="container">
        
          <ShopingCart />
          <Form />
      </div>
    </section>
  )
}

export default Cart;
