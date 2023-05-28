import PropTypes from "prop-types";
import Button from "./Button";

function Card({ name, imageUrl, addToFavorite, color, price, action, isFavorite }) {
  
  const favoriteIconClass = isFavorite ? 'fa-solid fa-star' : 'fa-regular fa-star';
  
  return (
    <div className="card">
      <div className="card__header">
        <h3>{name}</h3>
        <img src={imageUrl} alt={name} />
        <div className="card-icon">
          <Button
            className="favorite"
            onClick={addToFavorite}
            text={<i className={`${favoriteIconClass} fa-star`}></i>}
          />
        </div>
      </div>
      <div className="card__body">
        <ul>
          <li>Bouqet: "{name}"</li>
          <li>Color: {color}</li>
          <li>Price: {price}$</li>
        </ul>
      </div>
      <div className="card__footer">
        <Button className="btn" text="Add to Basket" onClick={action} />
      </div>
    </div>
  );
}

Card.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  addToFavorite: PropTypes.func.isRequired,
  action: PropTypes.func.isRequired,
  isFavorite: PropTypes.bool.isRequired,
};

export default Card;
