import ColorChange from "./ColorChange"
import Welcome from "./Welcome"
import WelcomeF from "./WelcomeF"
import WelcomeMessage from "./WelcomeMessage"


function App() {

  return (
    <div className="App">
      <h1>Stateful vs Stateless Component</h1>
      <WelcomeMessage />
      <ColorChange />
      <Welcome name="Manikandan Anbalagan" />
      <WelcomeF name="John Jacob" />
    </div>
  )
}

export default App
