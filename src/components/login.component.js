import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class Login extends Component {
    render() {
        return (
            <div>
                <form action="/welcome" className="form-signin">
                    <h3>Login</h3>

                    <label for="inputEmail" className="sr-only">Email address</label>
                    <input type="email" id="inputEmail" className="form-control mt-3" placeholder="Email address" required autofocus />
                    <label for="inputPassword" className="sr-only">Password</label>
                    <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />

                    <div className="form-group">
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                            <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                        </div>
                    </div>

                    {/* <Link to="/welcome">
                                <button type="submit" className="btn btn-primary btn-block" >Submit</button>
                            </Link> */}
                    <button type="submit" className="btn btn-primary btn-block mb-3" >
                        Login
                            </button>
                    <p className="forgot-password text-center">
                        Forgot <Link to="/forgotpassword">password?</Link>
                        <br />
                        New user? <Link to="/sign-up">Signup</Link>
                    </p>
                </form>
            </div>

        );
    }
}

export default Login