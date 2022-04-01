import { useFormik } from "formik";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { updateData } from "./redux/Product/productAction";

const validationSchema = Yup.object({
  title: Yup.string().required("Please Enter Title"),
  description: Yup.string().required("Please Enter Description"),
  category: Yup.string().required("Please Enter Category"),
  price: Yup.string()
    .required("Please Enter Price")
    .matches(/^[1-9]\d*(\.\d+)?$/, "Please enter Numbers only"),
  rate: Yup.string()
    .required("Please Enter Rate")
    .matches(/^[0-4]{1}[.][0-9]{1}$/, "Please enter Numbers only"),
  count: Yup.string()
    .required("Please Enter Count")
    .matches(/^[0-9]+$/, "Please enter Numbers only"),
});

const UpdateForm = (data) => {
  console.log(data.data.image, data.i);
  const dispatch = useDispatch();
  const [displayimage, setDisplayImage] = useState(null);

  const initialValues = {
    title: data.data.title,
    description: data.data.description,
    category: data.data.category,
    price: data.data.price,
    rate: data.data.rating.rate,
    count: data.data.rating.count,
    image: data.data.image,
  };
  const onSubmit = (values) => {
    let updatedvalues;
    if (displayimage) {
      updatedvalues = { ...values, image: displayimage };
    } else {
      updatedvalues = values;
    }
    console.log(updatedvalues);
    // console.log("updated data", values, "id", data.data.id);
    dispatch(updateData(updatedvalues, data.data.id));
    setDisplayImage(null);
  };
  const formik2 = useFormik({
    initialValues,
    enableReinitialize: true,
    onSubmit,
    validationSchema,
  });

  const handlefilechange = (e) => {
    formik2.values.image = URL.createObjectURL(e.target.files[0]);
    setDisplayImage(formik2.values.image);
    // console.log("hello", formik2.values.image);
  };
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
                  Update This Product
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
                        placeholder="Title"
                        onChange={formik2.handleChange}
                        onBlur={formik2.handleBlur}
                        value={formik2.values.title}
                      />
                      {formik2.errors.title && formik2.touched.title ? (
                        <p style={{ color: "red" }}>{formik2.errors.title}</p>
                      ) : null}
                    </div>
                    <div className="mb-3">
                      <label htmlFor="description" className="form-label">
                        Description
                      </label>

                      <textarea
                        className="form-control"
                        placeholder="Description"
                        id="description"
                        name="description"
                        onChange={formik2.handleChange}
                        onBlur={formik2.handleBlur}
                        value={formik2.values.description}
                      ></textarea>
                      {formik2.errors.description &&
                        formik2.touched.description ? (
                          <p style={{ color: "red" }}>
                            {formik2.errors.description}
                          </p>
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
                        onChange={formik2.handleChange}
                        onBlur={formik2.handleBlur}
                        value={formik2.values.category}
                      >
                        <option value="">Select one Category</option>
                        <option value="men's clothing">Men's Clothing</option>
                        <option value="jewelery">Jewelery</option>
                        <option value="electronics">Electronics</option>
                        <option value="women's clothing">
                          Women's Clothing
                        </option>
                      </select>
                      {formik2.errors.category && formik2.touched.category ? (
                        <p style={{ color: "red" }}>
                          {formik2.errors.category}
                        </p>
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
                            placeholder="Rate"
                            onChange={formik2.handleChange}
                            onBlur={formik2.handleBlur}
                            value={formik2.values.rate}
                          />
                          {formik2.errors.rate && formik2.touched.rate ? (
                            <p style={{ color: "red" }}>
                              {formik2.errors.rate}
                            </p>
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
                            placeholder="Count"
                            onChange={formik2.handleChange}
                            onBlur={formik2.handleBlur}
                            value={formik2.values.count}
                          />
                          {formik2.errors.count && formik2.touched.count ? (
                            <p style={{ color: "red" }}>
                              {formik2.errors.count}
                            </p>
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
                            placeholder="Price"
                            onChange={formik2.handleChange}
                            onBlur={formik2.handleBlur}
                            value={formik2.values.price}
                          />
                          {formik2.errors.price && formik2.touched.price ? (
                            <p style={{ color: "red" }}>
                              {formik2.errors.price}
                            </p>
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
                            name="image"
                            onChange={(e) => handlefilechange(e)}
                          />
                          {formik2.errors.image && formik2.touched.image ? (
                            <p style={{ color: "red" }}>
                              {formik2.errors.image}
                            </p>
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
                          src={displayimage ? displayimage : data.data.image}
                          alt={data.data.image}
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
                  Update This Product
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