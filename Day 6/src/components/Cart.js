import React, { useState } from 'react';
import './Cart.css';
const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
  };

  return (
    <div>
      <h1>Shopping Cart</h1>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            {item.name} - ${item.price}
            <button onClick={() => removeFromCart(index)}>Remove</button>
          </li>
        ))}
      </ul>
      <button onClick={() => addToCart({ name: 'Product 1', price: 10 })}>
        Add Product 1
      </button>
      <button onClick={() => addToCart({ name: 'Product 2', price: 20 })}>
        Add Product 2
      </button>
    </div>
  );
};

export default Cart;
