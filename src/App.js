import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import AboutUs from "./components/AboutUs";
import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";

function LandingPage() {

  const handleGetStartedClick = () => {
    window.location.href = "/plants";
  };

  return (

    <div className="landing">

      <h1>Paradise Nursery</h1>

      <p>Bring Nature Closer To You 🌱</p>

      <button onClick={handleGetStartedClick}>
        Get Started
      </button>

    </div>

  );

}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/plants" element={<ProductList />} />
        <Route path="/cart" element={<CartItem />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;