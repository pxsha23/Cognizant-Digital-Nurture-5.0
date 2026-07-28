import React from 'react';
import CalculateScore from './components/CalculateScore';

function App() {
  return (
    <div className="App">
      <CalculateScore
        name="Piyusha Kate"
        school="Cool School"
        total={450}
        goal={500}
      />
    </div>
  );
}

export default App;
