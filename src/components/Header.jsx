function Header({ cartItems, favoriteItems }) {
  const favoriteIconClass = favoriteItems.length > 0 ? 'fa-solid' : 'fa-regular';

  return (
    <header className="header">
      <menu className="header__menu">
        <div>
          <a className="header__brand" href="#">
            <img className="header__logo" src="./img/logo.png" alt="logo" />
            <h2>Secret Garden</h2>
          </a>
        </div>
        <div className="header__icons">
          <button className="favorite">
            <i className={`${favoriteIconClass} fa-star`}></i>
            <span>{favoriteItems.length}</span>
          </button>
          <button className="basket">
            <i className="fa-solid fa-cart-shopping"></i>
            <span>{cartItems.length}</span>
          </button>
        </div>
      </menu>

      <div className="header__content">
        <div className="container">
          <div className="header__content__wrapper">
            <h1>Secret Garden Flowers</h1>
            <p>
              Floral Garden Flower Shop is a charming and reputable boutique
              flower shop that caters to flower enthusiasts and those seeking
              exquisite floral arrangements.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
