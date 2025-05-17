import { useState } from 'react'
import '../App.css'
import React, {useEffect } from 'react'
import { BarsVisualizer } from '../Components/BarsVisualizer'
import "./Page1.css"
import { Button } from '../Components/Button'
// import { StatisticsBar } from '../Components/StatisticsBar'

export function Page1() {

  const n = 300
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

  // Uses the quick sort to sort the array of heights
  const quickSort = async () => {
    const sortedArray = [...array]

    async function quickSortHelper(low, high) {
      if (low < high) {
        const pivotIndex = await partition(low, high)
        await quickSortHelper(low, pivotIndex - 1)
        await quickSortHelper(pivotIndex + 1, high)
      }
    }

    async function partition(low, high) {
      const pivot = sortedArray[high]
      let i = low - 1
    
      for (let j = low; j < high; j++) {
        setActiveIndices([j, high])
        if (sortedArray[j] < pivot) {
          i++;
          [sortedArray[i], sortedArray[j]] = [sortedArray[j], sortedArray[i]]
          setArray([...sortedArray])
          await sleep(0)
        }
      }

      [sortedArray[i + 1], sortedArray[high]] = [sortedArray[high], sortedArray[i + 1]]
      setArray([...sortedArray])
      await sleep(0)

      return i + 1
    }

    await quickSortHelper(0, sortedArray.length - 1)
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
        <h1>Quick Sort Visualizer</h1>
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
          func={quickSort}
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