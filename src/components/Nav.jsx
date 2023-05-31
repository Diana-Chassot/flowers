import { Link, useNavigate } from "react-router-dom";

const Logo = () => (
  <Link to="/" className="nav__brand">
    <img className="nav__logo" src="./img/logo.png" alt="logo" />
    <h2>Secret Garden</h2>
  </Link>
);

const HomeButton = () => {
  const navigate = useNavigate();

  const handleNavigateToHome = () => {
    navigate("/");
  };

  return (
    <button className="home" onClick={handleNavigateToHome}>
      <i className="fa-solid fa-house" style={{ color: "#990000" }}></i>
    </button>
  );
};

const FavoritesButton = ({ favoriteItems }) => {
  const navigate = useNavigate();
  const favoriteIconClass = favoriteItems.length > 0 ? "fa-solid" : "fa-regular";

  const handleNavigateToFavorites = () => {
    navigate("/favorites");
  };

  return (
    <button className="favorite" onClick={handleNavigateToFavorites}>
      <i className={`${favoriteIconClass} fa-star`}></i>
      <span>{favoriteItems.length}</span>
    </button>
  );
};

const CartButton = ({ cartItems }) => {
  const navigate = useNavigate();

  const handleNavigateToCart = () => {
    navigate("/cart");
  };

  return (
    <button className="basket" onClick={handleNavigateToCart}>
      <i className="fa-solid fa-cart-shopping"></i>
      <span>{cartItems.length}</span>
    </button>
  );
};

const Nav = ({ cartItems, favoriteItems }) => {
  return (
    <menu className="nav">
      <Logo />
      <div className="nav__icons">
        <HomeButton />
        <FavoritesButton favoriteItems={favoriteItems} />
        <CartButton cartItems={cartItems} />
      </div>
    </menu>
  );
};

export default Nav;
