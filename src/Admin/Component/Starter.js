import React from "react";

const Starter = () => {
  return (
    <div>
      <div className="wrapper">
        {/* Content Wrapper. Contains page content */}
        <div className="content-wrapper">
          {/* Content Header (Page header) */}
          <div className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6">
                  <h1 className="m-0">Welcome Admin</h1>
                </div>
                {/* /.col */}
                {/* /.col */}
              </div>
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

export default Starter;
