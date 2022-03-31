import React from "react";

const Order = () => {
  return (
    <div>
      <div className="wrapper">
        {/* Navbar */}

        {/* Content Wrapper. Contains page content */}
        <div className="content-wrapper">
          {/* Content Header (Page header) */}
          <div className="content-header">
            <div className="container-fluid">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">FirstName</th>
                    <th scope="col">LastName</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone</th>
                    <th scope="col">StreetAdress1</th>
                    <th scope="col">StreetAdress2</th>
                    <th scope="col">City</th>
                    <th scope="col">Postcode</th>
                    <th scope="col">State</th>
                    <th scope="col">Country</th>
                    <th scope="col">OrderNotes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                  </tr>
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
  );
};

export default Order;
