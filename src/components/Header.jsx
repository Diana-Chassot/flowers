import Nav from './Nav';

function Header({ cartItems, favoriteItems}) {
  return (
    <header className="header">
      <Nav
      cartItems={cartItems} 
      favoriteItems={favoriteItems} 
      />
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
