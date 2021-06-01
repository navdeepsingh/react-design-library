import React, {useState} from 'react'
import {Switch} from './components/designSystems/SwitchComponent'
import './App.css'

function App() {
  const [state, setState] = useState(false)
  return (
    <div className="App">
      <Switch
        ariaLabel="Switch"
        isSwitchedOn={state}
        onClick={() => setState(!state)}
      />
    </div>
  )
}

export default App
