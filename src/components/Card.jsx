import PropTypes from "prop-types";
import Button from "./Button";

const CardHeader = ({
  name,
  imageUrl,
  showFavoriteIcon,
  addToFavorite,
  isFavorite,
}) => {
  const favoriteIconClass = isFavorite
    ? "fa-solid fa-star"
    : "fa-regular fa-star";

  return (
    <div className="card__header">
      <h3>{name}</h3>
      <img src={imageUrl} alt={name} />
      {showFavoriteIcon && (
        <div className="card-icon">
          <Button
            className="favorite"
            onClick={addToFavorite}
            text={<i className={`${favoriteIconClass} fa-star`}></i>}
          />
        </div>
      )}
    </div>
  );
};

const CardBody = ({ name, color, price }) => (
  <div className="card__body">
    <ul>
      <li>Bouqet: "{name}"</li>
      <li>Color: {color}</li>
      <li>Price: {price}$</li>
    </ul>
  </div>
);

const CardFooter = ({ cardFooter }) => (
  <div className="card__footer">{cardFooter}</div>
);

const Card = ({
  id,
  name,
  imageUrl,
  color,
  price,
  showFavoriteIcon,
  addToFavorite,
  isFavorite,
  cardFooter,
}) => {
  return (
    <div className="card" id={id}>
      <CardHeader
        name={name}
        imageUrl={imageUrl}
        showFavoriteIcon={showFavoriteIcon}
        addToFavorite={addToFavorite}
        isFavorite={isFavorite}
      />
      <CardBody name={name} color={color} price={price} />
      <CardFooter cardFooter={cardFooter} />
    </div>
  );
};

Card.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  showFavoriteIcon: PropTypes.bool,
  addToFavorite: PropTypes.func,
  isFavorite: PropTypes.bool,
  cardFooter: PropTypes.node,
};

Card.defaultProps = {
  showFavoriteIcon: false,
};

export default Card;
