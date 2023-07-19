import React from 'react';
import './PostItem.css'

const PostItem = ({ post }) => {

  return (
    <div className="post-item">
      <p>{post.content}</p>
      <p>{post.image && (
        <img src={post.image} alt="Post" />
      )}</p>
      
    </div>
  );
};

export default PostItem;
