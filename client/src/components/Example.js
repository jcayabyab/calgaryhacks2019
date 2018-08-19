import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchExample } from "../actions";

class Example extends Component {
  componentDidMount() {
    this.props.fetchExample();
  }

  renderExample() {
    if (this.props.example.length < 1) {
      return <div>Waiting for request...</div>;
    }
    return (
      <div>
        <span style={{ fontWeight: "bold" }}>Data:</span>
        {this.props.example.map(e => (
          <div key={e._id}>{e.example}</div>
        ))}
      </div>
    );
  }

  render() {
    return (
      <div>
        <h2>Hello!</h2>
        <div>This is what is obtained from your request.</div>
        <div>{this.renderExample()}</div>
      </div>
    );
  }
}

function mapStateToProps({ example }) {
  return { example };
}

export default connect(
  mapStateToProps,
  { fetchExample }
)(Example);
