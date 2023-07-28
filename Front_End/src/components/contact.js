import React, { useState } from 'react';
import './Contact.css';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin} from 'react-icons/fa';


const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };
  const footerStyle = {
    backgroundColor: 'black',
    color: 'white',
    padding: '9px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    //position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 9999,
    marginLeft:'240px',
    marginTop:'10px',
  };

  const socialIconStyle = {
    fontSize: '24px',
    marginRight: '10px',
    color: '#50afbf',
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className='bodyy'>
    <div className='con'>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={handleMessageChange}
            required
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
      <footer>
        <div className='fool'>
          <h1>Contact Number : 7708681987</h1>
          <div className='foot'>
       <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook style={socialIconStyle} />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter style={socialIconStyle} />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram style={socialIconStyle} />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin style={socialIconStyle} />
        </a>
        
      </div>
        </div>
      </footer>
    </div>
    </div>
  );
};

export default Contact;
