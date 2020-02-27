import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import '../index.css';

class SignUp extends Component {
    render() {
        return (
            <div>
                <form action="/sign-in" className="form-signin">
                    <h3>Sign Up</h3>
                    <label for="inputName" className="sr-only">Username</label>
                    <input type="text" id="inputName" className="form-control mt-4" placeholder="Username" required autofocus />
                    <label for="inputEmail" className="sr-only">Email address</label>
                    <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required />
                    <label for="inputPassword" className="sr-only">Password</label>
                    <input type="password" id="inputPassword" className="form-control mb-2" placeholder="Password" required />


                    {/* <Link to="/sign-in">
                    <button type="submit" className="btn btn-primary btn-block" >SignUp</button>
                </Link> */}
                    <button type="submit" className="btn btn-primary btn-block mb-3" >SignUp</button>

                    <p className="forgot-password text-center">
                        already a user? <Link to="/sign-in">Login</Link>
                    </p>
                </form>
            </div>

        );
    }
}

export default SignUp