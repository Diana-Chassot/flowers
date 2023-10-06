import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import LogoImg from "../img/logo.jpg";

const Nav = () => {
  const navigate = useNavigate();

  const favoriteProducts = useSelector((state) => state.favoriteCart);
  const cartProducts = useSelector((state) => state.shopingCart.items);

  const favoriteCartLength = favoriteProducts.length;
  const cartProductsLength = cartProducts.length;

  const Logo = () => (
    <Link to="/" className="nav__brand">
      <h2>Secret Garden</h2>
    </Link>
  );

  const HomeButton = () => (
    <button className="home" onClick={() => navigate("/")}>
      <i className="fa-solid fa-seedling" style={{ color: "#c30d0e" }}></i>
    </button>
  );

  const FavoritesButton = () => {
    const favoriteIconClass = favoriteCartLength > 0 ? "fa-solid" : "fa-regular";
    return (
      <button className="favorite" onClick={() => navigate("/favorites")}>
        <i className={`${favoriteIconClass} fa-star`}></i>
        <span>{favoriteCartLength}</span>
      </button>
    );
  };

  const CartButton = () => {
    return (
      <button className="basket" onClick={() => navigate("/cart")}>
        <i className="fa-solid fa-bag-shopping"></i>
        <span>{cartProductsLength}</span>
      </button>
    );
  };
  return (
    <menu className="nav">
      <Logo />
      <div className="nav__icons">
        <HomeButton />
        <FavoritesButton />
        <CartButton />
      </div>
    </menu>
  );
};

export default Nav;
