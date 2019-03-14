import React from "react";
import PropTypes from "prop-types";
class Sleep extends React.Component {
  constructor(props) {
    super(props);
    this.props.updateCurrentSection("sleep");
  }

  render() {
    return <h2>Sleep</h2>;
  }
}

Sleep.propTypes = {
  updateCurrentSection: PropTypes.func.isRequired
};

export default Sleep;
