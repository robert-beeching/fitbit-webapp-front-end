import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

class ButtonGroup extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.handleButtonClick(
      this.props.groupName,
      e.target.getAttribute("name")
    );
  }

  render() {
    return (
      <Fragment>
        <div className="btn-group" role="group" aria-label="Button group">
          {this.props.buttons.map((button, index) => {
            return (
              <button
                className={
                  "btn btn-primary " +
                  (this.props.activeButtonKey === button.name ? "active" : "")
                }
                type="button"
                name={button.name}
                onClick={this.handleClick}
                key={button.name}
                data-key={index}
              >
                {button.text}
              </button>
            );
          })}
        </div>
      </Fragment>
    );
  }
}

ButtonGroup.propTypes = {
  buttons: PropTypes.arrayOf(
    PropTypes.shape({ name: PropTypes.string, text: PropTypes.string })
  ).isRequired
};

export default ButtonGroup;
