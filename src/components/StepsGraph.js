import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

class StepsGraph extends Component {
  render() {
    this.options = {
      title: "Steps by day",
      series: [
        {
          name: "Steps",
          data: this.props.filteredStepValues
        }
      ],
      yAxis: {
        title: {
          text: "Number of Steps"
        }
      },
      xAxis: {
        categories: this.props.filteredStepDates
      },
      credits: {
        enabled: false
      }
    };

    return (
      <Fragment>
        <HighchartsReact
          highcharts={Highcharts}
          constructorType={"chart"}
          options={this.options}
        />
      </Fragment>
    );
  }
}

StepsGraph.propTypes = {
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      dateTime: PropTypes.string,
      value: PropTypes.number
    })
  )
};

export default StepsGraph;
