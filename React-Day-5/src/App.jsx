import { useState } from 'react'
import reactLogo from './assets/react.svg'
import MagicRoom from './MagicRoom'
import Sample from './Sample'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      {count < 1 ? <MagicRoom /> : <Sample />}
      <button onClick={() => { setCount(count + 1) }}>Sample</button>
      <button onClick={() => { setCount(count - 1) }}>Magic Room</button>
    </div>
  )
}

export default App
