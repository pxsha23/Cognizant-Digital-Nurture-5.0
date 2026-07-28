import React from 'react';

// Button which invokes a synthetic event "OnPress" that displays "I was clicked"
function SyntheticEventButton() {
  const handlePress = (syntheticEvent) => {
    // syntheticEvent is React's cross-browser SyntheticEvent wrapper
    syntheticEvent.preventDefault();
    alert('I was clicked');
  };

  return (
    <div className="synthetic-event-section">
      <h2>Synthetic Event</h2>
      <button onClick={handlePress}>OnPress</button>
    </div>
  );
}

export default SyntheticEventButton;
