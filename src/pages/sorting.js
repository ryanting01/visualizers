import React, { Component } from "react";
// import NavBar from "./components/navBar/navbar.jsx";
import SortingVisualizer from "../components/sortingVisualizer/sortingVisualizer";
import styled from "styled-components";
import Slider from "../components/sliders/sizeSlider";
import Slider1 from "../components/sliders/speedSlider";
import NavBar from "../components/navBar/navbar";

const Styles = styled.div``;

class sorting extends Component {
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
          <NavBar />
          <div className="App">
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

export default sorting;
