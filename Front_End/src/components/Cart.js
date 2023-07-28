import React from "react";
import "./Cart.css";
import {createStore} from 'redux';
import {Provider,useSelector,useDispatch} from 'react-redux';



const INCREMENT_QUANTITY = 'INCREMENT_QUANTITY';
const DECREMENT_QUANTITY = 'DECREMENT_QUANTITY';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

const incrementQuantity = (itemId) => ({
  type: INCREMENT_QUANTITY,
  payload: itemId,
});

const decrementQuantity = (itemId) => ({
  type: DECREMENT_QUANTITY,
  payload: itemId,
});

const removeFromCart = (itemId) => ({
  type: REMOVE_FROM_CART,
  payload: itemId,
});


const initialState = {
  cartItems: [
    { id: 1, name: "Neutrogena Hydro Boost Water Gel For Men", price: 999.99, image: "https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/3/f/3fcb16c4891080614470.jpg",quantity:1 },
    { id: 2, name: "MCaffeine D-Tan Exfoliating Coffee Face Scrub With Walnut & Vitamin E for Fresh & Glowing Skin", price: 290.99, image: "https://images-static.nykaa.com/media/catalog/product/4/8/4870ebdNYKMCF0000004ab_1.jpg",quantity:1 },
    { id: 3, name: "NIVEA Men Face Wash, Dark Spot Reduction, for Clean & Clear Skin with 10x Vitamin C Effect", price: 100.99, image: "https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/5/6/56d0c3a4005808231423_1.jpg",quantity:1 },
    {
      id:4,
      name: "Sebamed Baby Protective Facial Cream",
      price: 900.99,
      image: "https://images-static.nykaa.com/media/catalog/product/8/f/8f9809d4103040014870_1.jpg",
      quantity:1
    },
    {
      id:5,
      name: "Cetaphil Baby Daily Lotion With Shea Butter(400ml)",
      price: 890.99,
      image: "https://images-static.nykaa.com/media/catalog/product/d/c/dc9921e9318637043316_1.jpg",
      quantity:1
    },
    {
      id:6,
      name: "Mamaearth Moisturizing Baby Bathing Soap Bar (Value Pack 75gm x 2)",
      price: 250.9,
      image: "https://images-static.nykaa.com/media/catalog/product/s/y/syndet-bar_1.jpg",
      quantity:1
    },
    {
      id:7,
      name: "Mother Sparsh 99 % Pure Water Unscented Baby Wipes Pack Of 2",
      price: 650.99,
      image: "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/d/2/d2addf98908009149398.png",
      quantity:1
    },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_QUANTITY:
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };
    case DECREMENT_QUANTITY:
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id === action.payload
            ? { ...item, quantity: Math.max(0, item.quantity - 1) }
            : item
        ),
      };

      case REMOVE_FROM_CART:
        return {
          ...state,
          cartItems: state.cartItems.filter((item) => item.id !== action.payload),
        };

    default:
      return state;
  }
};

const store = createStore(reducer);

// Component
const CartC = () => {
  const cartItems = useSelector((state) => state.cartItems);
  const dispatch = useDispatch();

  const handleIncrement = (itemId) => {
    dispatch(incrementQuantity(itemId));
  };

  const handleDecrement = (itemId) => {
    dispatch(decrementQuantity(itemId));
  };

  const handleRemoveFromCart = (itemId) => {
    dispatch(removeFromCart(itemId));
  };

  const getTotalPrice = () => {
    const total = cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    return total.toFixed(2);
  };

  return (
    <div className="backg">
    <div className="cart-container">
      <h1>Cart</h1>
      <div className="'cart-items">
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <div className="item-info">
                <img src={item.image} alt={item.name} height={50} width={50} className="item-image"/>
                <h3 className="item-name">{item.name}</h3>
                <button className="reducer1"onClick={() => handleDecrement(item.id)}>-</button>
                <h4 className="item-quantity"> {item.quantity} </h4>
                <button className="reducer2" onClick={() => handleIncrement(item.id)}>+</button>
                <div className="item-price">₹{(item.price *item.quantity).toFixed(2)}</div>
                <button  className="remove-button" onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
              </div>
            </div>
          ))}
        </ul>

      )}
      </div>
      <p className="total"> Total: ₹{getTotalPrice()}</p>
    </div>
  </div>
  );
}

const Cart = () => (
  <Provider store={store}>
    <CartC />
  </Provider>
);

export default Cart;