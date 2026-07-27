import Exercise1_HelloWorld from './exercises/Exercise1_HelloWorld'
import Exercise2_Props from './exercises/Exercise2_Props'
import Exercise3_State from './exercises/Exercise3_State'
import Exercise4_Form from './exercises/Exercise4_Form'
import Exercise5_ListRendering from './exercises/Exercise5_ListRendering'

function App() {
  return (
    <div className="app">
      <h1>Week 5 - React Part 1</h1>
      <p className="disclaimer">
        Best-effort generic exercises — not verified against an official ReactJS-HOL doc.
      </p>
      <Exercise1_HelloWorld />
      <Exercise2_Props />
      <Exercise3_State />
      <Exercise4_Form />
      <Exercise5_ListRendering />
    </div>
  )
}

export default App
