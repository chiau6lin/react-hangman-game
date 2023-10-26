import { HangmanDrawing } from "./HangmanDrawing"
import { WordGuess } from "./WordGuess"
import { Keyboard } from "./Keyboard"

function App() {
  return (
    <div style={{
      maxWidth: "800px",
      display: "flex",
      flexDirection: "column",
      gap: "2rem",
      margin: "0 auto",
      alignItems: "center"
    }}>
      <div style={{ fontSize: "2rem", textAlign: "center" }}>Lose Win</div>
      <HangmanDrawing />
      <WordGuess />
      <div style={{ alignSelf: "stretch" }}>
        <Keyboard />
      </div>
    </div>
  )
}

export default App
