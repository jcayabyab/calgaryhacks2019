import React, { Component } from "react";
import { checkServer } from "../dev/actions/dev";
import { connect } from "react-redux";

class ServerWarning extends Component {
  componentDidMount() {
    this.props.checkServer();
  }

  render() {
    return (
      <div
        style={{
          backgroundColor: "red",
          color: "white",
          marginBottom: "10px",
          textAlign: "center"
        }}
      >
        {!this.props.serverStatus && "The server is not running."}
      </div>
    );
  }
}

export default connect(
  ({ serverStatus }) => ({
    serverStatus
  }),
  { checkServer }
)(ServerWarning);
