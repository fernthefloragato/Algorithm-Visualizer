import '../App.css'
import React, {useState, useEffect, useRef } from 'react'
import { BarsVisualizer } from '../Components/BarsVisualizer'
import "./Page1.css"
import { SortControlPanel } from '../Components/SortControlPanel'
// import { StatisticsBar } from '../Components/StatisticsBar'

export function Page1() {

  const [array, setArray] = useState([])
  const [activeIndices, setActiveIndices] = useState([])
  const audioCtxRef = useRef(null)

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
          playNote(sortedArray[i], sortedArray)
          await sleep(speed)
        }
      }

      [sortedArray[i + 1], sortedArray[high]] = [sortedArray[high], sortedArray[i + 1]]
      setArray([...sortedArray])
      playNote(sortedArray[i + 1], sortedArray)
      await sleep(speed)

      return i + 1
    }

    await quickSortHelper(0, sortedArray.length - 1)

    // Loop thr
    for (let i = 0; i < sortedArray.length; i++) {
      setActiveIndices([i])
      playNote(sortedArray[i], sortedArray)
      await sleep(speed)
    }
    setActiveIndices([])
  }

  // playNote plays a note of a certain frequency based on the current bar in the sort
  function playNote(value, array, duration = 0.1) {

    const audioCtx = audioCtxRef.current
    const maxValue = Math.max(...array);
    const minPitch = 200;
    const maxPitch = 1900;
    const frequency = minPitch + (value / maxValue) * (maxPitch - minPitch);
    
    const oscillator = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();

    oscillator.frequency.setValueAtTime(frequency, audioCtx.currentTime);
    oscillator.type = "triangle";
    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    const now = audioCtx.currentTime;
    gainNode.gain.setValueAtTime(0.001, now);
    gainNode.gain.exponentialRampToValueAtTime(0.1, now + 0.01);
    gainNode.gain.exponentialRampToValueAtTime(0.001, now + duration);

    oscillator.start(now);
    oscillator.stop(now + duration + 0.02);

    oscillator.onended = () => {
    oscillator.disconnect();
    gainNode.disconnect();
  };
}

  // Helper function to delay each sorting animation so the user can see the visual movement
  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  useEffect(() => {
    generateRandomArray()
    audioCtxRef.current = new (window.AudioContext || window.webkitAudioContext)()
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
          defaultBars={25}
          defautltSpeed={1000}/>
      </div>
    </div>
  )
}