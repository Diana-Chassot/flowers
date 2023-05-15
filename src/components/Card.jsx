
function Card({ imageUrl, name, color, price, addToFavorite, cardFooter}) {
  return (
    <div className="card">
      <div className="card__header>">
        <h3>{name}</h3>
        <img src={imageUrl} alt={name} />
        <div className="card-icon">
        <button className="favorite" onClick={addToFavorite}>
          <i className="fa-regular fa-star"></i>
          </button>
        </div>
      </div>
      <div className="card__body">
        <ul>
          <li>Bouqet: "{name}"</li>
          <li>Color: {color}</li>
          <li>Price: {price}$</li>
        </ul>
      </div>
      <div className="card__footer">{cardFooter}</div>
    </div>
  );
}

export default Card;
