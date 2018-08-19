import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Example from "./Example";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Route exact path="/" component={Example} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
