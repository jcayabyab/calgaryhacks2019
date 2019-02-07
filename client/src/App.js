import React, { Component } from "react";
import { Container } from "reactstrap";
import ServerWarning from "./components/ServerWarning";
import TestForm from "./dev/components/TestForm";
import Home from "./components/Home";
import { BrowserRouter, Route } from "react-router-dom";
import CalculatorHome from "./dev/components/calculator/CalculatorHome";

class App extends Component {
  render() {
    return (
      <div>
        <ServerWarning />
        <BrowserRouter>
          <Container>
            <Route exact path="/dev" component={TestForm} />
            <Route exact path="/calculator" component={CalculatorHome} />
            <Route exact path="/" component={Home} />
          </Container>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
