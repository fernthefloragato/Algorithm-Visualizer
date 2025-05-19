
import React from "react"
import { Button } from "./Button"
import './SortControlPanel.css'
import { useState } from "react";

export function SortControlPanel({onGenerate, onSort, array, defaultBars = 100, defaultSpeed = 10}) {

    const [barCount, setBarCount] = useState(defaultBars);
    const [speed, setSpeed]   = useState(defaultSpeed);

    return(
        <div className="sortControlPanel">
            <h1>Control Panel</h1>
            <div className="inputGroup">
                <label style={{color: 'white'}}>
                    Bars&nbsp;
                    <input
                        type="number"
                        min="5"
                        max="1000"
                        value={barCount}
                        onChange={e => setBarCount(+e.target.value)}
                    />
                </label>

                <label style={{color: 'white'}}>
                    Speed&nbsp;(ms)
                    <input
                        type="number"
                        min="0"
                        max="1000"
                        value={speed}
                        onChange={e => setSpeed(+e.target.value)}
                    />
                </label>
            </div>
            
            <Button 
                func={() => onGenerate(barCount)}
                arr={array}
                text={"Generate"}
                color={"Gray"}
                width={"200px"}
                borderRadius={"20px"} 
                height={"250px"}/>
            
            <Button 
                func={() => onSort(speed)}
                arr={array}
                text={"Play"}
                color={"Gray"}
                width={"200px"}
                borderRadius={"20px"} 
                height={"250px"}/>
        </div>
        
    )
}