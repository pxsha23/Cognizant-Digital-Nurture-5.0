/**
 * Exercise 2: Props
 * Goal: pass data from a parent component to a child via props.
 */
function UserCard({ name, role, yearsExperience }) {
  return (
    <div className="user-card">
      <strong>{name}</strong>
      <span>{role}</span>
      <span>{yearsExperience} yrs experience</span>
    </div>
  )
}

function Exercise2_Props() {
  const users = [
    { name: 'Asha Rao', role: 'Frontend Engineer', yearsExperience: 3 },
    { name: 'Karan Mehta', role: 'Backend Engineer', yearsExperience: 5 },
  ]

  return (
    <div className="exercise-card">
      <h3>Exercise 2: Props</h3>
      <p>UserCard is a reusable child component; data flows down via props.</p>
      <div className="user-list">
        {users.map((u) => (
          <UserCard key={u.name} name={u.name} role={u.role} yearsExperience={u.yearsExperience} />
        ))}
      </div>
    </div>
  )
}

export default Exercise2_Props
