import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem } from "../redux/CartSlice";
import { Link } from "react-router-dom";

function CartItem() {
  const cart = useSelector(state => state.cart.cart);

  const dispatch = useDispatch();

  const total = cart.reduce(
    (sum, item) => sum + item.price,
    0
  );

  return (
    <div>
      <h1>Shopping Cart</h1>

      <h2>Total: ${total}</h2>

      {cart.map((item) => (
        <div key={item.id}>
          <h3>{item.name}</h3>

          <p>${item.price}</p>

          <button
            onClick={() => dispatch(removeItem(item.id))}
          >
            Delete
          </button>
        </div>
      ))}

      <button>Checkout Coming Soon</button>

      <br /><br />

      <Link to="/plants">
        <button>Continue Shopping</button>
      </Link>
    </div>
  );
}

export default CartItem;