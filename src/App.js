import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Cart from './components/Cart';
import Products from './components/Products';
import About from './components/About';
import Footer from './components/Footer';
import Nav from './components/Nav';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [favoriteItems, setFavoriteItems] = useState([]);

  useEffect(() => {
    const cartItemsFromLocalStorage = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(cartItemsFromLocalStorage);
  }, []);

  useEffect(() => {
    const favoriteItemsFromLocalStorage = JSON.parse(localStorage.getItem('favoriteItems')) || [];
    setFavoriteItems(favoriteItemsFromLocalStorage);
  }, []);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    localStorage.setItem('favoriteItems', JSON.stringify(favoriteItems));
  }, [favoriteItems]);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header
                cartItems={cartItems}
                favoriteItems={favoriteItems}
                setCartItems={setCartItems}
                setFavoriteItems={setFavoriteItems} />
              <Products
                cartItems={cartItems}
                favoriteItems={favoriteItems}
                setCartItems={setCartItems}
                setFavoriteItems={setFavoriteItems}
              />,
              <About />
              <Footer />
            </>
          }
        />
        <Route
          path="/cart"
          element={
            <section className='cart'>
              <div className='container'>
                <Nav
                  cartItems={cartItems}
                  favoriteItems={favoriteItems}
                />
                <Cart
                  items={cartItems}
                  setItems={setCartItems}
                  type="shopping-cart"
                />
              </div>
            </section>
          
          }
        />
        <Route
          path="/favorites"
          element={
            <section className='favorites'>
              <div className='container'>
                <Nav
                  cartItems={cartItems}
                  favoriteItems={favoriteItems}
                />
                <Cart
                  items={favoriteItems}
                  setItems={setFavoriteItems}
                  type="favorite-cart"
                />
              </div>
            </section>
          
          }
        />
      </Routes>
    </Router>
  )
}

export default App;