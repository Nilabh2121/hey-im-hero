import React, { useState } from 'react';
import './PostForm.css'

const CreatePostForm = ({ handlePostSubmit }) => {
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const [video, setVideo] = useState(null);

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleVideoChange = (e) => {
    setVideo(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('content', content);
    if (image) {
      formData.append('image', image);
    }
    if (video) {
      formData.append('video', video);
    }

    handlePostSubmit(formData);

    // Reset form fields
    setContent('');
    setImage(null);
    setVideo(null);
  };

  return (
    <form onSubmit={handleSubmit} className="create-post-form">
      <textarea
        placeholder="Write your post..."
        value={content}
        onChange={handleContentChange}
        className="create-post-form__textarea"
      />
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="create-post-form__file-input"
      />
      <input
        type="file"
        accept="video/*"
        onChange={handleVideoChange}
        className="create-post-form__file-input"
      />
      <button type="submit" className="create-post-form__button" style={{float:"right", marginRight:"-20px"}}>
        Post
      </button>
    </form>
  );
};

export default CreatePostForm;
