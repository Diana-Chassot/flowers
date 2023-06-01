import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './pages/Home';
import ShopingCart from './pages/ShopingCart';
import Favorites from './pages/Favorites';

function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const storedValue = JSON.parse(localStorage.getItem(key));
    return storedValue !== null ? storedValue : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

function App() {
  const [cartItems, setCartItems] = useLocalStorage('cartItems', []);
  const [favoriteItems, setFavoriteItems] = useLocalStorage('favoriteItems', []);

  return (
    <Router>
      <Nav cartItems={cartItems} favoriteItems={favoriteItems} />
      <Routes>
        <Route path="/" element={<Home cartItems={cartItems} setCartItems={setCartItems} favoriteItems={favoriteItems} setFavoriteItems={setFavoriteItems} />} />
        <Route path="/cart" element={<ShopingCart cartItems={cartItems} setCartItems={setCartItems} />} />
        <Route path="/favorites" element={<Favorites favoriteItems={favoriteItems} setFavoriteItems={setFavoriteItems} />} />
      </Routes>
    </Router>
  );
}

export default App;