import PropTypes from "prop-types";
const Card = ({id,name,imageUrl,color,price,cardHeader,cardFooter}) => {

  return (
    <div className="card" id={id}>
      <div className="card__header">
        <h3>{name}</h3>
        <img src={`${process.env.PUBLIC_URL}${imageUrl}`} alt={name} />
        {cardHeader}
      </div>
      <div className="card__body">
        <ul>
          <li>Bouqet: "{name}"</li>
          <li>Color: {color}</li>
          <li>Price: {price}$</li>
        </ul>
      </div>
      <div className="card__footer">
        {cardFooter}
      </div>
    </div>
  );
};

Card.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  cardHeader: PropTypes.node,
  cardFooter: PropTypes.node
};

Card.defaultProps = {
  cardHeader: null,
  cardFooter:null
};

export default Card;
