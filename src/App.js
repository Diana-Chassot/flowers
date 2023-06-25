
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './pages';
import Cart from './pages/Cart';
import Favorites from './pages/Favorites';

function App() {

  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/flowers" element={<Home/>} />
        <Route path="/flowers/cart" element={<Cart />} />
        <Route path="/flowers/favorites" element={<Favorites />} />
      </Routes>
    </Router>
  );
}

export default App;