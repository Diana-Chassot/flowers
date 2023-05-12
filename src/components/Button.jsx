
function Button({ backgroundColor, text, onClick }) {

  return (
    <button 
        className='btn'
        style={{ backgroundColor: backgroundColor }} 
        onClick={onClick}>
        {text}
    </button>
  );
}
export default Button;