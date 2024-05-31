import React from 'react';
import Header from './components/Header';
import BlogPost from './components/BlogPost';
import './App.css';
import badmintonImage from './images/badminton.jpeg';
import spaceImage from './images/space.jpeg';

const App = () => {
  const blogPosts = [
    {
      title: 'The Excitement of Badminton',
      date: 'May 31, 2024',
      author: 'Bhavyakumar Vaishnav',
      image: badmintonImage,
      content: `Badminton is a racquet sport played using racquets to hit a shuttlecock across a net.`,
    },
    {
      title: 'Exploring the Mysteries of Space',
      date: 'May 31, 2024',
      author: 'Bhavyakumar Vaishnav',
      image: spaceImage,
      content: `Space exploration is the use of astronomy and space technologies to explore outer space.`,
    },
  ];

  return (
    <div className="app">
      <Header />
      <div className="blog-posts-container">
        <div className="blog-post">
          <BlogPost {...blogPosts[0]} />
        </div>
        <div className="blog-post">
          <BlogPost {...blogPosts[1]} />
        </div>
      </div>
    </div>
  );
};

export default App;
