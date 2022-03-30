import React,{useState} from 'react'
import Register from './Register'
import Signin from './Signin'

function RegisterAndsignin() {
  return (
    <div>
      {/* Sign in / Register Modal */}
      <div>
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <div className="form-box">
                <div className="form-tab">
                  <ul className="nav nav-pills nav-fill nav-border-anim" role="tablist">
                    <li className="nav-item">
                      <a className="nav-link active" id="signin-tab" data-toggle="tab" href="#signin" role="tab" aria-controls="signin" aria-selected="true">Sign In</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" id="register-tab" data-toggle="tab" href="#register" role="tab" aria-controls="register" aria-selected="false">Register</a>
                    </li>
                  </ul>
                  <div className="tab-content" id="tab-content-5">
                    <Signin />
                    <Register />
                  </div>{/* End .tab-content */}
                </div>{/* End .form-tab */}
              </div>{/* End .form-box */}
            </div>{/* End .modal-body */}
          </div>{/* End .modal-content */}
        </div>{/* End .modal-dialog */}
      </div>{/* End .modal */}
    </div>
  )
}

export default RegisterAndsignin