import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import BlogPost from './components/BlogPost';
import HomePage from './components/HomePage';
import './App.css';
import badmintonImage from './images/badminton.jpeg';
import spaceImage from './images/space.jpeg';

const App = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Excitement of Badminton',
      date: 'May 31, 2024',
      author: 'Bhavyakumar Vaishnav',
      image: badmintonImage,
      content: `Badminton is a racquet sport played using racquets to hit a shuttlecock across a net. 
                It's a sport that requires both physical and mental agility. 
                Playing badminton can help improve your reflexes and coordination.
                It is also a great way to stay fit and have fun at the same time.`,
    },
    {
      id: 2,
      title: 'Exploring the Mysteries of Space',
      date: 'May 31, 2024',
      author: 'Bhavyakumar Vaishnav',
      image: spaceImage,
      content: `Space exploration is the use of astronomy and space technologies to explore outer space.
                It has led to numerous discoveries about our universe. 
                The study of space helps us understand more about the Earth and its place in the cosmos. 
                Space missions continue to provide valuable data and inspire future generations.`,
    },
  ];

  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage blogPosts={blogPosts} />} />
          <Route path="/blog/:postId" element={<BlogPost blogPosts={blogPosts} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
