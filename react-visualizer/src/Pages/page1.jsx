import '../App.css'
import React, {useState, useEffect } from 'react'
import { BarsVisualizer } from '../Components/BarsVisualizer'
import "./Page1.css"
import { SortControlPanel } from '../Components/SortControlPanel'
// import { StatisticsBar } from '../Components/StatisticsBar'

export function Page1() {

  const [array, setArray] = useState([])
  const [activeIndices, setActiveIndices] = useState([])

  // Fills the array with values 1 through n
  const generateRandomArray = (barCount = 100) => {
    const newArray = []
    for (let i = 0; i < barCount; i++) {
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
  const quickSort = async (speed = 0) => {
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
          await sleep(speed)
        }
      }

      [sortedArray[i + 1], sortedArray[high]] = [sortedArray[high], sortedArray[i + 1]]
      setArray([...sortedArray])
      await sleep(speed)

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

      <div>
        <SortControlPanel
          onGenerate={generateRandomArray}
          onSort={quickSort}
          defaultBars={100}
          defautltSpeed={25}/>
      </div>
    </div>
  )
}