import React from 'react';

// Guest users can only browse flight details, they cannot book
function GuestPage() {
  const flights = [
    { flightNo: 'AI 202', from: 'Delhi', to: 'Mumbai', time: '08:00 AM' },
    { flightNo: '6E 305', from: 'Bengaluru', to: 'Chennai', time: '11:30 AM' },
    { flightNo: 'SG 118', from: 'Mumbai', to: 'Kolkata', time: '02:15 PM' }
  ];

  return (
    <div className="guest-page">
      <h2>Available Flights</h2>
      <p className="info">Please login to book a ticket.</p>
      <ul>
        {flights.map((flight, index) => (
          <li key={index}>
            {flight.flightNo}: {flight.from} &rarr; {flight.to} at {flight.time}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GuestPage;
