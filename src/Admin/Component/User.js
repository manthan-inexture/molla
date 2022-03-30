import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteuserData, getuserData } from "./redux/User/userAction";

const User = () => {
  const user = useSelector((state) => state.Users.user);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getuserData());
  }, []);

  const handledelete = (id) => {
    dispatch(deleteuserData(id));
  };
  console.log(user);
  return (
    <div>
      <div className="wrapper">
        {/* Content Wrapper. Contains page content */}
        <div className="content-wrapper">
          {/* Content Header (Page header) */}
          <div className="content-header">
            <div className="container-fluid">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Email</th>
                    <th scope="col">Username</th>
                    <th scope="col">Password</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {user.map((item, i) => (
                    <tr key={i}>
                      <th scope="row">{item.id}</th>
                      <td>{item.email}</td>
                      <td>{item.username}</td>
                      <td>{item.password}</td>
                      <td>
                        <button
                          className="btn btn-outline-danger "
                          onClick={() => handledelete(item.id)}
                        >
                          delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {/* /.row */}
            </div>
            {/* /.container-fluid */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
