import { useSelector, useDispatch } from "react-redux";
import { closeForm } from "../../features/formSlice";
import { useFormik } from "formik";
import * as Yup from "yup";

function Form() {
  const isFormOpen = useSelector((state) => state.form.onOpen);
  const dispatch = useDispatch();

  const hideForm = () => {
    dispatch(closeForm());
  };
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "Must be at least 3 characters")
      .max(15, "Must be 15 characters or less")
      .required("Required"),
    lastName: Yup.string()
      .min(3, "Must be at least 3 characters")
      .max(15, "Must be 15 characters or less")
      .required("Required"),
    age: Yup.number()
      .positive("Must be a positive number")
      .integer("Must be an integer")
      .required("Required"),
    address: Yup.string().required("Required"),
    phone: Yup.string().required("Required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      lastName: "",
      age: "",
      address: "",
      phone: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <>
      {isFormOpen && (
        <div className="client-form-wrapper " onClick={hideForm}>
          <div className="client-form" onClick={(event) => event.stopPropagation()}>
            <h1>Secret Garden Flowers</h1>
            <h5>Please enter your delivery details:</h5>

            <form onSubmit={formik.handleSubmit}>
              <div className="form-control">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.name && formik.errors.name && (
                  <p className="error-message">{formik.errors.name}</p>
                )}
              </div>
              <div className="form-control">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formik.values.lastName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.lastName && formik.errors.lastName && (
                  <p className="error-message">{formik.errors.lastName}</p>
                )}
              </div>
              <div className="form-control">
                <label htmlFor="age">Age</label>
                <input
                  type="number"
                  id="age"
                  name="age"
                  value={formik.values.age}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.age && formik.errors.age && (
                  <p className="error-message">{formik.errors.age}</p>
                )}
              </div>
              <div className="form-control">
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formik.values.address}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.address && formik.errors.address && (
                  <p className="error-message">{formik.errors.address}</p>
                )}
              </div>
              <div className="form-control">
                <label htmlFor="phone">Phone</label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
              <div>
                <button type="submit" className="btn">
                  Submit
                </button>
                <button type="cancel" className="btn" onClick={hideForm}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default Form;
