import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './BlogPost.css';
import userIcon from '../images/user-icon.jpeg';

const BlogPost = ({ blogPosts }) => {
  const { postId } = useParams();
  const post = blogPosts.find(post => post.id === parseInt(postId));
  const [showMore, setShowMore] = useState(false);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="blog-post">
      <div className="author-info">
        <img src={userIcon} alt="User Icon" className="user-icon" />
        <p>{post.author}</p>
      </div>
      <h2>{post.title}</h2>
      <p>{post.date}</p>
      <img src={post.image} alt={post.title} className="blog-image" />
      <p>
        {showMore ? post.content : `${post.content.substring(0, 100)}...`}
        <button onClick={() => setShowMore(!showMore)}>
          {showMore ? 'Show Less' : 'Show More'}
        </button>
      </p>
      <hr />
      <Link to="/" className="back-to-home-link">Back to Home</Link>
    </div>
  );
};

BlogPost.propTypes = {
  blogPosts: PropTypes.array.isRequired,
};

export default BlogPost;
