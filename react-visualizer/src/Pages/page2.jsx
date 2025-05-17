import { useState } from 'react'
import '../App.css'
import React, {useEffect } from 'react'
import { BarsVisualizer } from '../Components/BarsVisualizer'
import "./Page2.css"
import { Button } from '../Components/Button'
// import { StatisticsBar } from '../Components/StatisticsBar'

export function Page2() {

  const n = 100
  const [array, setArray] = useState([])
  const [activeIndices, setActiveIndices] = useState([])

  // Fills the array with values 1 through n
  const generateRandomArray = () => {
    const newArray = []
    for (let i = 0; i < n; i++) {
      newArray.push(i + 1)
    }

    // Randomizes the populated array
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]]
    }

    setArray(newArray)
  }

  // Uses the bubble sort to sort the array of heights
  const bubbleSort = async () => {
    const sortedArray = [...array]
    let swapCount = 0
    const updateInterval = 5

    for (let i = 0; i < sortedArray.length - 1; i++) {
      for (let j = 0; j < sortedArray.length - i - 1; j++) {
        setActiveIndices([j, j + 1])
        if (sortedArray[j] > sortedArray[j + 1]) {
          let temp = sortedArray[j]
          sortedArray[j] = sortedArray[j + 1]
          sortedArray[j + 1] = temp

          // Updates every "updateInterval" iterations
          if (swapCount % updateInterval === 0) {
            setArray([...sortedArray])
            await sleep(0)
          }
        }
      }
    }
    setActiveIndices([])
  }

  // Helper function to delay each sorting animation so the user can see the visual movement
  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  useEffect(() => {
    generateRandomArray()
  }, [])

    // HTML
    return (
    <div className="container">
      <title>Algorithms Visualizer</title>

      <div className="algorithmWindow">
        <h1>Bubble Sort Visualizer</h1>
        <BarsVisualizer array={array} activeIndices={activeIndices} />
      </div>

      <div className="buttonPanel">
        <Button 
          func={generateRandomArray}
          arr={array}
          text={"Generate"}
          color={"Gray"}
          width={"200px"}
          borderRadius={"20px"} 
          height={"250px"}/>

        <Button 
          func={bubbleSort}
          arr={array}
          text={"Play"}
          color={"Gray"}
          width={"200px"}
          borderRadius={"20px"} 
          height={"250px"}/>
      </div>
    </div>
  )
}