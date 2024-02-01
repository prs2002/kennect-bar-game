import React, { useState } from "react";
import BarGraph from "./components/BarGraph";
import MenuBar from "./components/MenuBar";
import {
  insertionSort,
  selectionSort,
  bubbleSort,
  performQuickSort,
  performMergeSort,
  performShellSort,
} from "./components/Functions";

function App() {
  // Usestate for setting the random and sorted numbers
  const [data, setData] = useState(generateRandomNumbers());
  // Usestate for checking the width change; initial width 30 on change 15
  const [width, setWidth] = useState(50);

  // generating random numbers between 1-100, and array size with 20
  function generateRandomNumbers() {
    const min = 1;
    const max = 100;
    const count = 20;
    return Array.from(
      { length: count },
      () => Math.floor(Math.random() * (max - min + 1)) + min
    );
  }
  // Function to call on random generator button
  const handleRandomFunction = () => {
    const newRandomNumbers = generateRandomNumbers();
    console.log(data);
    setData(newRandomNumbers);
  };

  // Checking the button pressed
  const buttonHandler = (value) => {
    switch (value) {
      case 0:
        handleRandomFunction();
        break;
      case 1:
        setData(insertionSort(data));
        break;
      case 2:
        setData(selectionSort(data));
        break;
      case 3:
        setData(bubbleSort(data));
        break;
      case 4:
        setData(performQuickSort(data));
        break;
      case 5:
        setData(performMergeSort(data));
        break;
      case 6:
        setData(performShellSort(data));
        break;
      case 7:
        setWidth((prevWidth) => (prevWidth === 50 ? 30 : 50));
        break;
      default:
        console.log("other sort");
        break;
    }
  };

  return (
    <div className="main-container">
      <MenuBar handleButton={buttonHandler}></MenuBar>
      <BarGraph numbers={data} newWidth={width}></BarGraph>
    </div>
  );
}

export default App;