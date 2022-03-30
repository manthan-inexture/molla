import { useFormik } from "formik";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { updateData } from "./redux/Product/productAction";

const validationSchema = Yup.object({
  title: Yup.string().required("Required"),
  description: Yup.string().required("Required"),
  category: Yup.string().required("Required"),
  price: Yup.string().required("Required"),
  rate: Yup.string().required("Required"),
  count: Yup.string().required("Required"),
  image: Yup.string().required("Required"),
});

const UpdateForm = (data) => {
  const dispatch = useDispatch();

  const [displayimage, setDisplayImage] = useState(data.data.image);

  const initialValues = {
    title: data.data.title,
    description: data.data.description,
    category: data.data.category,
    price: data.data.price,
    rate: data.data.rating.rate,
    count: data.data.rating.count,
    image: "",
  };
  const onSubmit = (values) => {
    console.log("updated data", values, "id", data.data.id);
    dispatch(updateData(values, data.data.id));
  };

  const formik2 = useFormik({
    initialValues,
    enableReinitialize: true,
    onSubmit,
    validationSchema,
  });
  // console.log(formik2.initialValues);
  // console.log(formik2.errors);
  return (
    <>
      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id={`exampleModal${data.i}`}
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl">
          <form onSubmit={formik2.handleSubmit}>
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Update Data
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
                        title
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="title"
                        name="title"
                        onChange={formik2.handleChange}
                        onBlur={formik2.handleBlur}
                        value={formik2.values.title}
                      />
                      {formik2.errors.title && formik2.touched.title ? (
                        <p>{formik2.errors.title}</p>
                      ) : null}
                    </div>
                    <div className="mb-3">
                      <label htmlFor="description" className="form-label">
                        description
                      </label>

                      <textarea
                        className="form-control"
                        placeholder="Leave a comment here"
                        id="description"
                        name="description"
                        onChange={formik2.handleChange}
                        onBlur={formik2.handleBlur}
                        value={formik2.values.description}
                      ></textarea>
                      {formik2.errors.description &&
                      formik2.touched.description ? (
                        <p>{formik2.errors.description}</p>
                      ) : null}
                    </div>
                    <div className="mb-3">
                      <label htmlFor="category" className="form-label">
                        category
                      </label>
                      <select
                        className="form-select"
                        name="category"
                        id="category"
                        onChange={formik2.handleChange}
                        onBlur={formik2.handleBlur}
                        value={formik2.values.category}
                      >
                        <option selected>Open this select menu</option>
                        <option value="men's clothing">Men's Clothing</option>
                        <option value="jewelery">Jewelery</option>
                        <option value="electronics">Electronics</option>
                        <option value="women's clothing">
                          Women's Clothing
                        </option>
                      </select>
                      {formik2.errors.category && formik2.touched.category ? (
                        <p>{formik2.errors.category}</p>
                      ) : null}
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="rate" className="form-label">
                            rate
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="rate"
                            onChange={formik2.handleChange}
                            onBlur={formik2.handleBlur}
                            value={formik2.values.rate}
                          />
                          {formik2.errors.rate && formik2.touched.rate ? (
                            <p>{formik2.errors.rate}</p>
                          ) : null}
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="count" className="form-label">
                            count
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="count"
                            onChange={formik2.handleChange}
                            onBlur={formik2.handleBlur}
                            value={formik2.values.count}
                          />
                          {formik2.errors.count && formik2.touched.count ? (
                            <p>{formik2.errors.count}</p>
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
                            price
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="price"
                            onChange={formik2.handleChange}
                            onBlur={formik2.handleBlur}
                            value={formik2.values.price}
                          />
                          {formik2.errors.price && formik2.touched.price ? (
                            <p>{formik2.errors.price}</p>
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
                            onChange={formik2.handleChange}
                            onBlur={formik2.handleBlur}
                            value={formik2.values.image}
                          />
                          {formik2.errors.image && formik2.touched.image ? (
                            <p>{formik2.errors.image}</p>
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
                  Update Product
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdateForm;
