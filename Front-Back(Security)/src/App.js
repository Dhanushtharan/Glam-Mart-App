import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import './App.css';
import Login from './components/login';
import Home from './components/home';
import Glam from './components/Glam';
import About from './components/About';
import Register from './components/register';
import Contact from './components/contact';
import Cart from './components/Cart';
import Orders from './components/luxe';
import store from './components/store';
import Products from './components/Products';
import Book from './components/Book';
import { Provider } from 'react-redux';
import Luxe from './components/luxe';
function App() {
  return (
      
    <Provider store={store}>
    <Router>
   
    
      <Routes>
      
      <Route path='/' element={<Login/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/glam' element={<Glam/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/luxe' element={<Luxe/>}/>
      <Route path='/products' element={<Products/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/book' element={<Book/>}/>

      </Routes>
    </Router>
    </Provider>
  );
}

export default App