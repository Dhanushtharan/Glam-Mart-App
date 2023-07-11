import React, { useState } from 'react';
import './home.css'; // Import the CSS file
import { Link,useNavigate} from 'react-router-dom';

const Home = () => {
  //const navigate=useNavigate('');
  //const [email, setEmail] = useState('');
  //const [password, setPassword] = useState('');
  //const [error, setError] = useState('');

  //const handleSubmit = (e) => {
    //e.preventDefault();

    // Add your login logic here
    //if (email === 'admin@example.com' && password === 'password') {
      // Successful login, navigate to dashboard
      //setError('');
      //setEmail('');
      //setPassword('');
      //alert('Login successful!');
      //navigate('/NavSide');
   
    //} else {
      // Invalid credentials, display error message
      //setError('Invalid email or password');
    //}
  //};

  return (
    <div className='home'>
        WELCOME TO GLAM MART
    </div>
  );
};

export default Home;