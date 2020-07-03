import React, { Component } from "react";
import "./sortingVisualizer.css";
import { getMergeSortAnimations } from "./mergeSort.js";
import { getQuickSortAnimation } from "./quickSort.js";
import { quickSortHelper } from "./quickSort.js";
import { getHeapSortAnimation } from "./heapSort.js";

const PRIMARY_COLOR = "black";
const SECONDARY_COLOR = "yellow";

class SortingVisualizer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      array: [],
    };
  }

  componentDidMount() {
    this.resetArray();
  }

  resetArray() {
    const array = [];
    for (let i = 0; i < this.props.sizeFromApp; i++) {
      array.push(randomIntFromInterval(5, 600));
    }
    // array.push(600);
    this.setState({ array });
  }

  mergeSort() {
    // const jsSortedArray = this.state.array.slice().sort((a, b) => a - b);
    // const sortedArray = sortingAlgorithms.mergeSort(this.state.array);

    // console.log(arraysAreEqual(jsSortedArray, sortedArray));

    const animations = getMergeSortAnimations(this.state.array);
    console.log(animations);

    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          // console.log("color");

          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * (100 - this.props.speedFromApp));
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * (100 - this.props.speedFromApp));
      }
    }
  }

  quickSort() {
    const animations = getQuickSortAnimation(this.state.array);
    console.log(animations);
    console.log(this.state.array);

    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      if (animations[i].length !== 4) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        var count = i;
        var countFromFour = -1;
        while (count >= 0 && animations[count].length !== 4) {
          countFromFour++;
          count--;
        }
        let pivotColor = "red";
        let color1;
        let color2;
        if (animations[i].length === 2 && countFromFour % 2 == 0) {
          color1 = SECONDARY_COLOR;
          color2 = pivotColor;
        } else if (animations[i].length === 2 && countFromFour % 2 == 1) {
          color1 = PRIMARY_COLOR;
          color2 = pivotColor;
        } else if (animations[i].length == 3 && animations[i][2] == 0) {
          color1 = SECONDARY_COLOR;
          color2 = SECONDARY_COLOR;
        } else if (animations[i].length == 3 && animations[i][2] == 1) {
          color1 = PRIMARY_COLOR;
          color2 = PRIMARY_COLOR;
        } else if (animations[i].length == 5) {
          console.log(animations[i]);
          color1 = PRIMARY_COLOR;
          color2 = PRIMARY_COLOR;
        }
        setTimeout(() => {
          barOneStyle.backgroundColor = color1;
          barTwoStyle.backgroundColor = color2;
        }, i * (100 - this.props.speedFromApp));
      } else if (animations[i].length == 4) {
        setTimeout(() => {
          const [barOneIdx, newHeight, barTwoIdx, newHeight2] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
          const barTwoStyle = arrayBars[barTwoIdx].style;
          barTwoStyle.height = `${newHeight2}px`;
        }, i * (100 - this.props.speedFromApp));
      }
    }
  }

  heapSort() {
    console.log(this.state.array);
    const animations = getHeapSortAnimation(this.state.array);
    console.log(animations);
    console.log(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * (100 - this.props.speedFromApp));
      } else if (animations[i].length == 4) {
        setTimeout(() => {
          const [barOneIdx, newHeight, barTwoIdx, newHeight2] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
          const barTwoStyle = arrayBars[barTwoIdx].style;
          barTwoStyle.height = `${newHeight2}px`;
        }, i * (100 - this.props.speedFromApp));
      }
    }
  }

  bubbleSort() {}

  testSortingAlgorithm() {
    /*      MERGE SORT
    for (let i = 0; i < 100; i++) {
      const array = [];
      const length = randomIntFromInterval(1, 100);
      for (let i = 0; i < length; i++) {
        array.push(randomIntFromInterval(-1000, 1000));
      }
      const jsSortedArray = array.slice().sort((a, b) => a - b);
      const mergeSortArray = getMergeSortAnimations(array.slice());
      console.log(arraysAreEqual(jsSortedArray, mergeSortArray));
    }
    */
    /*      QUICK SORT      */
    /*
    for (let i = 0; i < 100; i++) {
      const array = [];
      const length = randomIntFromInterval(1, 100);
      for (let i = 0; i < length; i++) {
        array.push(randomIntFromInterval(-1000, 1000));
      }
      const jsSortedArray = array.slice().sort((a, b) => a - b);
      const quickSortArray = quickSort(array.slice(), 0, array.length - 1);
      console.log(arraysAreEqual(jsSortedArray, quickSortArray));
      console.log(quickSortArray);
    }
    */
    /*
    const array = [];
    const length = randomIntFromInterval(1, 100);
    for (let i = 0; i < length; i++) {
      array.push(randomIntFromInterval(-1000, 1000));
    }
    const quickSortArray = quickSort(array.slice(), 0, array.length - 1);
    console.log(quickSortArray);
    const random = [0, 0, 0, 0, 1, 1, 1];
    console.log(random);
    */
    /*      HEAP SORT      */
    //   const array = [];
    //   const length = randomIntFromInterval(1, 100);
    //   for (let i = 0; i < length; i++) {
    //     array.push(randomIntFromInterval(-1000, 1000));
    //   }
    //   console.log(array);
    //   const heapSortedArray = heapSort(array.slice());
    //   console.log(heapSortedArray);
  }

  render() {
    const { array } = this.state;
    const width = 1.5 * (255 / array.length);
    return (
      <>
        <div className="array-container">
          {array.map((value, idx) => (
            <div
              className="array-bar"
              key={idx}
              style={{
                height: `${value}px`,
                width: `${width}px`,
              }}
            ></div>
          ))}
        </div>
        <div className="button-container">
          <button
            onClick={() => this.resetArray()}
            type="button"
            class="btn btn-primary active"
          >
            Generate New Array
          </button>
          <button
            onClick={() => this.mergeSort()}
            type="button"
            class="btn btn-dark btn-sm active"
          >
            Merge Sort
          </button>
          <button
            onClick={() => this.quickSort()}
            type="button"
            class="btn btn-dark btn-sm active"
          >
            Quick Sort
          </button>
          <button
            onClick={() => this.heapSort()}
            type="button"
            class="btn btn-dark btn-sm active"
          >
            Heap Sort
          </button>
          <button
            onClick={() => this.bubbleSort()}
            type="button"
            class="btn btn-dark btn-sm active"
          >
            Bubble Sort
          </button>
          <button
            onClick={() => this.testSortingAlgorithm()}
            type="button"
            class="btn btn-dark btn-sm active"
          >
            Test Sorting Algorithms
          </button>
        </div>
      </>
    );
  }
}

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function arraysAreEqual(Arr1, Arr2) {
  if (Arr1.length !== Arr2.length) return false;
  for (let i = 0; i < Arr1.length; i++) {
    if (Arr1[i] !== Arr2[i]) return false;
  }
  return true;
}

export default SortingVisualizer;
