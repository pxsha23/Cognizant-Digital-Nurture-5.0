import { useState } from 'react'

/**
 * Exercise 3: State with the useState Hook
 * Goal: manage local component state and re-render on change.
 */
function Exercise3_State() {
  const [count, setCount] = useState(0)

  return (
    <div className="exercise-card">
      <h3>Exercise 3: State (useState)</h3>
      <p>Count: <strong>{count}</strong></p>
      <div className="button-row">
        <button onClick={() => setCount((c) => c - 1)}>-</button>
        <button onClick={() => setCount(0)}>Reset</button>
        <button onClick={() => setCount((c) => c + 1)}>+</button>
      </div>
    </div>
  )
}

export default Exercise3_State
