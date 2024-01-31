import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import ClickCounterWithState from './ClickCounterWithState'
import ClickCounterWithRef from './ClickCounterWithRef'
import AutoFocusInput from './AutoFocusInput'
import CounterWithState from './CounterWithState'
import CounterWithReducer from './CounterWithReducer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/* <ClickCounterWithState />
      <ClickCounterWithRef />
      <AutoFocusInput /> */}
      <CounterWithState />
      <CounterWithReducer />
    </div>
  )
}

export default App
