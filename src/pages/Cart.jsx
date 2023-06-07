import ShopingCart from "../components/Carts/ShopingCart";
import Form from "../components/Carts/Form";
import MessageSuccess from "../components/MessageSuccess";
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
