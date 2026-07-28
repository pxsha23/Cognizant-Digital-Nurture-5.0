import React from 'react';
import CohortDetails from './CohortDetails';

const cohorts = [
  { name: 'Java FSE - Batch 12', status: 'ongoing', trainer: 'Ms. Sharma', duration: '7 Weeks' },
  { name: 'React Deep Skilling', status: 'ongoing', trainer: 'Mr. Rao', duration: '2 Weeks' },
  { name: '.NET FSE - Batch 9', status: 'completed', trainer: 'Mr. Iyer', duration: '6 Weeks' },
  { name: 'DevOps Fundamentals', status: 'completed', trainer: 'Ms. Nair', duration: '1 Week' }
];

function App() {
  return (
    <div className="App">
      <h1>Cognizant Academy - Cohort Dashboard</h1>
      {cohorts.map((cohort, index) => (
        <CohortDetails
          key={index}
          name={cohort.name}
          status={cohort.status}
          trainer={cohort.trainer}
          duration={cohort.duration}
        />
      ))}
    </div>
  );
}

export default App;
