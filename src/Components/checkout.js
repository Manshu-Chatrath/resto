import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { checkout } from "../action/action";
const Checkout = (props) => {
  const stripe = useStripe();
  const elements = useElements();
  const dispatch = useDispatch();
  const message = useSelector((state) => state.paymentstatus);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (message.length > 0) {
      setTimeout(() => {
        window.location.reload();
      }, 4000);
    }
  }, [message]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let email = document.querySelector("#email2");
    setLoading(true);
    const cardElement = elements.getElement(CardElement);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });
    let price = props.price;
    let id = { paymentMethod };
    if (!error) {
      document.querySelector("#form").style.display = "none";
      dispatch(checkout(id, props.dishes, price, email.value));
    } else {
      setLoading(false);
      document.querySelector(".eer").innerHTML = error.message;
    }
  };

  return (
    <>
      <div className="reservation-tab hid" id="checkout">
        <div className="book-tab2">
          <div className="heading">
            <h1 className="text-center mt-2">Total Price: ${props.price}</h1>
          </div>
          <p style={{ margin: " 0 20px " }} className="text-center res313">
            {loading && message.length === 0 ? (
              <div class="loader text-center"></div>
            ) : (
              "The order has been placed, you ll get an email with your order number."
            )}
          </p>
          <br />

          <p style={{ margin: " 0 20px " }} className="text-center">
            Please use <strong>4242 4242 4242 4242</strong> as credit number as
            it is for testing purpose, you can use any future date, cvv and ZIP
            code.
          </p>

          <p
            style={message.length > 0 ? { display: "none" } : {}}
            className="text-center text-danger eer"></p>
          <form id="form" action="" onSubmit={(e) => handleSubmit(e)}>
            <div className="input-group col-12" id="re">
              <input
                type="email"
                required
                id="email2"
                placeholder="Enter your email address"
                className="form-control"
              />
            </div>
            <input type="hidden" name="products" />
            <div className="row mt-2" id="re">
              <div className="input-group col-6">
                <input
                  type="text"
                  required
                  id="for"
                  placeholder="First Name"
                  className="form-control"
                />
              </div>
              <div className="input-group col-6">
                <input
                  type="text"
                  required
                  id="for"
                  placeholder="Last Name"
                  className="form-control"
                />
              </div>
              <CardElement
                options={{
                  style: {
                    base: {
                      fontSize: "16px",
                      color: "#424770",
                      "::placeholder": {
                        color: "#aab7c4",
                      },
                    },
                    invalid: {
                      color: "#9e2146",
                    },
                  },
                }}
              />
              <button type="submit" className="checkout" id="chc">
                CheckOut
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default Checkout;
