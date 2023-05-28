import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Products from './components/Products';
import Footer from './components/Footer';
import About from './components/About';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [favoriteItems, setFavoriteItems] = useState([]);

  useEffect(() => {
    const cartItemsFromLocalStorage =
      JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(cartItemsFromLocalStorage);
  }, []);

  useEffect(() => {
    const favoriteItemsFromLocalStorage =
      JSON.parse(localStorage.getItem("favoriteItems")) || [];
    setFavoriteItems(favoriteItemsFromLocalStorage);
  }, []);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    localStorage.setItem("favoriteItems", JSON.stringify(favoriteItems));
  }, [favoriteItems]);

  return (
    <>
      <Header cartItems={cartItems} favoriteItems={favoriteItems} />
      <Products
        cartItems={cartItems}
        favoriteItems={favoriteItems}
        setCartItems={setCartItems}
        setFavoriteItems={setFavoriteItems}
      />
      <About/>
      <Footer/>
    </>
  );
}

export default App;

