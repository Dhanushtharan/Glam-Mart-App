import React from 'react';
import {Link} from 'react-router-dom';
import logo from './assets/abc.png';
import personLogo from './assets/personlogo.png';
import './Products.css';

const Luxe = () => {
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
      const bodyStyle = {
        backgroundColor:'white',
        paddingLeft:'300px',
      }
     const titleStyle={
      fontFamily:'san-serif',
      color:'white',
      fontSize:'x-large',
     };
    const ProductsPerfume = [
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
    
    const ProductsBody = [
      {
        name: "MCaffeine Coffee Under Eye Cream for Dark Circle & Puffiness Reduction with Hyaluronic Acid & Vit E",
        image: "https://images-static.nykaa.com/media/catalog/product/4/2/423c13fMCAFF00000222a_1.jpg",
        price: 299.99,
      },
      {
        name: "L'Oreal Paris Revitalift Hyaluronic Acid Eye Serum With 2.5% Hyaluronic Acid + Caffeine",
        image: "https://images-static.nykaa.com/media/catalog/product/0/6/06d7d68LOREA000004210_1.jpg",
        price: 809.99,
      },
      {
        name:"Nykaa Serial Kisser Tinted Lip Balm - Chocolate",
        image:"https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/7/a/7a9fe62NYKAC00000637_2.jpg",
        price: 161.99,
      },
      {
        name: "Biotique Bio Sea Weed Cooling Anti Fatigue Eye Gel",
        image: "https://images-static.nykaa.com/media/catalog/product/7/f/7fffc078906009450223_1.jpg",
        price: 192.99,
      },
      

    ];

    const ProductsSkin = [
      {
        name:"L'Occitane Immortelle Harmonie Divine Anti-Aging Serum(30ml)",
        image:"https://images-static.nykaa.com/media/catalog/product/1/3/13da42e27hs030i16.jpg",
        price: 16999.99,
      },
      {
        name:"Estee Lauder Perfectionist CP+R Wrinkle Lifting / Firming Serum",
        image:"https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/2/7/27131935353.jpg",
        price: 12699.99,
      },
      {
        name: "EVE LOM Moisture Cream",
        image: "https://images-static.nykaa.com/media/catalog/product/9/b/9bd2b47EVELO00000006_1.jpg",
        price: 8899.99,
      },
      {
        name:"L'Occitane Osmanthus Gift Box",
        image:"https://images-static.nykaa.com/media/catalog/product/8/a/8a8ceaaLIN42SAL0722C.jpg",
        price: 7893.99,
      }
    ]

    const ProductsHair = [
      {
        name: "Philip B Forever Shine Conditioner(947ml)",
        image: "https://images-static.nykaa.com/media/catalog/product/c/d/cd74b79858991004107_1.jpg",
        price: 22199.99 ,
      },
      {
        name: "Moroccanoil Treatment , Hydarting Shampoo And Conditioner - Hydration Collection",
        image: "https://images-static.nykaa.com/media/catalog/product/0/f/0f65acenykmrcomb0016_1.jpg",
        price: 8549.99,
      },
      {
        name: "Philip B Peppermint Avocado Shampoo(947ml)",
        image: "https://images-static.nykaa.com/media/catalog/product/a/6/a670b79893239000510_1.jpg",
        price: 8329.99,
      },
      {
        name: "Aveda Botanical Repair Strengthening Overnight Serum & Hair Masque",
        image: "https://images-static.nykaa.com/media/catalog/product/6/3/63a2589AVEDA00000765_0.jpg",
        price: 8139.99,
      },

    ];
    
  
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
        <Link to="/book" style={sidebarLinkStyle} activeStyle={hoverStyle}>
          BOOK APPOINTMENT
        </Link>
        <Link to="/cart" style={sidebarLinkStyle} activeStyle={hoverStyle}>
          CART
        </Link>
        <Link to="/luxe" style={sidebarLinkStyle} activeStyle={hoverStyle}>
          LUXE
        </Link>
        <Link to="/" style={sidebarLinkStyle} activeStyle={hoverStyle}>
          
        </Link>
        
      </div>
          <br/><br/><br/><br/>
          <div className='p'>
            <h1 style={titleStyle}>Perfume</h1>
            <div className='product-container'>
            {ProductsPerfume.map((item, index) => (
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
        <div className='p'>
            <h1 style={titleStyle}>Skin Care Products</h1>
            <div className='product-container'>
            {ProductsSkin.map((item, index) => (
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
        <div className='p'>
            <h1 style={titleStyle}>Body Care Products</h1>
            <div className='product-container'>
            {ProductsBody.map((item, index) => (
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
      
        <div className='p'>
            <h1 style={titleStyle}>Hair Care Products</h1>
            <div className='product-container'>
            {ProductsHair.map((item, index) => (
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
export default Luxe;