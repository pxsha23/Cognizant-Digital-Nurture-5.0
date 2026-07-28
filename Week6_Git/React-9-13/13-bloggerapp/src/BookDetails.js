import React from 'react';

// Conditional rendering approach #1: plain if / else statement
function BookDetails({ show }) {
  if (!show) {
    return null;
  }

  return (
    <div className="details-card">
      <h3>Book Details</h3>
      <p>Title: Clean Code</p>
      <p>Author: Robert C. Martin</p>
      <p>Genre: Software Engineering</p>
    </div>
  );
}

export default BookDetails;
