import { useState } from 'react'
import '../App.css'
import React, {useEffect } from 'react'
import { BarsVisualizer } from '../Components/BarsVisualizer'
import "./Page2.css"

export function Page2() {
  const n = 20
  const [array, setArray] = useState([])

  useEffect(() => {
    const newArray = []
    for (let i = 0; i < n; i++) {
      newArray.push(Math.random() * 100)
    }
    setArray(newArray)
  }, [])


    return (
    <div className="container">
      <title>Algorithms Visualizer</title>

      <div className="algorithmWindow">
        <h1>Visualizer 2</h1>
        <BarsVisualizer array={array}/>
      </div>
    </div>
  )
}