import React, { Component } from "react";
import axios from "axios";
import CalcField from "./CalcField";

class CalculatorHome extends Component {
  state = { double: "", square: "", reverse: "" };

  /**
   * Handles the request sending and state updating
   * @param {string} route route for axios request
   * @param {string} input string to send to backend server
   */
  async handleRequest(route, input) {
    try {
      // want JS object in {input: number}
      const res = await axios.post(`/api/calculator/${route}`, { input });
      this.setState({ [route]: res.data.result.toString() });
    } catch (err) {
      this.setState({
        [route]: `Route ${route} is not implemented correctly.`
      });
    }
  }

  render() {
    return (
      <div>
        <div style={{ margin: "10px 0px" }}>
          <p>Here are your tasks:</p>
          <ol>
            <li>
              {
                "Create a route to /api/calculator/square that returns a JS object of the type {result: *squared input*} (Done as an example)"
              }
            </li>
            <li>
              {
                "Create a route to /api/calculator/double that returns a JS object of the type {result: *double the input*}"
              }
            </li>
            <li>
              {
                "Create a route to /api/calculator/reverse that returns a JS object of the type {result: *reversed input*}"
              }
            </li>
          </ol>
        </div>
        <CalcField
          label="Calculate the square of a number! Implemented for you."
          onSubmit={input => this.handleRequest("square", input)}
          result={this.state.square}
        />
        <CalcField
          label="Calculate the double of a number!"
          onSubmit={input => this.handleRequest("double", input)}
          result={this.state.double}
        />
        <CalcField
          label="Get a reversed string!"
          onSubmit={input => this.handleRequest("reverse", input)}
          result={this.state.reverse}
        />
      </div>
    );
  }
}

export default CalculatorHome;
