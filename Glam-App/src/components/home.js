import React from 'react';
import { Link } from 'react-router-dom';
import logo from './assets/abc.png';
import personLogo from './assets/personlogo.png';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin} from 'react-icons/fa';
import './home.css';

const NavigationBar = () => {
  const navStyle = {
    backgroundColor: 'grey',
    color: 'black',
    padding: '10px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 9999,
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    margin: '0 10px',
    padding: '5px 10px',
    borderRadius: '5px',
    transition: 'background-color 0.3s ease, color 0.3s ease',
  };

  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
  };

  const logoStyle = {
    width: '75px',
    height: '50px',
  };

  const personLogoStyle = {
    width: '75px',
    height: '50px',
    marginLeft: '10px',
  };

  const sidebarStyle = {
    backgroundColor: 'black',
    padding: '20px',
    width: '200px',
    position: 'fixed',
    top: '50px',
    left: 0,
    bottom: 0,
  };

  const sidebarLinkStyle = {
    display: 'block',
  margin: '25px 0',
  color: 'white',
  textDecoration: 'none',
  fontSize: '18px',
  };

  const hoverStyle = {
    backgroundColor: 'blue',
    color: 'black',
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
 const titleStyle={
  fontFamily:'Impact, Haettenschweiler, Arial Narrow Bold, sans-serif',
  color:'white',
  fontSize:'30px',
  marginLeft:'23%',
  textShadow:'0 0 3px #000000, 0 0 5px #000000',
 };

  return (
    <>
    <div className='bodyStyle'>
      <nav style={navStyle}>
        <Link to="/home" style={linkStyle}>
          <img src={logo} alt="Logo" style={logoStyle} />
        </Link>
        <div style={titleStyle}>
            Nat-Beauty
        </div>
        <div style={containerStyle}>
          <Link to="/home" style={linkStyle} activeStyle={hoverStyle}>
            Home
          </Link>
          
          <Link to="/about" style={linkStyle} activeStyle={hoverStyle}>
            About
          </Link>
          <Link to="/contact" style={linkStyle} activeStyle={hoverStyle}>
            Contact
          </Link>
          <Link to="/feedback" style={linkStyle} activeStyle={hoverStyle}>
            Feedback
          </Link>
          <Link to="/" style={linkStyle} activeStyle={hoverStyle}>
            Logout
          </Link>
          <img src={personLogo} alt="Person" style={personLogoStyle} />
        </div>
      </nav>
      <div style={sidebarStyle}>
        <br />

        <Link to="/products" className="xyz" style={sidebarLinkStyle} activeStyle={hoverStyle}>
          PRODUCTS
        </Link>
        <Link to="/book" style={sidebarLinkStyle} activeStyle={hoverStyle}>
          BOOK APPOINTMENT
        </Link>
        <Link to="/cart" style={sidebarLinkStyle} activeStyle={hoverStyle}>
          CART
        </Link>
        <Link to="/luxe" style={sidebarLinkStyle} activeStyle={hoverStyle}>
          LUXE
        </Link>
        <Link to="/specialists" style={sidebarLinkStyle} activeStyle={hoverStyle}>
          SPECIALISTS
        </Link>
        <Link to="/beforeAfterPage" style={sidebarLinkStyle} activeStyle={hoverStyle}>
          RESULTS
        </Link>
        <div>
        </div>
      </div>

      
      <div>
        <div>
          <br/><br/>
          <br /><br />
          <div className='textStyle'>
         <h1>Welcome to the Natural-Beauty</h1> 
              <br></br>
Discover the latest beauty innovations and indulge in a world of self-care and transformation. We offer a wide range of premium beauty products carefully selected to enhance your natural beauty and elevate your skincare and makeup routines. From luxurious skincare essentials to glamorous cosmetics, we have everything you need to look and feel your best. Explore our curated collection and unlock your true radiance.
          </div>
          <br /><br />
          <br /><br />
          <br /><br />
          </div>
        </div>
      <br></br>
      <br></br>
      <div className="foot1">
      <footer>
       
       <div className="foot2">
        Terms
       <p>
       <Link to = '/home' style={linkStyle} activeStyle={hoverStyle}>Privacy Policy</Link>
       </p>
       <p>
      <Link to = '/about' style={linkStyle} activeStyle={hoverStyle}>Terms & Conditions</Link>
      </p>
      <p>
      <Link to = '/hire' style={linkStyle} activeStyle={hoverStyle}>Copyright Policy</Link>
      </p>
      <p>
      <Link to = '/about' style={linkStyle} activeStyle={hoverStyle}>Code of Conduct</Link>
      </p>
      <p>
      <Link to = '/contact' style={linkStyle} activeStyle={hoverStyle}>Fees & Charges</Link>
      </p>
      </div>
      <div className="foot3">
        About
      <p>
      <Link to = '/about' style={linkStyle} activeStyle={hoverStyle}>About us</Link>
      </p>
      <p>
      <Link to = '/specialists' style={linkStyle} activeStyle={hoverStyle}>Specialists</Link>
      </p>
      <p>
      <Link to = '/about' style={linkStyle} activeStyle={hoverStyle}>Security</Link>
      </p>
      <p>
      <Link to = '/about' style={linkStyle} activeStyle={hoverStyle}>Happy Customers</Link>
      </p>
      <p>
      <Link to = '/about' style={linkStyle} activeStyle={hoverStyle}>News</Link>
      </p>
      </div>
      <div className="foot4">
        Glam Mart
        <p>
      <Link to = '/about' style={linkStyle} activeStyle={hoverStyle}>Categories</Link>
      </p>
      <p>
      <Link to = '/products' style={linkStyle} activeStyle={hoverStyle}>Products</Link>
      </p>
      <p>
      <Link to = '/cart' style={linkStyle} activeStyle={hoverStyle}>Cart</Link>
      </p>
      <p>
      <Link to = '/book' style={linkStyle} activeStyle={hoverStyle}>Appointment</Link>
      </p>
      <p>
      <Link to = '/luxe' style={linkStyle} activeStyle={hoverStyle}>Luxe</Link>
      </p>
      </div>
      <div className="bottom">
      Copyright © GLAM MART Prvt Limited (ACN 142 189 759) 
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
    </>
  );
};

export default NavigationBar;
