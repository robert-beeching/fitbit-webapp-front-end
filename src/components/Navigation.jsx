import React from "react";
import { Router, Link } from "react-router-dom";
import history from "../history";
import PropTypes from "prop-types";

const Navigation = props => (
  <Router history={history}>
    <nav className="navigation">
      <div className="container">
        <ul className="navigation__list">
          <li
            className={
              "navigation__list__item " +
              (props.currentSection === "profile"
                ? "navigation__list__item--active"
                : "")
            }
          >
            <Link to="/profile">Profile</Link>
          </li>
          <li
            className={
              "navigation__list__item " +
              (props.currentSection === "steps"
                ? "navigation__list__item--active"
                : "")
            }
          >
            <Link to="/steps">Steps</Link>
          </li>
          <li
            className={
              "navigation__list__item " +
              (props.currentSection === "sleep"
                ? "navigation__list__item--active"
                : "")
            }
          >
            <Link to="/sleep">Sleep</Link>
          </li>
          <li
            className={
              "navigation__list__item " +
              (props.currentSection === "badges"
                ? "navigation__list__item--active"
                : "")
            }
          >
            <Link to="/badges">Badges</Link>
          </li>
        </ul>
        <div className="navigation__secondary-container">
          <div className="navigation__avatar">
            <Link to="/profile">
              <img
                className="navigation__avatar__img"
                src={props.avatarUrl}
                alt="avatar"
              />
            </Link>
          </div>
          <div className="navigation__logout">
            <Link to="/logout" className="btn btn-dark">
              Logout
            </Link>
          </div>
        </div>
      </div>
    </nav>
  </Router>
);

Navigation.propTypes = {
  currentSection: PropTypes.string.isRequired,
  avatarUrl: PropTypes.string.isRequired
}

export default Navigation;
