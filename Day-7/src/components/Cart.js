import React, { useState } from "react";
import "./Cart.css";

function Cart() {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Neutrogena Hydro Boost Water Gel For Men", price: 999.99, image: "https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/3/f/3fcb16c4891080614470.jpg" },
    { id: 2, name: "MCaffeine D-Tan Exfoliating Coffee Face Scrub With Walnut & Vitamin E for Fresh & Glowing Skin", price: 290.99, image: "https://images-static.nykaa.com/media/catalog/product/4/8/4870ebdNYKMCF0000004ab_1.jpg" },
    { id: 3, name: "NIVEA Men Face Wash, Dark Spot Reduction, for Clean & Clear Skin with 10x Vitamin C Effect", price: 100.99, image: "https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/5/6/56d0c3a4005808231423_1.jpg" },
  ]);

  const removeItem = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  const formatIndianPrice = (price) => {
    const formattedPrice = price.toLocaleString("en-IN", {
      style: "currency",
      currency: "INR",
    });
    return formattedPrice;
  };

  return (
    <div className="backg">
    <div className="cart-container">
      <h1>Cart</h1>
      <div className="cart-items">
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <div className="item-info">
              <img src={item.image} alt={item.name} height={50} width ={50}className="item-image" />
              <h3 className="item-name">{item.name}</h3>
              <div className="item-price">{formatIndianPrice(item.price)}</div>
            </div>
            <button className="remove-button" onClick={() => removeItem(item.id)}>
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  </div>
  );
}

export default Cart;