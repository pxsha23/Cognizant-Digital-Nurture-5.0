import { useState } from 'react'

/**
 * Exercise 4: Forms & Controlled Inputs
 * Goal: bind input values to state, handle submit.
 */
function Exercise4_Form() {
  const [formData, setFormData] = useState({ name: '', email: '' })
  const [submitted, setSubmitted] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(formData)
  }

  return (
    <div className="exercise-card">
      <h3>Exercise 4: Controlled Form</h3>
      <form onSubmit={handleSubmit} className="demo-form">
        <label>
          Name
          <input name="name" value={formData.name} onChange={handleChange} required />
        </label>
        <label>
          Email
          <input name="email" type="email" value={formData.email} onChange={handleChange} required />
        </label>
        <button type="submit">Submit</button>
      </form>
      {submitted && (
        <p className="submitted-msg">Submitted: {submitted.name} ({submitted.email})</p>
      )}
    </div>
  )
}

export default Exercise4_Form
