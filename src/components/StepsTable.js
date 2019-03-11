import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

class StepsTable extends Component {
  render() {
    return (
      <Fragment>
        <div className="row">
          <div className="col-12">
            <h2>Steps table</h2>
            <div className="table-container">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Date:</th>
                    <th scope="col">Amount:</th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.steps.map((stepObj, index) => {
                    return (
                      <tr key={index}>
                        <td>{stepObj.dateTime}</td>
                        <td>{stepObj.value}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

StepsTable.propTypes = {
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      dateTime: PropTypes.string,
      value: PropTypes.number
    })
  )
};

export default StepsTable;
