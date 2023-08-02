import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class ForgotPassword extends Component {
    render() {
        return (
            <div className="d-flex align-items-center loginBox">
                <div className="form-signin bg-white">
                    <div className="">
                        <div className="row">
                            <div className="col-md-12">
                                <h3>Reset your password</h3>
                                <form>
                                    <div className="form-group">
                                        <input type="password" placeholder="create new password" className="form-control" />
                                    </div>

                                    <div className="">
                                     <button type="button" className="btn btn-sm btn-primary me-2" >Reset Password</button>
                                     <Link to="/" className="btn btn-sm btn-secondary" >Back</Link>
                                    </div>
                          
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
