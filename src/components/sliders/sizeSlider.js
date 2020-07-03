import React, { Component } from "react";
import styled from "styled-components";

const sliderThumbStyles = (props) => `
    width: 25px;
    height: 25px;
    background: ${props.color};
    cursor: pointer;
    outline: 5px solid #333;
    -webkit-transition: .2s;
    
`;

const Styles = styled.div`
  color: red;
  margin-top: 2rem;
  margin-bottom: 2rem;
  width 45%;
  float: left;

  .value {
    font-size: 2rem;
    color: black;
  }

  .slider {
    -webkit-appearance: none;
    height: 15px;
    border-radius: 5px;
    background: #efefef;
    outline: none;
    width: 80%;
    margin: auto;

    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      ${(props) => sliderThumbStyles(props)}
    }
    &::-moz-range-thumb {
      ${(props) => sliderThumbStyles(props)}
    }
  }
`;

export default class Slider extends React.Component {
  state = {
    value: 50,
  };

  handleOnChange = (e) => {
    this.getSize(e);
    this.setState({ value: e.target.value });
  };

  getSize = (e) => {
    e.preventDefault();
    console.log(this.state.value);
    this.props.getSize(this.state.value);
  };

  render() {
    return (
      <>
        <Styles color={this.props.color}>
          <input
            type="range"
            min={10}
            max={255}
            value={this.state.value}
            className="slider"
            onChange={this.handleOnChange}
            onMouseOut={this.getSize}
          />
          <div className="value">{this.state.value}</div>
        </Styles>
      </>
    );
  }
}
