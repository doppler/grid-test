import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header">Header</div>
        <div className="tools-menu">Tools menu</div>
        <div className="toolbar">
          <div className="title">Toolbar header</div>
          <div className="content">Toolbar content</div>
        </div>
        <div className="panes">Panes</div>
        <div className="footer">Footer</div>
      </div>
    );
  }
}

export default App;
