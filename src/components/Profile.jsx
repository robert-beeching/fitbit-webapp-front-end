import React, { Component } from "react";
import PropTypes from "prop-types";
import ProfileForm from "./ProfileForm";

class Profile extends Component {
  componentWillMount() {
    this.props.updateCurrentSection("profile");
  }

  componentDidMount() {
    this.props.retrieveProfileInfo();
  }

  render() {
    const profileInfo = this.props.user;
    return (
      <div className="row">
        <div className="col-12">
          <div className="row profile-head">
            <div className="profile-head__img col-sm-2">
              <img
                src={profileInfo.avatar}
                className="img-fluid img-thumbnail"
                alt="profile"
              />
            </div>
            <div className="profile-head__name col-sm-10">
              <h1>{this.props.user.displayName}</h1>
            </div>
          </div>
          <ProfileForm
            handleInputChange={this.props.handleInputChange}
            user={this.props.user}
          />
        </div>
      </div>
    );
  }
}
export default Profile;

Profile.propTypes = {
  profile: PropTypes.object
};
