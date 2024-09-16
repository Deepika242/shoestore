import React, { useState } from "react";
import Shoes from "../components/Shoes";
import ShoeForm from "../components/ShoeForm";
import { initialShoes } from "../data";
import "./Products.css";
const Products = ({ addToCart }) => {
  const [shoes, setShoes] = useState(initialShoes);

  const addShoe = (newShoe) => {
    setShoes([...shoes, { ...newShoe, id: shoes.length + 1 }]);
  };

  return (
    <div className="products">
      <h2>Our Products</h2>
      <ShoeForm addShoe={addShoe} />
      <div className="shoe-list">
        {shoes.map((shoe) => (
          <Shoes key={shoe.id} shoe={shoe} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default Products;
