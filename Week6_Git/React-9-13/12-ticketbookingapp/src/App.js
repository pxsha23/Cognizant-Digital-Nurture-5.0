import React, { useState } from 'react';
import GuestPage from './GuestPage';
import UserPage from './UserPage';
import LoginControl from './LoginControl';
import './App.css';

function App() {
  // Once the user is logged in, the User page is displayed;
  // on Logout, the Guest page is displayed again
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App">
      <h1>Ticket Booking App</h1>
      <LoginControl
        isLoggedIn={isLoggedIn}
        onLogin={() => setIsLoggedIn(true)}
        onLogout={() => setIsLoggedIn(false)}
      />
      {isLoggedIn ? <UserPage /> : <GuestPage />}
    </div>
  );
}

export default App;
