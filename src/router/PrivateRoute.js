import React, { useState } from 'react'
import { Outlet, useNavigate,Navigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

const PrivateRoute = () => {
  const islogin = useSelector((state) => state.usersignin.isauth);
  console.log(islogin);
  return (
    <>
      {
        islogin == true ?
          <Outlet /> : <Navigate to="/signin" />
      }
    </>
  )
}

export default PrivateRoute