import React, { Component } from "react";
import PropTypes from "prop-types";

class Logout extends Component {
  componentDidMount() {
    console.log("logout component mounted");
    this.props.handleLogout();
  }

  render() {
    return <h2>Logging you out...</h2>;
  }
}

Logout.propTypes = {
  profile: PropTypes.object
};

export default Logout;
