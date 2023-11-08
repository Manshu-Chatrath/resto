import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../Components/Footer";
import Nav from "../Components/Nav";

import {
  allcartitems,
  realextras,
  deleting,
  totalcart,
} from "../action/action";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Checkout from "../Components/checkout";
const public_key =
  "pk_test_51HvZrNHtX5JzPZUWepneAgxsxR6F5Yt7qLLU8HbleQYAb4ov91OI5J7aWkM0n9oYbDJ53u2f8yG33hUaSjKuusIr00E1PdBFly";
const stripTestPromise = loadStripe(public_key);

const Cart = () => {
  const cartItems = useSelector((state) => state.allcartitems?.items);
  const loading = useSelector((state) => state.allcartitems?.loading);
  const extras = useSelector((state) => state.everything);
  const total = useSelector((state) => state.totalcart);
  const [price, setPrice] = useState(0);
  const [dishes, setDishes] = useState([]);
  useEffect(() => {
    let s = 0;
    dishes.map((dish) => {
      s += +dish.price;
    });
    setPrice(s);
  }, [dishes]);

  useEffect(() => {}, [dishes]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allcartitems());
    dispatch(realextras());
  }, []);

  useEffect(() => {
    dispatch(totalcart());
  }, []);

  const [id, setid] = useState("");

  function checkout() {
    return (
      <Elements stripe={stripTestPromise}>
        <Checkout dishes={dishes} price={price} />
      </Elements>
    );
  }

  function delete33() {
    return (
      <div className="hide delete-tab">
        <div className="tab">
          <div className="text">
            <h1>Delete Dish?</h1>
            <p>Do you want to delete this dish?</p>
            <div className="btnns">
              <button
                className="delete2"
                onClick={() => dispatch(deleting(id))}>
                Delete
              </button>
              <button
                className="delete2"
                onClick={() => {
                  let delete2 = document.querySelector(".delete-tab");
                  delete2.classList.add("hide");
                  document.querySelector("body").style.overflow = "visible";
                }}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  function load() {
    if (loading === "pending") {
      return (
        <div className="wait mb-2 text-center">
          <div className="loader"></div>
        </div>
      );
    } else if (cartItems.length === 0 && loading === "success") {
      return (
        <div className="wait mb-2 text-center">
          <h4>No items in the cart.</h4>
        </div>
      );
    } else {
      return allcartitems2();
    }
  }
  function open(id) {
    let delete2 = document.querySelector(".delete-tab");
    delete2.classList.remove("hide");
    document.querySelector("body").style.overflow = "hidden";
    setid(id);
    window.addEventListener("click", function (e) {
      if (e.target.className === "delete-tab") {
        delete2.classList.add("hide");
        document.querySelector("body").style.overflow = "visible";
      }
    });
  }
  function including(id, price, title, str) {
    return (
      <>
        <div>
          Price: $<span className="total-price">{price.toFixed(2)}</span>
        </div>
        <div className="exxtras">
          {str.length > 0 ? (
            <div>Extras: {str}</div>
          ) : (
            <div>Extras: No Extras Added</div>
          )}
        </div>
      </>
    );
  }
  function allcartitems2() {
    const arr = [];
    return total.map((item) => {
      return cartItems.map((dish) => {
        let extra = extras.filter((e) => e.real_id === item.id);
        let str = "";
        let sum = 0;
        for (let i = 0; i < extra.length; i++) {
          str += extra[i].title + " | ";
          sum += extra[i].price;
        }

        let tot = sum + dish.price;
        arr.push({ id: item.id, price: tot.toFixed(2), title: dish.title });
        if (arr.length === total.length && dishes.length === 0) {
          setDishes([...arr]);
        }
        if (item.dishes_id === dish.id) {
          return (
            <article className="cart_items">
              <img src={dish.url} alt="" className="image1777" />
              <div className="details">
                <div>Title: {dish.title}</div>
                {including(item.id, tot, dish.title, str)}
              </div>
              <input type="hidden" name="productId" />
              <button
                className="delete"
                onClick={() => {
                  open(item.id);
                }}>
                X
              </button>
            </article>
          );
        }
      });
    });
  }

  function open2() {
    let delete2 = document.querySelector("#checkout");
    delete2.classList.remove("hid");
    document.querySelector("body").style.overflow = "hidden";
    window.addEventListener("click", function (e) {
      if (e.target.id === "checkout") {
        delete2.classList.add("hid");
        document.querySelector("body").style.overflow = "visible";
      }
    });
  }

  return (
    <>
      <div className="over"></div>
      <div id="real-reservation">
        <Nav />
        <hr />
        <div className="container00" id="he">
          <div className="col-12" id="b">
            <h1>MY CART</h1>
          </div>
        </div>
      </div>
      <div>
        <h2>Your cart items:</h2>{" "}
        <hr style={{ borderTop: "1px solid black" }} />
        <section className="cart1">{load()}</section>
        <hr style={{ borderTop: "1px solid black" }} />
        <h2>Click below to checkout from the cart</h2>
        <div className="container00">
          <button
            className="order"
            onClick={() => {
              if (total.length > 0) {
                open2();
                document.querySelector(".warning").classList.add("hid");
              } else {
                document.querySelector(".warning").classList.remove("hid");
              }
            }}>
            Checkout
          </button>
        </div>
        <hr />
      </div>
      {delete33()}
      {checkout()}

      <strong>
        <div className="warning text-center hid text-danger">
          Please add some items into the cart{" "}
        </div>
      </strong>
      <br />
      <Footer />
    </>
  );
};

export default Cart;
