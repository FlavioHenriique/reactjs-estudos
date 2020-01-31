import { Component } from "react";
import "./App.css";
import React from "react";
import Calculadora from "./components/Calculadora";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Calculadora></Calculadora>
      </div>
    );
  }
}
export default App;