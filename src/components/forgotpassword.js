import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class forgotpassword extends Component {
    render() {
        return (
            <div className="container d-flex justify-content-center mt-4">
                <div className="row mt-4">
                    <div className="col-md-12">
                        <h3>Reset your password</h3>
                        <form>
                            <div className="form-group">
                                <input type="password" placeholder="create new password" className="form-control" />
                            </div>
                            <Link to="/sign-in">

                            <button type="submit" className="btn btn-sm btn-primary" >Reset Password</button>
                            </Link>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default forgotpassword
