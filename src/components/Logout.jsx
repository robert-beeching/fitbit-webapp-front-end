import React, { Component } from "react";
import PropTypes from "prop-types";

class Logout extends Component {
  componentDidMount() {
    this.props.handleLogout();
  }

  render() {
    return <h2>Logging you out...</h2>;
  }
}

Logout.propTypes = {
  handleLogout: PropTypes.func.isRequired
};

export default Logout;
