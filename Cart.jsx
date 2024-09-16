import React from "react";

const Cart = ({ cartItems, removeFromCart }) => {
  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        cartItems.map((item, index) => (
          <div key={index} className="cart-item">
            <h3>{item.name}</h3>
            <p>Price: ${item.price}</p>
            <button onClick={() => removeFromCart(index)}>Remove</button>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
