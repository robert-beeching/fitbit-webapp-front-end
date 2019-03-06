import React, { Component, Fragment } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.scss";
import Header from "./components/Header";
import axios from "axios";
import { Router, Route, Switch } from "react-router-dom";
import NotFound from "./components/NotFound";
import Profile from "./components/Profile";
import Steps from "./components/Steps";
import Sleep from "./components/Sleep";
import Login from "./components/Login";
import history from "./history";
import Logout from "./components/Logout";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        displayName: "",
        fullName: "",
        dateOfBirth: "",
        height: "",
        weight: "",
        aboutMe: "",
        memberSince: "",
        avatar: ""
      },
      steps: [],
      currentSection: "",
      loggedIn: false
    };
    this.state.retrievedProfile = false;
  }

  componentDidMount() {
    //Check if the URL contains authorized parameter, if it doesn't, send to /login route
    this.checkForLogin();
  }

  checkForLogin() {
    axios
      .get("/auth/session")
      .then(response => {
        if (response.data.loggedIn) {
          this.setState({ loggedIn: true });
          history.push("/profile");
        } else {
          history.push("/login");
        }
      })
      .catch(error => {
        console.log(error);
      });
  }

  updateCurrentSection = sectionName => {
    this.setState({ currentSection: sectionName });
  };

  retrieveProfileInfo = () => {
    if (this.state.retrievedProfile) {
      return;
    }

    axios
      .get("/api/profile")
      .then(response => {
        console.log("got profile info");
        this.setState({
          user: response.data,
          retrievedProfile: true
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  retrieveSteps = () => {
    axios
      .get("/api/steps")
      .then(response => {
        console.log("got steps info");
        this.setState({
          steps: response.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  handleLogin = () => {
    window.location.assign("/auth/authorize");
  };

  handleLogout = () => {
    axios
      .get("/auth/logout")
      .then(response => {
        window.location.assign("/");
      })
      .catch(error => {
        console.log("Error logging out");
      });
  };

  handleProfileInputChange = event => {
    const updatedUser = { ...this.state.user };
    updatedUser[event.target.name] = event.target.value;
    this.setState({ user: updatedUser });
    console.log("profile form input changed - App component");
  };

  updateProfile = () => {};

  render() {
    return (
      <Fragment>
        <Header
          loggedIn={this.state.loggedIn}
          currentSection={this.state.currentSection}
          avatarUrl={this.state.user.avatar}
        />
        <main className="main container py-3 px-3">
          <Router history={history}>
            <Switch>
              <Route
                exact
                path="/login"
                render={routeProps => (
                  <Login {...routeProps} handleLogin={this.handleLogin} />
                )}
              />
              <Route
                exact
                path="/profile"
                render={routeProps => (
                  <Profile
                    {...routeProps}
                    retrieveProfileInfo={this.retrieveProfileInfo}
                    user={this.state.user}
                    updateCurrentSection={this.updateCurrentSection}
                    handleInputChange={this.handleProfileInputChange}
                  />
                )}
              />
              <Route
                exact
                path="/steps"
                render={routeProps => (
                  <Steps
                    {...routeProps}
                    updateCurrentSection={this.updateCurrentSection}
                    steps={this.state.steps}
                    retrieveSteps={this.retrieveSteps}
                  />
                )}
              />
              <Route
                exact
                path="/sleep"
                render={routeProps => (
                  <Sleep
                    {...routeProps}
                    updateCurrentSection={this.updateCurrentSection}
                  />
                )}
              />
              <Route
                exact
                path="/logout"
                render={routeProps => (
                  <Logout handleLogout={this.handleLogout} />
                )}
              />
              <Route component={NotFound} />
            </Switch>
          </Router>
        </main>
      </Fragment>
    );
  }
}

export default App;
