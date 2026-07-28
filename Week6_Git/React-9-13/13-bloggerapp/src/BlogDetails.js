import React from 'react';

// Conditional rendering approach #2: element variables
function BlogDetails({ show }) {
  let content = null;

  if (show) {
    content = (
      <div className="details-card">
        <h3>Blog Details</h3>
        <p>Title: Getting Started with React</p>
        <p>Author: Jane Doe</p>
        <p>Published: 2026</p>
      </div>
    );
  }

  return content;
}

export default BlogDetails;
