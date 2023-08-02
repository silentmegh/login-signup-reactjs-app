import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Login extends Component {

  constructor(props){
    super(props)    
    
    this.state = {
      email: '',
      password: '',
    }    
    
  }
  
  componentDidMount(){
    if (sessionStorage.getItem("userDetails") != null) {
      let getUserDetails = JSON.parse(sessionStorage.getItem('userDetails'))
      this.setState({
        email: getUserDetails.email,
        password: getUserDetails.password,
      })
    }else{
      this.props.history.push('/')
    }

  }
  
  handleSubmit = (e) => {
    e.preventDefault();

    console.log(this.state.email, this.state.password)
    this.props.history.push('/welcome')
  }

  render() {
    
    return (
      <div className="d-flex align-items-center loginBox">
        <form onSubmit={this.handleSubmit} className="form-signin bg-white">
          <h3>Login</h3>
          <input
            type="email"
            id="inputEmail"
            className="form-control mt-3"
            placeholder="Email address" value={this.state.email} onChange={(e)=>this.setState({email: e.target.value})}
            required
          />
          <input
            type="password"
            id="inputPassword"
            className="form-control" value={this.state.password} onChange={(e)=>this.setState({password: e.target.value})}
            placeholder="Password"
            required
          />

          <div className="form-group">
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
              />
              <label className="custom-control-label" htmlFor="customCheck1">
                Remember me
              </label>
            </div>
          </div>
          <div className="d-grid my-2">
            <button type="submit" className="btn btn-primary btn-block mb-3">
              Login
            </button>
          </div>
          <div className="forgot-password form-inline">
            <span className="me-2 pe-4"> Forgot <Link to="/forgotpassword">password?</Link></span>
            New user? <Link to="/signup">Signup</Link>
          </div>
        </form>
      </div>
    );
  }
}