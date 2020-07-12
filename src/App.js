import React, { Component } from "react";
import Button from "./components/Button";
import { appInsights } from './config/appInsights';
import "./assets/css/style.css";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }

  incrementCount = () => {
    this.setState({
      count: this.state.count + 1
    });

    // appInsights.trackEvent({ name: "incrementCount" });
    // appInsights.flush();
  };

  decrementCount = () => {
    this.setState({
      count: this.state.count - 1
    });
    
    // appInsights.trackEvent({ name: "decrementCount" });
    // appInsights.flush();
  };

  render() {
    let { count } = this.state;
    return (
      <div className="app">
        <div>
          <div class="count">
            <h3>Count:</h3>
            <h1>{count}</h1>
          </div>
          <div class="buttons">
            <Button title={"-"} action={this.decrementCount} />
            <Button title={"+"} action={this.incrementCount} />
          </div>
        </div>
      </div>
    );
  }
}
