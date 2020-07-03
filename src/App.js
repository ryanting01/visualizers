import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/navBar/navbar.jsx";
import SortingVisualizer from "./components/sortingVisualizer/sortingVisualizer";
import ReactDOM from "react-dom";
import InputRange from "react-input-range";
import styled from "styled-components";
import Slider from "./components/sliders/sizeSlider";
import Slider1 from "./components/sliders/speedSlider";

const Styles = styled.div``;

class App extends Component {
  state = {
    size: 50,
    speed: 50,
  };

  sizeChange = (arraySize) => {
    this.setState({ size: arraySize });
  };
  speedChange = (arraySpeed) => {
    this.setState({ speed: arraySpeed });
  };

  render() {
    return (
      <>
        <Styles>
          <div className="App">
            <NavBar></NavBar>
            <SortingVisualizer
              sizeFromApp={this.state.size}
              speedFromApp={this.state.speed}
            ></SortingVisualizer>
            <div>
              <Slider color="#0074D9" getSize={this.sizeChange.bind(this)} />
              <Slider1 color="#0074D9" getSpeed={this.speedChange.bind(this)} />
            </div>
          </div>
        </Styles>
      </>
    );
  }
}

export default App;