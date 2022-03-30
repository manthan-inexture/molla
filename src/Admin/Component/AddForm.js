import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { addData } from "./redux/Product/productAction";
import { useDispatch, useSelector } from "react-redux";

//assign initial values
const initialValues = {
  title: "",
  description: "",
  category: "",
  price: "",
  rate: "",
  count: "",
  image: "",
};

//validation with yup object
const validationSchema = Yup.object({
  title: Yup.string().required("Required"),
  description: Yup.string().required("Required"),
  category: Yup.string().required("Required"),
  image: Yup.string().required("Required"),

  price: Yup.string()
    .required("Please Enter Price")
    .matches(/^[0-9]+$/, "please enter Number only"),
  rate: Yup.string()
    .required("Please Enter Rate")
    .matches(/^[0-9]+$/, "please enter Number only"),
  count: Yup.string()
    .required("Please Enter Count")
    .matches(/^[0-9]+$/, "please enter Number only"),
});

const AddForm = () => {
  const data = useSelector((state) => state.product.data);
  const [displayimage, setDisplayImage] = useState();
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues,
    onSubmit(values, displayimage) {
      console.log("add data", displayimage);
      dispatch(addData(values, data[data.length - 1].id));
    },
    validationSchema,
  });

  return (
    <>
      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl">
          <form onSubmit={formik.handleSubmit}>
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Add Data
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body container">
                <div className="row">
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label htmlFor="title" className="form-label">
                        Title
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="title"
                        name="title"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.title}
                      />
                      {formik.errors.title && formik.touched.title ? (
                        <p>{formik.errors.title}</p>
                      ) : null}
                    </div>
                    <div className="mb-3">
                      <label htmlFor="Description" className="form-label">
                        Description
                      </label>

                      <textarea
                        className="form-control"
                        placeholder="Leave a comment here"
                        id="Description"
                        name="description"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.description}
                      ></textarea>
                      {formik.errors.description &&
                      formik.touched.description ? (
                        <p>{formik.errors.description}</p>
                      ) : null}
                    </div>
                    <div className="mb-3">
                      <label htmlFor="category" className="form-label">
                        Category
                      </label>
                      <select
                        className="form-select"
                        name="category"
                        id="category"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.category}
                      >
                        <option>Open this select menu</option>
                        <option value="men's clothing">Men's Clothing</option>
                        <option value="jewelery">Jewelery</option>
                        <option value="electronics">Electronics</option>
                        <option value="women's clothing">
                          Women's Clothing
                        </option>
                      </select>
                      {formik.errors.category && formik.touched.category ? (
                        <p>{formik.errors.category}</p>
                      ) : null}
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="rate" className="form-label">
                            Rate
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="rate"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.rate}
                          />
                          {formik.errors.rate && formik.touched.rate ? (
                            <p>{formik.errors.rate}</p>
                          ) : null}
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="count" className="form-label">
                            Count
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="count"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.count}
                          />
                          {formik.errors.count && formik.touched.count ? (
                            <p>{formik.errors.count}</p>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="price" className="form-label">
                            Price
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="price"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.price}
                          />
                          {formik.errors.price && formik.touched.price ? (
                            <p>{formik.errors.price}</p>
                          ) : null}
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="image" className="form-label">
                            File
                          </label>
                          <input
                            type="file"
                            className="form-control"
                            id="image"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                          />
                          {formik.errors.image && formik.touched.image ? (
                            <p>{formik.errors.image}</p>
                          ) : null}
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div
                        className="mt-3"
                        style={{
                          width: "250px",
                          height: "250px",
                          border: "1px solid black",
                          borderRadius: "5px",
                          margin: "0 auto",
                        }}
                      >
                        <img
                          src={displayimage}
                          alt={displayimage}
                          style={{
                            width: "100%",
                            height: "100%",
                            padding: "10px",
                          }}
                        ></img>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="submit"
                  className="btn btn-primary"
                  // data-bs-dismiss="modal"
                >
                  Add Product
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddForm;
