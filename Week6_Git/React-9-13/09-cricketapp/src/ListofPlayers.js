import React from 'react';

// Declare an array with 11 players and store their names and scores
const players = [
  { name: 'Rohit Sharma', score: 85 },
  { name: 'Virat Kohli', score: 92 },
  { name: 'KL Rahul', score: 45 },
  { name: 'Shubman Gill', score: 60 },
  { name: 'Rishabh Pant', score: 38 },
  { name: 'Hardik Pandya', score: 72 },
  { name: 'Ravindra Jadeja', score: 55 },
  { name: 'Jasprit Bumrah', score: 12 },
  { name: 'Mohammed Shami', score: 8 },
  { name: 'Kuldeep Yadav', score: 20 },
  { name: 'Ishan Kishan', score: 65 }
];

function ListofPlayers() {
  // Filter the players with scores below 70 using an ES6 arrow function
  const lowScorers = players.filter((player) => player.score < 70);

  return (
    <div className="list-of-players">
      <h2>List of Players</h2>
      <ul>
        {players.map((player, index) => (
          <li key={index}>
            {player.name} - {player.score} runs
          </li>
        ))}
      </ul>

      <h2>Players with Score below 70</h2>
      <ul>
        {lowScorers.map((player, index) => (
          <li key={index}>
            {player.name} - {player.score} runs
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListofPlayers;
