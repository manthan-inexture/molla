import React, { useState } from 'react'
import useFireBaseAuth from "./useFireBaseAuth"
const Register = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const { handlesignup, handlegooglesignin } = useFireBaseAuth()

    return (
        <div className="tab-pane fade" id="register" role="tabpanel" aria-labelledby="register-tab">
            <form action="#">
                <div className="form-group">
                    <label htmlFor="register-email">Your email address *</label>
                    <input type="email" className="form-control" id="register-email" name="register-email" onChange={e => setEmail(e.target.value)} required />
                </div>{/* End .form-group */}
                <div className="form-group">
                    <label htmlFor="register-password">Password *</label>
                    <input type="password" className="form-control" id="register-password" name="register-password" onChange={e => setPassword(e.target.value)} required />
                </div>{/* End .form-group */}
                <div className="form-footer">
                    <button onClick={(e) => { handlesignup(e, email, password) }} className="btn btn-outline-primary-2">
                        <span>SIGN UP</span>
                        <i className="icon-long-arrow-right" />
                    </button>
                </div>{/* End .form-footer */}
            </form>
            <div className="form-choice">
                <p className="text-center">or sign in with</p>
                <div className="row">
                    <div className="col-sm-6">
                        <a onClick={() => { handlegooglesignin() }} className="btn btn-login btn-g">
                            <i className="icon-google" />
                            Login With Google
                        </a>
                    </div>{/* End .col-6 */}
                    <div className="col-sm-6">
                        <a href="#" className="btn btn-login  btn-f">
                            <i className="icon-facebook-f" />
                            Login With Facebook
                        </a>
                    </div>{/* End .col-6 */}
                </div>{/* End .row */}
            </div>{/* End .form-choice */}
        </div>
    )
}

export default Register