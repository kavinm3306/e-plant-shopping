import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/CartSlice";
import { Link } from "react-router-dom";

const plants = [
  {
    id: 1,
    name: "Aloe Vera",
    price: 10,
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6"
  },

  {
    id: 2,
    name: "Snake Plant",
    price: 15,
    image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735"
  },

  {
    id: 3,
    name: "Peace Lily",
    price: 20,
    image: "https://images.unsplash.com/photo-1459156212016-c812468e2115"
  }
];

function ProductList() {
  const dispatch = useDispatch();

  return (
    <div>
      <div className="navbar">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/cart">Cart</Link>
      </div>

      <div className="products">
        {plants.map((plant) => (
          <div className="card" key={plant.id}>
            <img src={plant.image} alt={plant.name} />

            <h2>{plant.name}</h2>

            <p>${plant.price}</p>

            <button
              onClick={() => dispatch(addItem(plant))}
            >
              Add To Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;