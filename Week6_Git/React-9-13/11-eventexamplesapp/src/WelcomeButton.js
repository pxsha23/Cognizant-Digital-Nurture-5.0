import React from 'react';

// Button which invokes a function that takes "welcome" as an argument
function WelcomeButton() {
  const sayWelcome = (message) => {
    alert(`${message}! Welcome to the React Event Examples App.`);
  };

  return (
    <div className="welcome-section">
      <h2>Welcome Button</h2>
      <button onClick={() => sayWelcome('Welcome')}>Say Welcome</button>
    </div>
  );
}

export default WelcomeButton;
