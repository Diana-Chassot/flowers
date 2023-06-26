
import { HashRouter, Routes, Route} from 'react-router-dom';
import Nav from './components/Nav';
import Home from './pages';
import Cart from './pages/Cart';
import Favorites from './pages/Favorites';

function App() {

  return (
    <HashRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home/>} index/>
        <Route path="/cart" element={<Cart />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </HashRouter>
  );
}

export default App;