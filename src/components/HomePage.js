import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './HomePage.css';

const HomePage = ({ blogPosts }) => {
  return (
    <div className="homepage">
      <h1>Welcome to My Blog</h1>
      <div className="blog-posts-container">
        {blogPosts.map(post => (
          <div className="blog-post-card" key={post.id}>
            <Link to={`/blog/${post.id}`} className="blog-post-link">
              <h2>{post.title}</h2>
              <p>{post.date}</p>
              <img src={post.image} alt={post.title} className="blog-post-image" />
              <p>{`${post.content.substring(0, 100)}...`}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

HomePage.propTypes = {
  blogPosts: PropTypes.array.isRequired,
};

export default HomePage;
