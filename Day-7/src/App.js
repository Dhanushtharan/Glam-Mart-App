import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import './App.css';
import Login from './components/login';
import Home from './components/home';
import Glam from './components/Glam';
import About from './components/About';
import Register from './components/register';
import Contact from './components/contact';
import Cart from './components/Cart';
import Orders from './components/Orders';
import Products from './components/Products';
import Book from './components/Book';
function App() {
  return (
      
    
    <Router>
   
    
      <Routes>
      
      <Route path='/' element={<Login/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/glam' element={<Glam/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/orders' element={<Orders/>}/>
      <Route path='/products' element={<Products/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/book' element={<Book/>}/>

      </Routes>
    </Router>
 
  );
}

export default App