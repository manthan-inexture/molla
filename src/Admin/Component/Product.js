import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteData, getData } from "./redux/Product/productAction";
import AddForm from "./AddForm";
import UpdateForm from "./UpdateForm";

const Product = () => {
  const data = useSelector(state => state.product.data);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, []);

  const handledelete = id => {
    if (window.confirm("Are you sure you want to delete this product ?")) {
      dispatch(deleteData(id));
    }
  };

  return (
    <>
      <div className="">
        <div className="wrapper">
          {/* Content Wrapper. Contains page content */}
          <div className="content-wrapper">
            {/* Content Header (Page header) */}
            <div className="content-header">
              <div className="container-fluid">
                {/* Add data */}

                {/* <!-- Button trigger modal --> */}
                <button
                  type="button"
                  className="btn btn-outline-success mb-3 pl-4 pr-4"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  Add
                </button>

                <AddForm />

                {/* Add data end */}
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">No.</th>
                      <th scope="col">Title</th>
                      <th scope="col">Description</th>
                      <th scope="col">Category</th>
                      <th scope="col">Price</th>
                      <th scope="col">Image</th>
                      <th scope="col">Rate</th>
                      <th scope="col">Count</th>
                      <th
                        scope="col"
                        colSpan="2"
                        style={{ textAlign: "center" }}
                      >
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((item, index) => (
                      <React.Fragment key={index}>
                        <tr>
                          <th scope="row">{index + 1}</th>
                          <td> {item.title} </td>
                          <td>{item.description}</td>
                          <td>{item.category}</td>
                          <td>{item.price}</td>
                          <td>
                            <img
                              src={item.image}
                              style={{ width: "250px", height: "auto" }}
                            />
                          </td>
                          <td>{item.rating.rate}</td>
                          <td>{item.rating.count}</td>
                          <td>
                            <button
                              className="btn btn-outline-danger"
                              onClick={() => handledelete(item.id)}
                            >
                              delete
                            </button>
                          </td>
                          <td>
                            {/* <!-- Button trigger modal --> */}
                            <button
                              type="button"
                              className="btn btn-outline-primary"
                              data-bs-toggle="modal"
                              data-bs-target={`#exampleModal${index}`}
                            >
                              Update
                            </button>

                            <UpdateForm data={item} i={index} />
                          </td>
                        </tr>
                      </React.Fragment>
                    ))}
                  </tbody>
                </table>
                {/* /.row */}
              </div>
              {/* /.container-fluid */}
            </div>
            {/* /.content-header */}
            {/* Main content */}
            <div className="content">{/* /.container-fluid */}</div>
            {/* /.content */}
          </div>
          {/* /.content-wrapper */}
          {/* Control Sidebar */}
        </div>
      </div>
    </>
  );
};

export default Product;
