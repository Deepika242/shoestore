import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
const Home = () => {
  return (
    <div class="container">
      <h2 className="home">Walk the world in style..........</h2>
      <div>
        <img
          className="pic"
          src="https://www.superkicks.in/cdn/shop/files/AIR-MAX-90-DRIFT_NIKE.jpg?v=1725956376"
        />
      </div>
      <h1 className="text2"> Find your perfect pair of shoes today!</h1>
      <div className="btnn">
        <Link to="/products">
          <button className="btn"> View Products</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
