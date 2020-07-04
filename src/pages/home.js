import React, { Component } from "react";
// import NavBar from "./components/navBar/navbar.jsx";
import SortingVisualizer from "../components/sortingVisualizer/sortingVisualizer";
import styled from "styled-components";
import Slider from "../components/sliders/sizeSlider";
import Slider1 from "../components/sliders/speedSlider";
import NavBar from "../components/navBar/navbar";

const Styles = styled.div``;

class home extends Component {
  render() {
    return (
      <>
        <Styles>
          <NavBar />
          Hi, Welcome to chilli's
        </Styles>
      </>
    );
  }
}

export default home;
