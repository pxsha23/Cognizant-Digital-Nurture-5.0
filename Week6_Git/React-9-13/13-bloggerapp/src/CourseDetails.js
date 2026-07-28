import React from 'react';

// Conditional rendering approach #3: ternary operator
// Conditional rendering approach #4: logical && operator (prevents rendering when false)
function CourseDetails({ show }) {
  return (
    <>
      {show ? (
        <div className="details-card">
          <h3>Course Details</h3>
          <p>Course: React JS Fundamentals</p>
          <p>Duration: 6 Weeks</p>
        </div>
      ) : null}

      {show && <p className="course-note">Enroll now to get started!</p>}
    </>
  );
}

export default CourseDetails;
