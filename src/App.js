
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
        <Route index element={<Home/>} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </Router>
  );
}

export default App;