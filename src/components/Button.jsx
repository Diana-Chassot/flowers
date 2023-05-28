import PropTypes from "prop-types";

function Button({className, backgroundColor, text, onClick }) {
  return (
    <button
      className={className}
      style={{ backgroundColor: backgroundColor }}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
Button.propTypes = {
  className: PropTypes.string,
  backgroundColor: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  className: ""
};

export default Button;