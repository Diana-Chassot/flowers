import Header from "../components/Header";
import Products from "../components/Products";
import About from "../components/About";
import Footer from "../components/Footer";

function Home({cartItems,favoriteItems,setCartItems,setFavoriteItems}) {
  return (
    <>
      <Header
        cartItems={cartItems}
        favoriteItems={favoriteItems}
        setCartItems={setCartItems}
        setFavoriteItems={setFavoriteItems}
      />
      <Products
        cartItems={cartItems}
        favoriteItems={favoriteItems}
        setCartItems={setCartItems}
        setFavoriteItems={setFavoriteItems}
      />
      <About />
      <Footer />
    </>
  );
}

export default Home;
