// src/App.jsx
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Shoes from "./components/Shoes";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import "./App.css";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (shoe) => {
    setCartItems([...cartItems, shoe]);
  };

  const removeFromCart = (index) => {
    setCartItems(cartItems.filter((_, i) => i !== index));
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products addToCart={addToCart} />} />
        <Route
          path="/cart"
          element={
            <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
