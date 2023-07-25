import React from 'react';
import {Link} from 'react-router-dom';
import logo from './assets/abc.png';
import personLogo from './assets/personlogo.png';
import './Products.css';

const Product = () => {
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
    const ProductsBaby = [
      {
        name: "Sebamed Baby Protective Facial Cream",
        image: "https://images-static.nykaa.com/media/catalog/product/8/f/8f9809d4103040014870_1.jpg",
        price: 850.99,
      },
      {
        name: "Cetaphil Baby Daily Lotion With Shea Butter(400ml)",
        image: "https://images-static.nykaa.com/media/catalog/product/d/c/dc9921e9318637043316_1.jpg",
        price: 739.99,
      },
      {
        name: "Mamaearth Moisturizing Baby Bathing Soap Bar (Value Pack 75gm x 2)",
        image: "https://images-static.nykaa.com/media/catalog/product/s/y/syndet-bar_1.jpg",
        price: 276.99,
      },
      {
        name: "Mother Sparsh 99 % Pure Water Unscented Baby Wipes Pack Of 2",
        image: "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/d/2/d2addf98908009149398.png",
        price: 568.99,
      }
    ]
    const ProductsLips = [
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

    const ProductsEye = [
      {
        name:"MCaffeine Coffee Hydrogel Under Eye Patches for Dark Circles with Hyaluronic Acid - 30 Pairs",
        image:"https://images-static.nykaa.com/media/catalog/product/4/8/4870ebdMCAFF00000257ab_1.jpg",
        price: 759.99,
      },
      {
        name:"Minimalist SPF 30 Lip Balm",
        image:"https://images-static.nykaa.com/media/catalog/product/a/f/afa0685MINIM00000086.jpg",
        price: 299.99,
      },
      {
        name: "Be Bodywise 2% Bio Retinol Under Eye Cream - Helps Reduce Dark Circles, Fine Lines ,Wrinkles",
        image: "https://images-static.nykaa.com/media/catalog/product/0/d/0da3b24BEBOD00000079_1.jpg",
        price: 349.99,
      },
      {
        name:"MCaffeine Choco Kissed Lip Gift Kit - Gift Sets & Combos for Women & Men",
        image:"https://images-static.nykaa.com/media/catalog/product/d/f/df047dfMCAFF00000165_nws1.jpg",
        price: 809.99,
      }
    ]

    const ProductsNatural = [
      {
        name: "Himalaya Purifying Neem Face Wash",
        image: "https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/e/a/eaea13d8901138844172_1.jpg",
        price: 350.99,
      },
      {
        name: "Biotique Bio Brightening & Tan-Removal Combo",
        image: "https://images-static.nykaa.com/media/catalog/product/4/f/4f5e867NYKBNDBIO0028_1.jpg",
        price: 189.99,
      },
      {
        name: "Biotique Ocean Kelp Anti-Hair Fall Shampoo For Hair Growth Therapy",
        image: "https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/5/8/58f76168904317300308_1.jpg",
        price: 399.99,
      },
      {
        name: "Mamaearth Multani Mitti Face Wash",
        image: "https://images-static.nykaa.com/media/catalog/product/c/a/ca3c5938904417306439_1.jpg",
        price: 240.99,
      },

    ];

    const ProductsHair = [
      {
        name: "L'Oreal Professionnel Absolut Repair Oil 10-In-1 Multi-benefit Serum For Dry and Damaged Hair",
        image: "https://images-static.nykaa.com/media/catalog/product/1/4/149e044LORAA00000013a_1.jpg",
        price: 1300.99,
      },
      {
        name: "Love Beauty & Planet Curry Leaves- Biotin & Mandarin Orange Sulfate Free Shampoo",
        image: "https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/8/2/82b17ffLOVEB00000102_1.jpg",
        price: 520.99,
      },
      {
        name: "Biotique Green Apple Shine & Gloss Fresh DaiLy Purifying Shampoo & Conditioner",
        image: "https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/9/a/9a4eb598904317300223_1.jpg",
        price: 476.99,
      },
      {
        name: "Minimalist Hair Growth Redensyl & Actives Hair 18% Serum For Reducing Hairfall & Boosts Growth",
        image: "https://images-static.nykaa.com/media/catalog/product/b/c/bcb546bMINIM00000018_2.jpg",
        price: 799.99,
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
            <h1 style={titleStyle}>Baby Products</h1>
            <div className='product-container'>
            {ProductsBaby.map((item, index) => (
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
            <h1 style={titleStyle}>Eye Care Products</h1>
            <div className='product-container'>
            {ProductsEye.map((item, index) => (
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
            <h1 style={titleStyle}>Lip Care Products</h1>
            <div className='product-container'>
            {ProductsLips.map((item, index) => (
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
            <h1 style={titleStyle}>Natural Products</h1>
            <div className='product-container'>
            {ProductsNatural.map((item, index) => (
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
export default Product;