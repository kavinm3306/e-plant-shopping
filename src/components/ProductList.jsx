import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/CartSlice";
import { Link } from "react-router-dom";

const plants = [
  {
    id: 1,
    name: "Aloe Vera",
    price: 10,
    category: "Succulents",
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6"
  },

  {
    id: 2,
    name: "Snake Plant",
    price: 15,
    category: "Succulents",
    image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735"
  },

  {
    id: 3,
    name: "Peace Lily",
    price: 20,
    category: "Flowering Plants",
    image: "https://images.unsplash.com/photo-1459156212016-c812468e2115"
  },

  {
    id: 4,
    name: "Spider Plant",
    price: 18,
    category: "Air Purifying",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b"
  },

  {
    id: 5,
    name: "Money Plant",
    price: 12,
    category: "Indoor Plants",
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411"
  },

  {
    id: 6,
    name: "Fern Plant",
    price: 22,
    category: "Indoor Plants",
    image: "https://images.unsplash.com/photo-1463936575829-25148e1db1b8"
  }
];

function ProductList() {

  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart.cart);

  const categories = [...new Set(plants.map(
    (plant) => plant.category
  ))];

  return (

    <div>

      <div className="navbar">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>

        <Link to="/cart">
          Cart ({cart.length})
        </Link>
      </div>

      {
        categories.map((category) => (

          <div key={category}>

            <h2>{category}</h2>

            <div className="products">

              {
                plants
                  .filter(
                    (plant) => plant.category === category
                  )

                  .map((plant) => (

                    <div className="card" key={plant.id}>

                      <img
                        src={plant.image}
                        alt={plant.name}
                      />

                      <h3>{plant.name}</h3>

                      <p>${plant.price}</p>

                      <button

  disabled={
    cart.find(
      (item) => item.id === plant.id
    )
  }

  onClick={() =>
    dispatch(addItem(plant))
  }

>

  {

    cart.find(
      (item) => item.id === plant.id
    )

    ?

    "Added to Cart"

    :

    "Add to Cart"

  }

</button>

                    </div>

                  ))
              }

            </div>

          </div>

        ))
      }

    </div>

  );
}

export default ProductList;