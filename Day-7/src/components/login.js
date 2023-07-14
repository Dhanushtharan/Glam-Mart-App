import './login.css';
import React, { useState } from 'react';

import {Link,useNavigate} from 'react-router-dom';

const Login = () => {
  const navigate=useNavigate('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    // Add your login logic here
    if (email === '' && password === '') {
      
      alert('Invalid email or password');
    } else {
     
      setEmail('');
      setPassword('');
      alert('Login successful!');
      navigate('/home');
   
    }
  };

  return (
   <div className='body'>
<div className='mart'>
        <div className='form'>
      <form className='login-form' onSubmit={handleSubmit} style={{marginTop:'150px'}}>
        <h2>Login</h2>
        <div className='mart1'>
          <label>Email:
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
          </label>
        </div>
        <div className='pass'>
          <label>Password:
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          </label>
        </div>
        <div className='submit' style={{marginLeft:'-280px'}}>
          <button type="submit" href="/home">Login</button><br></br>
          <Link to ='/register'><button type="submit" href="/register">register</button></Link>
        </div>
      </form>
    </div>
    </div> 
    </div>
  );
};

export default Login;