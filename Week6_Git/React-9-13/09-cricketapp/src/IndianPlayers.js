import React from 'react';

function IndianPlayers() {
  // Display Odd Team and Even Team players using ES6 destructuring
  const squad = [
    'Rohit Sharma', 'Virat Kohli', 'KL Rahul', 'Rishabh Pant',
    'Hardik Pandya', 'Ravindra Jadeja', 'Jasprit Bumrah',
    'Mohammed Shami', 'Kuldeep Yadav', 'Ishan Kishan', 'Shubman Gill'
  ];

  const [odd1, even1, odd2, even2, odd3, even3, odd4, even4, odd5, even5, odd6] = squad;
  const oddTeam = [odd1, odd2, odd3, odd4, odd5, odd6];
  const evenTeam = [even1, even2, even3, even4, even5];

  // Declare two arrays and merge them using the ES6 spread (merge) feature
  const t20Players = ['Rohit Sharma', 'Virat Kohli', 'Suryakumar Yadav'];
  const ranjiTrophyPlayers = ['Prithvi Shaw', 'Mayank Agarwal', 'Cheteshwar Pujara'];
  const mergedPlayers = [...t20Players, ...ranjiTrophyPlayers];

  return (
    <div className="indian-players">
      <h2>Odd Team Players</h2>
      <p>{oddTeam.join(', ')}</p>

      <h2>Even Team Players</h2>
      <p>{evenTeam.join(', ')}</p>

      <h2>T20 &amp; Ranji Trophy Players (Merged)</h2>
      <p>{mergedPlayers.join(', ')}</p>
    </div>
  );
}

export default IndianPlayers;
