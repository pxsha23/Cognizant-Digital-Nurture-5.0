import React from 'react';

// Logged-in users can browse and book flights
function UserPage() {
  const flights = [
    { flightNo: 'AI 202', from: 'Delhi', to: 'Mumbai', time: '08:00 AM' },
    { flightNo: '6E 305', from: 'Bengaluru', to: 'Chennai', time: '11:30 AM' },
    { flightNo: 'SG 118', from: 'Mumbai', to: 'Kolkata', time: '02:15 PM' }
  ];

  const handleBook = (flightNo) => {
    alert(`Ticket booked for flight ${flightNo}!`);
  };

  return (
    <div className="user-page">
      <h2>Book Your Flight</h2>
      <ul>
        {flights.map((flight, index) => (
          <li key={index}>
            {flight.flightNo}: {flight.from} &rarr; {flight.to} at {flight.time}
            <button onClick={() => handleBook(flight.flightNo)}>Book Now</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserPage;
