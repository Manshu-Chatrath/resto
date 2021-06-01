import React from 'react';
import {connect} from 'react-redux';
import { CardElement, useElements, useStripe,CardCvcElement,CardExpiryElement,CardNumberElement } from "@stripe/react-stripe-js"
import {checkout} from '../action/action';
const Checkout=(props)=>{
const stripe = useStripe()
const elements = useElements();
function success()
{
    if(props.message.length>0)
    {
        document.querySelector('.res313').innerHTML=props.message[0];
        document.querySelector('.eer').style.display='none';
        setTimeout(() => {
            window.location.reload();
        }, 2000);
    }
}

const handleSubmit=async (e) => {
    e.preventDefault();
    let email=document.querySelector('#email2');
    const cardElement = elements.getElement(CardElement);
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });
    let price=props.price;
    let id={paymentMethod}
    if(!error) {
        document.querySelector('#form').style.display='none';
        document.querySelector('.res313').innerHTML=`<div class="loader text-center"></div>`;
        props.checkout(id,props.dish33,price,email.value);
    } else {
        console.log(error.message);
        document.querySelector('.eer').innerHTML=error.message;
    }
  }
return(
<>
<div className="reservation-tab hid" id="checkout">
                        <div className="book-tab2">
                          <div className="heading"><h1 className="text-center mt-2">Total Price: ${props.price}</h1></div>
                          <p className="text-center res313">After checkingout an email will be sent to your email address which will include your order number that you can show for your curbside pick up.</p>
                        <p className="text-center text-danger eer"></p>
                        <form id='form' action="" onSubmit={(e)=>handleSubmit(e)}>
                          <div className="input-group col-12" id="re">
                            <input type="email" required id="email2" placeholder="Enter your email address" className="form-control"/>
                          </div>
                          <input type="hidden" name="products" />
                          <div className="row mt-2" id="re">
                          <div className="input-group col-6">
                          <input type="text" required  id="for" placeholder="First Name" className="form-control"/>
                          </div>
                          <div className="input-group col-6">
                          <input type="text" required  id="for" placeholder="Last Name" className="form-control"/>
                          </div>
                          <CardElement
                         options={{
                             style: {
                      base: {
                           fontSize: '16px',
                       color: '#424770',
                      '::placeholder': {
                        color: '#aab7c4',
                                       },
                                   },
                          invalid: {
                   color: '#9e2146',
                                  },
                                 },
                                 }}
                                    />
                      <button type="submit" className="checkout" id="chc">CheckOut</button>
                                 {success()}
                          </div>
                          </form>
                        </div>
                      </div>
</>

)  
}
const mapStateProps=(props)=>{
     return({message: props.paymentstatus})
}
export default connect(mapStateProps,{checkout})(Checkout);
