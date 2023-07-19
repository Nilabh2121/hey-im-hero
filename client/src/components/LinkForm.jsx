import React, { useState } from 'react';
import './LinkForm.css'

const LinkForm = ({ handleLinkSubmit }) => {
  const [link, setLink] = useState('');

  const handleLinkChange = (e) => {
    setLink(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (link.trim() === '') {
      return;
    }
    handleLinkSubmit(link);
    setLink('');
  };

  return (
    <form onSubmit={handleSubmit} className="link-form">
      <input
        type="text"
        placeholder="Enter link URL..."
        value={link}
        onChange={handleLinkChange}
        className="link-form__input"
      />
      <button type="submit" className="link-form__button">
        Post Link
      </button>
    </form>
  );
};

export default LinkForm;
