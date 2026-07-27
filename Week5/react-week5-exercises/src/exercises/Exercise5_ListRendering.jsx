import { useState } from 'react'

/**
 * Exercise 5: List Rendering & Conditional Rendering
 * Goal: render a dynamic list with .map(), filter it, and conditionally
 * show an empty state.
 */
function Exercise5_ListRendering() {
  const [tasks, setTasks] = useState([
    { id: 1, label: 'Set up project', done: true },
    { id: 2, label: 'Build Exercise 1', done: true },
    { id: 3, label: 'Build Exercise 5', done: false },
  ])
  const [showOnlyPending, setShowOnlyPending] = useState(false)

  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t))
    )
  }

  const visibleTasks = showOnlyPending ? tasks.filter((t) => !t.done) : tasks

  return (
    <div className="exercise-card">
      <h3>Exercise 5: List & Conditional Rendering</h3>
      <label className="filter-toggle">
        <input
          type="checkbox"
          checked={showOnlyPending}
          onChange={(e) => setShowOnlyPending(e.target.checked)}
        />
        Show only pending
      </label>

      {visibleTasks.length === 0 ? (
        <p className="empty-state">No tasks to show.</p>
      ) : (
        <ul className="task-list">
          {visibleTasks.map((task) => (
            <li key={task.id} className={task.done ? 'done' : ''}>
              <label>
                <input type="checkbox" checked={task.done} onChange={() => toggleTask(task.id)} />
                {task.label}
              </label>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Exercise5_ListRendering
