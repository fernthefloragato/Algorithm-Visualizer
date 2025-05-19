import { useState } from 'react'
import '../App.css'
import './home.css'

export function Home() {
    return (
        <>
            <div className="homeText">
                <h1>Welcome to my Algorithm Visualizer!</h1>
            </div>

            <div className="description">
                <p>
                This tool visually demonstrates how different algorithms work, using animated bars and sound.
                </p>

                <h2>Supported Features:</h2>
                <ul>
                <li>Visualization of several sorting algorithms</li>
                <li>Adjustable speed control</li>
                <li>Audio indicators and effects</li>
                <li>Interactive UI for learning algorithms</li>
                </ul>
            </div>

            <div className="otherSocials">
                <h2>Other Socials:</h2>
                <a href="https://github.com/fernthefloragato">Github</a>
            </div>
        </>
    )
}