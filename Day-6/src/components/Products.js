import React from 'react';
import {Link} from 'react-router-dom';
import logo from './assets/abc.png';
import personLogo from './assets/personlogo.png';

const Fragrance = () => {
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
      const bodyStyle = {
        backgroundColor:'white',
        paddingLeft:'300px',
      }
    
      const socialIconStyle = {
        fontSize: '24px',
        marginRight: '10px',
        color: '#50afbf',
      };
     const titleStyle={
      fontFamily:'san-serif',
      color:'white',
      fontSize:'x-large',
      marginLeft:'23%',
     };
    const Products1 = [
      {
        name: "Yves Saint Laurent Mon Paris Eau De Parfum",
        image: "https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/f/6/f64599f3614270561658_1.jpg",
        price: 6599.99,
      },
      {
        name: "PARIS - VENISE Les Eaux de CHANEL - Eau de Toilette Spray",
        image: "https://www.chanel.com/images//t_one//w_0.51,h_0.51,c_crop/q_auto:good,f_auto,fl_lossy,dpr_1.2/w_620/paris-venise-les-eaux-de-chanel-eau-de-toilette-spray-4-2fl-oz--packshot-default-102420-8820672299038.jpg",
        price: 11649.99,
      },
      {
        name: "Gucci Guilty Black Eau De Toilette For Him",
        image: "https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/e/c/ec4f4acnyguc00000014_1.jpg",
        price: 6400.99,
      },
      {
        name: "Cartier Declaration Parfum",
        image: "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/0/1/01ffe283432240501868_001.jpg",
        price: 7300.99,
      },

    ];

    const Products2 = [
      {
        name:"Victoria's Secret Lavender Vanilla Mist",
        image:"https://images-static.nykaa.com/media/catalog/product/f/3/f36e7a1667553848123.jpg",
        price: 2099.99,
      },
      {
        name:"BVLGARI BLV PH Set",
        image:"https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/0/4/04e7748bvlga00000046.jpg",
        price: 8200.99,
      },
      {
        name:"BVLGARI Rose Goldea Eau De Parfum",
        image:"https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/7/8/783320502514_1_.jpg",
        price: 11900.99,
      },
      {
        name:"DIOR Homme Sport Eau De Toilette",
        image:"https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/f/b/fb0c4433348901580076_1.jpg",
        price: 7500.99,
      }

    ]
  
    const formatIndianPrice = (price) => {
      const formattedPrice = price.toLocaleString("en-IN", {
        style: "currency",
        currency: "INR",
      });
      return formattedPrice;
    };
     
      return (
        <>
        <div style={bodyStyle}>
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
        <Link to="/wishlist" style={sidebarLinkStyle} activeStyle={hoverStyle}>
          WISHLIST
        </Link>
        <Link to="/cart" style={sidebarLinkStyle} activeStyle={hoverStyle}>
          CART
        </Link>
        <Link to="/orders" style={sidebarLinkStyle} activeStyle={hoverStyle}>
          ORDERS
        </Link>
        <Link to="/" style={sidebarLinkStyle} activeStyle={hoverStyle}>
          
        </Link>
        
      </div>
          <br/><br/><br/><br/>
          <div>
            <h1 style={titleStyle}>Fragrances</h1>
            <div className='product-container'>
            {Products1.map((item, index) => (
            <div className="product-item" key={index}>
              <img src={item.image} alt={item.name} height={50} width={50}/>
              <h3 className="heading">{item.name}</h3>
              <p>Price: {formatIndianPrice(item.price)}</p>
              <div>    
                <Link to='/cart'> <button className="b">Add to Cart</button></Link>
              </div>
            </div>
            ))}
          </div>
          <br/>
          <div className='product-container'>
            {Products2.map((item, index) => (
            <div className="product-item" key={index}>
              <img src={item.image} alt={item.name} height={50} width={50}/>
              <h3 className="heading">{item.name}</h3>
              <p>Price: {formatIndianPrice(item.price)}</p>
              <div>    
                <Link to='/cart'> <button className="b">Add to Cart</button></Link>
              </div>
            </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
    
} ;
export default Fragrance;