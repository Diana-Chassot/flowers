import { useSelector, useDispatch } from "react-redux";
import { closeForm } from "../../features/formSlice";
import { useFormik } from "formik";
import { PatternFormat } from 'react-number-format';
import { removeFromCart } from "../../features/shopingCartSlice";
import { useState } from "react";
import MessageSuccess from "../MessageSuccess";
import * as Yup from "yup";

function Form() {
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const isFormOpen = useSelector((state) => state.form.onOpen);
  const cartProducts = useSelector((state) => state.shopingCart.items);
  const dispatch = useDispatch();

  const handleSubmit=(values)=>{
    if (cartProducts) {
      cartProducts.forEach((product) => {
        dispatch(removeFromCart(product.sku));
      });
      setIsSuccessOpen(true)
    }
    console.log("Sold items:", cartProducts);
    console.log("Client delivery details::", values);
    hideForm();
  };

  const hideForm = () => {
    dispatch(closeForm());
  };
  
  const validationSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(3, "First Name must be at least 3 characters")
      .max(15, "First Name must be 15 characters or less")
      .required("Required"),
    lastName: Yup.string()
      .min(3, "Last Name must be at least 3 characters")
      .max(15, "Last Name must be 15 characters or less")
      .required("Required"),
    street: Yup.string().required("Required"),
    city: Yup.string().required("Required"),
    houseNumber: Yup.string().required("Required"),
    phone: Yup.string()
    .required("Required"),

  });

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      age: "",
      street: "",
      houseNumber: "",
      city: "",
      phone: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });

  return (
    <>
      {isFormOpen && (
          <div className="client-form">
            <h1>Secret Garden Flowers</h1>
            <h5>Please enter your delivery details:</h5>

            <form onSubmit={formik.handleSubmit}>
              <div className="form-control">
                <label>First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.firstName && formik.errors.firstName && (
                  <p className="error-message">{formik.errors.firstName}</p>
                )}
              </div>
              <div className="form-control">
                <label>Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formik.values.lastName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.lastName && formik.errors.lastName && (
                  <p className="error-message">{formik.errors.lastName}</p>
                )}
              </div>
              
              <fieldset className="form-control" htmlFor="Adress">
                <legend>Adress</legend>
                <label>City</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formik.values.city}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.city && formik.errors.city && (
                  <p className="error-message">{formik.errors.city}</p>
                )}
                <label>Street</label>
                <input
                  type="text"
                  name="street"
                  value={formik.values.street}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.street && formik.errors.street && (
                  <p className="error-message">{formik.errors.street}</p>
                )}
                <label>House Number</label>
                <input
                  type="text"
                  name="houseNumber"
                  value={formik.values.houseNumber}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.houseNumber && formik.errors.houseNumber && (
                  <p className="error-message">{formik.errors.houseNumber}</p>
                )}
              </fieldset>
              <div className="form-control">
                <label>Phone</label>
                <PatternFormat
                  format="(+##) ### ## ## ##" allowEmptyFormatting mask="_"
                  name="phone"
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.phone && formik.errors.phone && (
                  <p className="error-message">{formik.errors.phone}</p>
                )}
              </div>
              <div>
                <button type="submit" className="btn btn--light">
                  Submit
                </button>
                <button type="cancel" className="btn btn--light" onClick={hideForm}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
      )}
      <MessageSuccess onOpen={isSuccessOpen} setOnOpen={setIsSuccessOpen} />
    </>

  );
}

export default Form;
