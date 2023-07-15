import React, { useState } from 'react';
import './Register.css';
import { Link } from 'react-router-dom';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your registration logic here
    console.log('Registration submitted');
  };

  return (
    
      <div className='body'>
      <form onSubmit={handleSubmit}>

       <div className='register' style={{marginTop:'50px', marginLeft:'10px'}}>
       <h2>Registration</h2>

        <div>
          <label className='name'>Name:
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
            required
            style={{width:'200px'}}

          />
          </label>
        </div>
        <div >
          <label>Email:
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            required
            style={{width:'200px'}}
          />
          </label>
        </div>
        <div>
          <label>Password:
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          </label>
        </div> 
        <div style={{marginLeft:'-300px'}}>
          <Link to = '/'><button type="submit" href="/">Register</button></Link>
        </div>
        </div>
      </form>
      </div>
      
  );
};

export default Register;