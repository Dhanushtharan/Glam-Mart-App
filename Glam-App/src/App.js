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
import FeedForm from './components/feedback';
import store from './components/store';
import Products from './components/Products';
import Book from './components/Book';
import { Provider } from 'react-redux';
import Luxe from './components/luxe';
import Specialists from './components/specialists';
import BeforeAfterPage from './components/BeforeAfterPage';

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
      <Route path='/specialists' element={<Specialists/>}/>
      <Route path='/products' element={<Products/>}/>
      <Route path='/feedback' element={<FeedForm/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/book' element={<Book/>}/>
      <Route path='/beforeAfterPage' element={<BeforeAfterPage/>}/>

      </Routes>
    </Router>
    </Provider>
  );
}

export default App