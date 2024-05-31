import React from 'react';
import './BlogPost.css'; 
import userIcon from '../images/user-icon.jpeg'; 

const BlogPost = ({ title, date, author, image, content }) => {
  return (
    <div className="blog-post">
      <div className="author-info">
        <img src={userIcon} alt="User Icon" className="user-icon" />
        <p>{author}</p>
      </div>
      <h2>{title}</h2>
      <p>{date}</p>
      <img src={image} alt={title} className="blog-image" />
      <p>{content}</p>
      <hr />
    </div>
  );
};

export default BlogPost;
