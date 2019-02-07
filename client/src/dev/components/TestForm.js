import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Row, Col, Form, FormGroup, Label, Input } from "reactstrap";
import { testRoute } from "../actions/dev";
import styled from "styled-components";

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
`;

/**
 * Accessible at /dev
 */
const DataField = ({ name, value, onKeyChange, onValueChange, onDelete }) => {
  return (
    <Row>
      <Col md={5}>
        <FormGroup>
          <Label>Key:</Label>
          <Input type="text" value={name} onChange={onKeyChange.bind(this)} />
        </FormGroup>
      </Col>
      <Col md={6}>
        <FormGroup>
          <Label>Value:</Label>
          <Input
            type="text"
            value={value}
            onChange={onValueChange.bind(this)}
          />
        </FormGroup>
      </Col>
      {/* Style centers delete button */}
      <Col
        md={1}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Button color="danger" onClick={onDelete.bind(this)}>
          Delete
        </Button>
      </Col>
    </Row>
  );
};

class ExampleForm extends Component {
  // idValue needed for deletion
  // dataFields: id, key, value
  state = { routeValue: "/", idValue: 1, dataFields: [] };

  handleSubmit(event) {
    const reqBody = {};

    this.state.dataFields.forEach(({ key, value }) => {
      reqBody[key] = value;
    });

    this.props.testRoute(this.state.routeValue, reqBody);

    event.preventDefault();
  }

  renderFields() {
    return this.state.dataFields.map(field => (
      <DataField
        key={field.id}
        name={field.key} // called name not to conflict with iteration key
        value={field.value}
        onKeyChange={e => this.handleDataFieldKeyChange(e, field.id)}
        onValueChange={e => this.handleDataFieldValueChange(e, field.id)}
        onDelete={() => this.deleteDataField(field.id)}
      />
    ));
  }

  addDataField() {
    const dataFields = [...this.state.dataFields];

    // initializes empty data field set
    dataFields.push({ id: this.state.idValue, key: "", value: "" });

    // increments idValue, changes state
    this.setState(prevState => ({
      idValue: prevState.idValue + 1,
      dataFields
    }));
  }

  handleDataFieldKeyChange(event, id) {
    const dataFields = [...this.state.dataFields].map(field => {
      if (field.id === id) {
        field.key = event.target.value;
      }

      return field;
    });

    this.setState({ dataFields });
  }

  handleDataFieldValueChange(event, id) {
    const dataFields = [...this.state.dataFields].map(field => {
      if (field.id === id) {
        field.value = event.target.value;
      }

      return field;
    });

    this.setState({ dataFields });
  }

  deleteDataField(id) {
    const dataFields = this.state.dataFields.filter(field => field.id !== id);

    this.setState({ dataFields });
  }

  handleRouteChange(event) {
    this.setState({ routeValue: event.target.value });
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit.bind(this)}>
        <FormGroup>
          <Label>Route:</Label>
          <Input
            type="text"
            value={this.state.routeValue}
            onChange={this.handleRouteChange.bind(this)}
          />
        </FormGroup>
        <div>{this.renderFields()}</div>
        <Buttons>
          <Button color="success" onClick={this.addDataField.bind(this)}>
            Add data field
          </Button>
          <Button color="primary" onClick={this.handleSubmit.bind(this)}>
            Submit
          </Button>
        </Buttons>
      </Form>
    );
  }
}

export default connect(
  null,
  { testRoute }
)(ExampleForm);
