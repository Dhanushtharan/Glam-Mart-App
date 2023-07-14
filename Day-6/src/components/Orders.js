import React, { useState } from 'react';

const Orders = () => {
  const [orders, setOrders] = useState([]);

  const placeOrder = () => {
    setOrders([...orders, { id: Date.now(), status: 'Pending' }]);
  };

  const cancelOrder = (orderId) => {
    const updatedOrders = orders.filter((order) => order.id !== orderId);
    setOrders(updatedOrders);
  };

  return (
    <div>
      <h1>Orders</h1>
      {orders.length === 0 ? (
        <p>No orders yet.</p>
      ) : (
        <ul>
          {orders.map((order) => (
            <li key={order.id}>
              <span>Order ID: {order.id}</span>
              <span>Status: {order.status}</span>
              <button onClick={() => cancelOrder(order.id)}>Cancel</button>
            </li>
          ))}
        </ul>
      )}
      <button onClick={placeOrder}>Place Order</button>
    </div>
  );
};

export default Orders;
