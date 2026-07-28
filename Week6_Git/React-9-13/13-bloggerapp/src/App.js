import React, { useState } from 'react';
import BookDetails from './BookDetails';
import BlogDetails from './BlogDetails';
import CourseDetails from './CourseDetails';
import './App.css';

function App() {
  const [selected, setSelected] = useState('book');

  // Conditional rendering approach #5: preventing components from rendering
  // via a switch statement that decides which component to mount
  const renderSection = () => {
    switch (selected) {
      case 'book':
        return <BookDetails show={true} />;
      case 'blog':
        return <BlogDetails show={true} />;
      case 'course':
        return <CourseDetails show={true} />;
      default:
        return <p>Select a section to view its details.</p>;
    }
  };

  return (
    <div className="App">
      <h1>Blogger App</h1>
      <button
        className={selected === 'book' ? 'active' : ''}
        onClick={() => setSelected('book')}
      >
        Book Details
      </button>
      <button
        className={selected === 'blog' ? 'active' : ''}
        onClick={() => setSelected('blog')}
      >
        Blog Details
      </button>
      <button
        className={selected === 'course' ? 'active' : ''}
        onClick={() => setSelected('course')}
      >
        Course Details
      </button>

      {renderSection()}
    </div>
  );
}

export default App;
