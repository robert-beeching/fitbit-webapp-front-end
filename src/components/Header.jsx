import React, { Fragment } from "react";
import Dashboard from "@material-ui/icons/Dashboard";
import Navigation from "./Navigation";
import PropTypes from "prop-types";

const Header = props => (
  <Fragment>
    <header className="header">
      <div className="container">
        <div className="logo-container">
          <Dashboard />
          <span className="logo h1">Fitness Dashboard</span>
        </div>
      </div>
    </header>
    {props.loggedIn ? (
      <Navigation
        avatarUrl={props.avatarUrl}
        currentSection={props.currentSection}
      />
    ) : null}
  </Fragment>
);

Header.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  avatarUrl: PropTypes.string.isRequired,
  currentSection: PropTypes.string.isRequired
};

export default Header;
