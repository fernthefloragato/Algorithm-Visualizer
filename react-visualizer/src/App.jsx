import { useState } from 'react'
import './App.css'

function App() {
  const [stack, setStack] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handlePush = () => {
    if (inputValue === "") return;
    setStack((prevStack) => [...prevStack, inputValue]);
    setInputValue('');
  };

  const handlePop = () => {
    if (stack.length === 0) return;
    setStack(stack.slice(0, -1));
  };

  return (
    <div className="app-container">

      <div>
        
      </div>

      <div className="left-pane">
        <h1>Algorithms Visualizer</h1>

        <input type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter value"/>

        <button onClick={handlePush}>Push</button>
        <button onClick={handlePop}>Pop</button>

        <div id="stackContainer">
          {[...stack].reverse().map((item, index) => (
            <div key={index} className="stack-item">
              {item}
            </div>
          ))}
        </div>
      </div>

          <div className="right-pane">
            <h1>Code Editor</h1>

            <textarea placeholder="Type code here..." 
            style={{ width: '100%', height: '90%' }}

            />
          </div>

    </div>
  )
}

export default App
