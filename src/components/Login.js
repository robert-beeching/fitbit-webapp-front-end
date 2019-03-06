import React, { Component } from "react";
import PropTypes from "prop-types";

class Login extends Component {
  render() {
    if (!this.props.loggedIn) {
      return (
        <div className="row">
          <div className="col-12">
            <h1>Login</h1>
            <p>You are not authorized.</p>
            <button
              className="btn btn-primary"
              onClick={this.props.handleLogin}
            >
              Authorize through Fitbit >
            </button>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}
export default Login;

Login.propTypes = {
  authCode: PropTypes.string
};
