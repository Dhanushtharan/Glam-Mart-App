import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import logo from './assets/abc.png';
import personLogo from './assets/person-removebg-preview.png';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin} from 'react-icons/fa';

import './home.css';

const NavigationBar = () => {
  const navStyle = {
    backgroundColor: 'black',
    color: 'white',
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
    width: '50px',
    height: '40px',
  };

  const personLogoStyle = {
    width: '30px',
    height: '25px',
    marginLeft: '10px',
  };

  const sidebarStyle = {
    backgroundColor: 'grey',
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

  const slideshowContainerStyle = {
    marginTop: '70px',
    marginLeft: '220px',
    marginRight: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
  };

  const slideImages = [
    'https://res.cloudinary.com/dg2jouca2/image/upload/v1689180449/bodycare_rcncv4.webp',
    'https://res.cloudinary.com/dg2jouca2/image/upload/v1689180448/bodycare_ox5afp.jpg',
    'https://res.cloudinary.com/dg2jouca2/image/upload/v1689180448/hair_care_kxu2dm.jpg',
    'https://res.cloudinary.com/dg2jouca2/image/upload/v1689180453/skin_care_hmcdgv.jpg',
  ];

  const slideProperties = {
    duration: 2000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true,
    autoplay: true,
    pauseOnHover: true,
    canSwipe: true,
  };

  const slideContainerStyle = {
    height: '10px',
    width: '400px',
    margin: '20px 0',
  };

  const slideImageStyle = {
    height: '100%',
    width: '100%',
    objectFit: 'cover',
  };

  const textStyle = {
    fontSize: '20px',
    lineHeight: '1.5',
    margin: '20px',
    textAlign: 'justify',
    marginLeft: '300px',
    fontFamily: 'Georgia',
  };

  const boxContainerStyle = {
    display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  marginTop: '50px',
  marginLeft: '400px',
  };

  const boxStyle = {
    width: '600px',
  height: '220px',
  backgroundColor: 'lightgray',
  flexDirection: 'column',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  border: '2px solid gray',
  borderRadius: '5px',
  transition: 'background-color 0.3s ease',
  marginRight: '100px',
  };

  const boxTextStyle = {
    fontSize: '18px',
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
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
 
  const slideshowRef = useRef(null);



  return (
    <>
      <nav style={navStyle}>
        <Link to="/home" style={linkStyle}>
          <img src={logo} alt="Logo" style={logoStyle} />
        </Link>
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
          <Link to="/" style={linkStyle} activeStyle={hoverStyle}>
            Logout
          </Link>
          <img src={personLogo} alt="Person" style={personLogoStyle} />
        </div>
      </nav>
      <div style={sidebarStyle}>
        <br />

        <Link to="/cart" className="xyz" style={sidebarLinkStyle} activeStyle={hoverStyle}>
          CART
        </Link>
        <Link to="/payment" style={sidebarLinkStyle} activeStyle={hoverStyle}>
          PAYMENT
        </Link>
        <Link to="/wishlist" style={sidebarLinkStyle} activeStyle={hoverStyle}>
          WISHLIST
        </Link>
        <Link to="/" style={sidebarLinkStyle} activeStyle={hoverStyle}>
          ORDERS
        </Link>
        <Link to="/2wheelerInsurance" style={sidebarLinkStyle} activeStyle={hoverStyle}>
          PAYMENT
        </Link>
        
      </div>

      <div style={slideshowContainerStyle}>
        <br />
        <br />

        <div style={slideContainerStyle}>
          <Slide {...slideProperties} ref={slideshowRef}>
            {slideImages.map((image, index) => (
              <div key={index} className="each-slide">
                <img src={image} alt={`Slide ${index + 1}`} style={slideImageStyle} />
              </div>
            ))}
          </Slide>
        </div>
      </div>
      <div>
        <h3 style={textStyle}>
         
          Welcome to Glam Mart!<br></br>
          <br /><br />
          <br /><br />
          <br /><br />
          <br /><br />
        </h3>
        <div style={boxContainerStyle}>
          <div  className="abcd" style={boxStyle}>
            <h3 style={boxTextStyle}></h3>
            <p>SKIN CARE<br></br></p>
          </div>
          <div  className="abcd" style={boxStyle}>
            <h3 style={boxTextStyle}></h3>
            <p>HAIR CARE<br></br></p>
          </div>
          <div  className="abcd" style={boxStyle}>
            <h3 style={boxTextStyle}></h3>
            <p>BODY<br></br></p>
          </div>
          
        </div>        
      </div>
      
      <br></br>
      <br></br>
      <footer style={footerStyle}>
      <div>
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
    </footer>
    </>
  );
};

export default NavigationBar;
