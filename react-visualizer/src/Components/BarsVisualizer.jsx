import React from 'react'


export function BarsVisualizer({array}) {
    
    return (
        <div className="barsVisualizer" style={{display: 'flex', gap: '4px', marginTop: '20px'}}>
            {array.map((value, idx) => (
            <div key={idx} className="bar" style={{height: `${value * 3}px`, width: '20px'}}
            title={value}
            />
            ))}
        </div>
    )
}