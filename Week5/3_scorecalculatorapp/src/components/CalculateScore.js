import React from 'react';
import '../stylesheets/mystyle.css';

function CalculateScore(props) {
  const { name, school, total, goal } = props;
  const average = ((total / goal) * 100).toFixed(2);

  return (
    <div className="score-card">
      <h2>Student Score Card</h2>
      <p><span className="label">Name:</span> {name}</p>
      <p><span className="label">School:</span> {school}</p>
      <p><span className="label">Total Marks:</span> {total}</p>
      <p><span className="label">Goal Marks:</span> {goal}</p>
      <p><span className="label">Average Score:</span> {average}%</p>
    </div>
  );
}

export default CalculateScore;
