import React, { useState } from 'react'
// import { handlegooglesignin, handlesignin, handlefacebooksignin } from "./FireBaseAuth"
import useFireBaseAuth from './useFireBaseAuth'

const Signin = () => {

    const { handlesignin, handlegooglesignin } = useFireBaseAuth()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    return (
        <div className="tab-pane fade show active" id="signin" role="tabpanel" aria-labelledby="signin-tab">
            <form>
                <div className="form-group">
                    <label htmlFor="singin-email">Username or email address *</label>
                    <input type="text" className="form-control" id="singin-email" name="singin-email" onChange={e => setEmail(e.target.value)} required />
                </div>{/* End .form-group */}
                <div className="form-group">
                    <label htmlFor="singin-password">Password *</label>
                    <input type="password" className="form-control" id="singin-password" name="singin-password" onChange={e => setPassword(e.target.value)} required />
                </div>{/* End .form-group */}
                <div className="form-footer">
                    <button onClick={(e) => { handlesignin(e, email, password) }} className="btn btn-outline-primary-2">
                        <span>LOG IN</span>
                        <i className="icon-long-arrow-right" />
                    </button>
                    <span className='text-danger'>{error}</span>
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
                        <a className="btn btn-login btn-f">
                            <i className="icon-facebook-f" />
                            Login With Facebook
                        </a>
                    </div>{/* End .col-6 */}
                </div>{/* End .row */}
            </div>{/* End .form-choice */}
        </div>
    )
}

export default Signin