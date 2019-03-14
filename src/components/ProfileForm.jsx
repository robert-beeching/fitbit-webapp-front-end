import React, { Component } from "react";

class ProfileForm extends Component {
  componentWillMount() {}

  componentDidMount() {}

  handleInputChange = event => {
    this.props.handleInputChange(event);
  };

  render() {
    const user = this.props.user;
    return (
      <form>
        <div className="form-group">
          <div className="row">
            <div className="col-sm-8 col-lg-4">
              <label htmlFor="displayName">Display name:</label>
              <input
                type="text"
                name="displayName"
                className="form-control"
                value={user.displayName}
                onChange={this.handleInputChange}
              />
            </div>
          </div>
        </div>
        <div className="form-group">
          <div className="row">
            <div className="col-sm-8 col-lg-4">
              <label htmlFor="fullName">Full name:</label>
              <input
                type="text"
                name="fullName"
                className="form-control"
                value={user.fullName}
                onChange={this.handleInputChange}
              />
            </div>
          </div>
        </div>
        <div className="form-group">
          <div className="row">
            <div className="col-sm-4 col-lg-2">
              <label htmlFor="dateOfBirth">Date of Birth:</label>
              <input
                type="text"
                name="dateOfBirth"
                className="form-control"
                value={user.dateOfBirth}
                onChange={this.handleInputChange}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <div className="form-group">
              <label htmlFor="height">Height (cm):</label>
              <input
                type="number"
                name="height"
                className="form-control"
                value={user.height}
                onChange={this.handleInputChange}
              />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form-group">
              <label htmlFor="weight">Weight (kg):</label>
              <input
                type="number"
                name="weight"
                className="form-control"
                value={user.weight}
                onChange={this.handleInputChange}
              />
            </div>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="aboutMe">About me:</label>
          <textarea
            type="text"
            name="aboutMe"
            className="form-control"
            value={user.aboutMe}
            onChange={this.handleInputChange}
            rows="3"
          />
        </div>
        <div className="form-group">
          <div className="row">
            <div className="col-sm-4 col-lg-2">
              <label htmlFor="memberSince">Member since:</label>
              <input
                type="text"
                name="memberSince"
                className="form-control"
                readOnly={true}
                value={user.memberSince}
                onChange={this.handleInputChange}
              />
            </div>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Save changes
        </button>
      </form>
    );
  }
}
export default ProfileForm;
