import React from 'react';
import './App.css';

// Create an object of office to display Name, Rent and Address
const featuredOffice = {
  name: 'Sunrise Business Center',
  rent: 55000,
  address: 'MG Road, Bengaluru'
};

// Create a list of office space objects to loop through
const officeSpaces = [
  { name: 'Sunrise Business Center', rent: 55000, address: 'MG Road, Bengaluru' },
  { name: 'Skyline Corporate Park', rent: 75000, address: 'Bandra Kurla Complex, Mumbai' },
  { name: 'Green Valley Offices', rent: 48000, address: 'Whitefield, Bengaluru' },
  { name: 'Metro Tower Suites', rent: 92000, address: 'Connaught Place, Delhi' }
];

function App() {
  // Create an element to display the heading of the page
  const heading = 'Office Space Rentals';

  return (
    <div className="App">
      {/* Element created with JSX */}
      <h1>{heading}</h1>

      {/* Attribute to display the image of the office space */}
      <img
        src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=500"
        alt="Office space"
        width="400"
      />

      <h2>Featured Office</h2>
      <div className="office-card">
        <p>Name: {featuredOffice.name}</p>
        <p>Address: {featuredOffice.address}</p>
        {/* Rent displayed in red if below 60000, green if above 60000 */}
        <p style={{ color: featuredOffice.rent < 60000 ? 'red' : 'green', fontWeight: 'bold' }}>
          Rent: &#8377;{featuredOffice.rent}
        </p>
      </div>

      <h2>All Available Offices</h2>
      <ul className="office-list">
        {officeSpaces.map((office, index) => (
          <li key={index}>
            <p>Name: {office.name}</p>
            <p>Address: {office.address}</p>
            <p style={{ color: office.rent < 60000 ? 'red' : 'green', fontWeight: 'bold' }}>
              Rent: &#8377;{office.rent}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
