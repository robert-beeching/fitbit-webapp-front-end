import React, { Fragment } from "react";
import ButtonGroup from "./generic/ButtonGroup";
import StepsTable from "./StepsTable";
import StepsGraph from "./StepsGraph";

class Steps extends React.Component {
  constructor(props) {
    super(props);
    this.displayTypeButtons = {
      groupName: "displayType",
      buttons: [
        {
          text: "Graph",
          name: "graph"
        },
        {
          text: "Table",
          name: "table"
        }
      ]
    };
    this.timePeriodButtons = {
      groupName: "timePeriod",
      buttons: [
        {
          text: "7d",
          name: "7"
        },
        {
          text: "30d",
          name: "30"
        },
        {
          text: "90d",
          name: "90"
        }
      ]
    };
    this.state = {
      buttonGroupValues: {}
    };

    this.state.buttonGroupValues[
      this.displayTypeButtons.groupName
    ] = this.displayTypeButtons.buttons[0].name;
    this.state.buttonGroupValues[
      this.timePeriodButtons.groupName
    ] = this.timePeriodButtons.buttons[0].name;
    this.handleOptionsButtonClick = this.handleOptionsButtonClick.bind(this);
  }

  componentWillMount() {
    this.props.updateCurrentSection("steps");
  }

  componentDidMount() {
    if (!this.props.steps.length) {
      this.props.retrieveSteps();
    }
  }

  handleOptionsButtonClick(groupName, name) {
    const updatedbuttonGroupValues = { ...this.state.buttonGroupValues };
    updatedbuttonGroupValues[groupName] = name;
    this.setState({
      buttonGroupValues: updatedbuttonGroupValues
    });
  }

  render() {
    const timePeriod = this.state.buttonGroupValues.timePeriod;
    const stepValues = this.props.steps.length;
    const refinedStepsArray = this.props.steps.slice(
      stepValues - timePeriod,
      stepValues
    );
    let filteredStepValues = [],
      filteredStepDates = [];

    refinedStepsArray.forEach(stepValueEntry => {
      filteredStepValues.push(stepValueEntry.value);
      filteredStepDates.push(stepValueEntry.dateTime);
    });

    return (
      <Fragment>
        <h1>Steps</h1>
        <div className="steps">
          <div className="row steps__button-row">
            <div className="steps__button-row-label col-sm-3 col-lg-2">
              <span>Display type:</span>
            </div>
            <div className="col-sm-9 col-lg-10">
              <ButtonGroup
                buttons={this.displayTypeButtons.buttons}
                activeButtonKey={
                  this.state.buttonGroupValues[
                    this.displayTypeButtons.groupName
                  ]
                }
                groupName="displayType"
                handleButtonClick={this.handleOptionsButtonClick}
              />
            </div>
          </div>
          <div className="row steps__button-row">
            <div className="steps__button-row-label col-sm-3 col-lg-2">
              <span>Period:</span>
            </div>
            <div className="col-sm-3 col-lg-4">
              <ButtonGroup
                buttons={this.timePeriodButtons.buttons}
                activeButtonKey={
                  this.state.buttonGroupValues[this.timePeriodButtons.groupName]
                }
                groupName="timePeriod"
                handleButtonClick={this.handleOptionsButtonClick}
              />
            </div>
            <div className="col-6" />
          </div>
        </div>

        {/* <StepsGraph steps={this.props.steps}/> */}
        {this.state.buttonGroupValues.displayType === "table" ? (
          <StepsTable steps={refinedStepsArray} />
        ) : (
          <StepsGraph
            filteredStepValues={filteredStepValues}
            filteredStepDates={filteredStepDates}
          />
        )}
      </Fragment>
    );
  }
}

export default Steps;
