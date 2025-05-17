import React from 'react'


export function BarsVisualizer({array, activeIndices}) {
    const maxVisualizerWidth = 650;
    const maxBarHeight = 300;
    const maxBarValue = Math.max(...array);
    const barCount = array.length;
    const gap = 1
    const barWidth = maxVisualizerWidth / barCount
    
    return (
        <div className="barsVisualizer" style={{display: 'flex', gap: '0px', marginTop: '20px'}}>
            {array.map((value, idx) => (
            <div key={idx}
                className="bar"
                style={{
                    height: `${(value / maxBarValue) * maxBarHeight}px`,
                    width: `${barWidth}px`,
                    marginRight: idx !== barCount - 1 ? `${gap}px` : '0',
                    backgroundColor: activeIndices.includes(idx) ? 'red' : 'rgb(255, 255, 255)',}}
            title={value.toFixed(1)}
            />
            ))}
        </div>
    )
}