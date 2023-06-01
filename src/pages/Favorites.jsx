import Cart from "../components/Cart";
function Favorites({favoriteItems,setFavoriteItems}) {
  return (
    <section className="favorites">
      <div className="container">
        <Cart
          items={favoriteItems}
          setItems={setFavoriteItems}
          type="favorite-cart"
        />
      </div>
    </section>
  );
}

export default Favorites;
