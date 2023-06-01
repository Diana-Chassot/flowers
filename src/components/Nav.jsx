import { Link, useNavigate } from "react-router-dom";

const Nav = ({ cartItems, favoriteItems }) => {
  const navigate = useNavigate();
  return (
    <menu className="nav">
      <Logo/>
      <div className="nav__icons">
        <HomeButton navigate={navigate} />
        <FavoritesButton navigate={navigate} favoriteItems={favoriteItems} />
        <CartButton navigate={navigate} cartItems={cartItems} />
      </div>
    </menu>
  );
};

const Logo = () => (
  <Link to="/" className="nav__brand">
    <img
      className="nav__logo"
      src="./img/The-Secret-Garden-Logo.jpg"
      alt="logo"
    />
    <h2>Secret Garden</h2>
  </Link>
);

const HomeButton = ({ navigate }) => (
  <button className="home" onClick={() => navigate("/")}>
    <i className="fa-solid fa-seedling" style={{ color: "#c30d0e" }}></i>
  </button>
);

const FavoritesButton = ({ navigate, favoriteItems }) => {
  const favoriteIconClass = favoriteItems.length > 0 ? "fa-solid" : "fa-regular";
  return (
    <button className="favorite" onClick={()=>navigate("/favorites")}>
      <i className={`${favoriteIconClass} fa-star`}></i>
      <span>{favoriteItems.length}</span>
    </button>
  );
};

const CartButton = ({ navigate, cartItems }) => {
  return (
    <button className="basket" onClick={()=>navigate("/cart")}>
      <i className="fa-solid fa-bag-shopping"></i>
      <span>{cartItems.length}</span>
    </button>
  );
};
export default Nav;