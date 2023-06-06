import { useSelector, useDispatch } from "react-redux";
import { closeForm } from "../../features/formSlice";

function Form() {
  const isFormOpen = useSelector((state) => state.form.onOpen);
  const dispatch = useDispatch();

  const hideForm = () => {
    dispatch(closeForm());
  };

  return (
    <>
      {isFormOpen && (
        <div className="client-form-wrapper" onClick={hideForm}>
          <div className="client-form" onClick={(e) => e.stopPropagation()}>
            <h1>Secret Garden Flowers</h1>
            <h5>Please enter your delivery details:</h5>
            <form className="form">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" />
              <br />
              <label htmlFor="lastName">Last Name</label>
              <input type="text" id="lastName" name="lastName" />
              <br />
              <label htmlFor="age">Age</label>
              <input type="text" id="age" name="age" />
              <br />
              <label htmlFor="address">Address</label>
              <input type="text" id="address" name="address" />
              <br />
              <label htmlFor="phone">Phone</label>
              <input type="text" id="phone" name="phone" />
              <br />
              <button type="submit" className="btn">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default Form;
