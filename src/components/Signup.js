import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      email: "",
      password: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let userDetails = JSON.stringify(this.state)
    sessionStorage.setItem("userDetails", userDetails);
    const token = Math.random().toString(36).substr(2) + "." + Math.random().toString(36).substr(2)
    sessionStorage.setItem('token', token)
    this.props.history.push("/signin");
  };

  render() {
    
    return (
      <div className="d-flex align-items-center loginBox">
        <form onSubmit={this.handleSubmit} className="form-signin bg-white">
          <h3>Sign Up</h3>
          <input
            type="text"
            id="inputName"
            className="form-control mt-4"
            value={this.state.username}
            onChange={(e) => this.setState({ username: e.target.value })}
            placeholder="Username"
            required
          />
          <input
            type="email"
            id="inputEmail"
            className="form-control"
            value={this.state.email}
            onChange={(e) => this.setState({ email: e.target.value })}
            placeholder="Email address"
            required
          />
          <input
            type="password"
            id="inputPassword"
            value={this.state.password}
            onChange={(e) => this.setState({ password: e.target.value })}
            className="form-control mb-2"
            placeholder="Password"
            required
          />

          <div className="d-grid my-2">
            <button type="submit" className="btn btn-primary btn-block mb-3">
              SignUp
            </button>
          </div>

        </form>
      </div>
    );
  }
}
