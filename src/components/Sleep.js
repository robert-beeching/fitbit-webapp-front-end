import React from "react";

class Sleep extends React.Component {
  componentWillMount() {
    this.props.updateCurrentSection("sleep");
  }

  render() {
    return <h2>Sleep</h2>;
  }
}

export default Sleep;
