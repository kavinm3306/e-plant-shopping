import React, { useState } from "react";

import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

import "./App.css";

import AboutUs from "./components/AboutUs";
import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";

function LandingPage() {

  const [showProductList, setShowProductList] =
    useState(false);

  const handleGetStartedClick = () => {

    setShowProductList(true);

    window.location.href = "/plants";
  };

  return (

    <div className="landing">

      <h1>
        Welcome to Paradise Nursery
      </h1>

      <p>
        Bring Nature Closer To You 🌱
      </p>

      <button
        onClick={handleGetStartedClick}
      >
        Get Started
      </button>

      {
        showProductList && <p>Loading Plants...</p>
      }

    </div>

  );
}

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<LandingPage />}
        />

        <Route
          path="/about"
          element={<AboutUs />}
        />

        <Route
          path="/plants"
          element={<ProductList />}
        />

        <Route
          path="/cart"
          element={<CartItem />}
        />

      </Routes>

    </BrowserRouter>

  );
}

export default App;