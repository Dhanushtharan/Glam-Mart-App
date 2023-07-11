import React, { useState } from 'react';
import Login from './component/login';
import Registration from './component/registration';
import './App.css' ;
const App = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleToggle = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className='body'>
      <center><h1>Glam Mart App</h1>
      {isLogin ? <Login /> : <Registration />}
      <button onClick={handleToggle}>
        {isLogin ? 'Create an Account' : 'Login Instead'}
      </button>
      </center>
    </div>
  );
};

export default App;