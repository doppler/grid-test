import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Header">
          <h1>Header</h1>
        </div>
        <div className="Sidebar">
          <h2>Sidebar</h2>
          <ul>
            <li>One</li>
            <li>Two</li>
            <li>Three</li>
            <li>Four</li>
          </ul>
        </div>
        <div className="Content">
          <h2>Content</h2>
        </div>
        <div className="Footer">
          <h2>Footer</h2>
        </div>
      </div>
    );
  }
}

export default App;
