import React, { Component } from "react";
import PropTypes from "prop-types";
import { Row, Col, Input, Label, FormGroup, Button } from "reactstrap";

/**
 * Props: onSubmit (function, accepts string), response (string), label (string)
 */
class CalcField extends Component {
  state = { fieldValue: "" };

  handleRouteChange(event) {
    this.setState({ fieldValue: event.target.value });
  }

  render() {
    return (
      <div style={{ marginBottom: "30px" }}>
        <Row>
          <Col sm={11}>
            <FormGroup>
              <Label>{this.props.label}</Label>
              <Input
                value={this.state.fieldValue}
                onChange={this.handleRouteChange.bind(this)}
              />
            </FormGroup>
          </Col>
          <Col
            sm={1}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Button
              onClick={() => {
                // returns string
                this.props.onSubmit(this.state.fieldValue);
                this.setState({ fieldValue: "" });
              }}
              color="primary"
            >
              Send
            </Button>
          </Col>
        </Row>
        <div>{`Result: ${this.props.result}`}</div>
      </div>
    );
  }
}

CalcField.propTypes = {
  onSubmit: PropTypes.func,
  result: PropTypes.string,
  label: PropTypes.string
};

export default CalcField;
