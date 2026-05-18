import React from "react";

import {
  useSelector,
  useDispatch
} from "react-redux";

import {
  removeItem,
  updateQuantity
} from "../redux/CartSlice";

import { Link } from "react-router-dom";

function CartItem() {

  const cart = useSelector(
    (state) => state.cart.cart
  );

  const dispatch = useDispatch();

  const total = cart.reduce(

    (sum, item) =>

      sum +
      item.price * item.quantity,

    0

  );

  return (

    <div>

      <div className="navbar">

        <Link to="/">Home</Link>

        <Link to="/about">About</Link>

        <Link to="/plants">
          Products
        </Link>

      </div>

      <h1>Shopping Cart</h1>

      <h2>Total: ${total}</h2>

      {

        cart.map((item) => (

          <div
            className="card"
            key={item.id}
          >

            <img
              src={item.image}
              alt={item.name}
              width="150"
            />

            <h3>{item.name}</h3>

            <p>${item.price}</p>

            <p>
              Quantity:
              {item.quantity}
            </p>

            <button

              onClick={() =>

                dispatch(

                  updateQuantity({

                    id: item.id,
                    amount: 1

                  })

                )

              }

            >

              +

            </button>

            <button

              onClick={() =>

                dispatch(

                  updateQuantity({

                    id: item.id,
                    amount: -1

                  })

                )

              }

            >

              -

            </button>

            <button

              onClick={() =>

                dispatch(
                  removeItem(item.id)
                )

              }

            >

              Delete

            </button>

          </div>

        ))

      }

      <br />

      <button>
        Checkout
      </button>

      <br /><br />

      <Link to="/plants">

        <button>
          Continue Shopping
        </button>

      </Link>

    </div>

  );

}

export default CartItem;