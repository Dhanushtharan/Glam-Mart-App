import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import './App.css';
import Login from './components/login';
import Signup from './components/signup';
import Home from './components/home';
import Glam from './components/Glam';
import About from './components/About';
import Register from './components/register';
function App() {
  return (
      
    
    <Router>
   
    
      <Routes>
      
      <Route path='/' element={<Login/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/glam' element={<Glam/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/register' element={<Register/>}/>
      </Routes>
    </Router>
 
  );
}

export default App
