import { Link, useNavigate } from "react-router-dom";

const Logo = () => (
  <Link to="/" className="nav__brand">
    <img className="nav__logo" src="./img/The-Secret-Garden-Logo.jpg" alt="logo" />
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
      <i className="fa-solid fa-seedling"style={{ color: "#c30d0e" }}></i>
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
      <i className="fa-solid fa-bag-shopping"></i>
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
