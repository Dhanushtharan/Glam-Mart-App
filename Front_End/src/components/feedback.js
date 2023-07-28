import React, { useState } from 'react';
import './feedback.css';
import { useNavigate } from 'react-router-dom';
import { addFeedback } from './api';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin} from 'react-icons/fa';


const FeedForm = () => {
//   const [email, setEmail] = useState('');
//   const [Name, setName] = useState('');
//   const[Subject,setSubject]=useState('');
//   const[Message,setMessage]=useState('');
const[formdata,setFormdata]= useState({
    email: '',
    name: '',
    subject: '',
    message: ''
   
  })
  const navigate = useNavigate();
  const handleChange = (e) => {
    e.preventDefault();
    setFormdata({ ...formdata, [e.target.id]: e.target.value })
    // console.log(formdata);
  }
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

  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
      await addFeedback(formdata);
      navigate('/home')
    }
    catch(error){
      console.log(error);
    }

    console.log(formdata);
  }
  
  return (
    <div className='body1'>
    <div className="down">
      <div >
        <h1>FEEDBACK</h1>
        <form onSubmit={handleSubmit} className='form1'>
          <input
            type="email"
            placeholder="Email"
            id='email'
            onChange={handleChange}
            required
          />
          <input
            type="name"
            placeholder="Name"
            id='name'
            onChange={handleChange}
            required
          />
             <input
            type="name"
            placeholder="Subject"
            id='subject'
            onChange={handleChange}
            required
          />
            <input
            type="name"
            placeholder="Message"
            id='message'
            onChange={handleChange}
            required
          />
          <button type='submit' onChange={handleSubmit}>Submit</button>
          <div className="button">
         
          </div>
        </form>
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
    </div>
    </div>
  );
};

export default FeedForm;