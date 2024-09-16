import React from "react";

const Shoes = ({ shoe, addToCart }) => {
  return (
    <div className="shoe-item">
      <h3>{shoe.name}</h3>
      <p>{shoe.description}</p>
      <p>Price: ${shoe.price}</p>
      <button className="btn" onClick={() => addToCart(shoe)}>
        Add to Cart
      </button>
    </div>
  );
};

export default Shoes;
