import React, { useState } from 'react';
import CreatePostForm from './CreatePostForm';
import PostItem from './PostItem';
import FriendButton from './FriendButton';
import LinkForm from './LinkForm';
import './Social.css'
import { useSelector } from 'react-redux'

const SocialMediaPage = () => {
  const [posts, setPosts] = useState([]);
  const [friends, setFriends] = useState([]);
  const [links, setLinks] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [likedPosts, setLikedPosts] = useState([]);

  const User = useSelector((state) => state.currentUserReducer)
  const handlePostSubmit = (content) => {
    if(User){

      const newPost = { id: Date.now(), content };
      setPosts((prevPosts) => [...prevPosts, newPost]);
    } else {
      alert("First login" )
    }
  };

  const deletePost = (postId) => {
    if (!Array.isArray(posts)) {
      return;
    }

  
  
    const updatedPosts = posts.filter((post) => post.id !== postId);
    setPosts(updatedPosts);
  };

  const handleFriendToggle = () => {
    // Simulating API request and updating friends list
    setTimeout(() => {
      if (friends.length > 0) {
        setFriends([]);
      } else {
        setFriends(['friendId']);
      }
    }, 500);
  };


  const searchPosts = () => {
    const filteredPosts = posts.filter((post) =>
      post.content.toString().toLowerCase().includes(searchQuery.toLowerCase())
    );
    setPosts(filteredPosts);
  };

  const likePost = (postId) => {
    setLikedPosts([...likedPosts, postId]);
  };
  
  const unlikePost = (postId) => {
    const updatedLikedPosts = likedPosts.filter((id) => id !== postId);
    setLikedPosts(updatedLikedPosts);
  };

  const handleLinkSubmit = (link) => {
    setLinks((prevLinks) => [...prevLinks, link]);
  };

  const isFriend = friends.length > 0;

  return (
    <div className="social-media-page">
      <h1>Social Media Community Page</h1>
      <div>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search posts..."
      />
      <button onClick={searchPosts}>Search</button>
    </div>
      <CreatePostForm handlePostSubmit={handlePostSubmit} />

      <h2>Posts</h2>
      {posts.map((post) => (
    <PostItem key={post.id} post={post} />
    ))}
     <button onClick={deletePost}>Delete</button>
      <div>
      {posts.map((post) => (
        <div key={post.id}>
          <p>{post.content}</p>
          <button
            onClick={() => likePost(post.id)}
            disabled={likedPosts.includes(post.id)}
          >
            Like
          </button>
          <button
            onClick={() => unlikePost(post.id)}
            disabled={!likedPosts.includes(post.id)}
          >
            Unlike
          </button>
        </div>
      ))}
    </div>

      <h2>Friends</h2>
      <FriendButton
        isFriend={isFriend}
        handleFriendToggle={handleFriendToggle}
      />

      <h2>Links</h2>
      <LinkForm handleLinkSubmit={handleLinkSubmit} />
      {links.map((link, index) => (
        <a
          key={index}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {link}
        </a>
      ))}
    </div>
  );
};

export default SocialMediaPage;
