import React, { Fragment } from "react";

class Steps extends React.Component {
  componentWillMount() {
    this.props.updateCurrentSection("steps");
  }

  componentDidMount() {
    if (!this.props.steps.length) {
      this.props.retrieveSteps();
    }
  }

  render() {
    console.log(this.props);
    return (
      <Fragment>
        <h1>Steps</h1>
        {this.props.steps.map(stepObj => {
          return (
            <p>
              Date: {stepObj.dateTime} Value: {stepObj.value}
            </p>
          );
        })}
      </Fragment>
    );
  }
}

export default Steps;
