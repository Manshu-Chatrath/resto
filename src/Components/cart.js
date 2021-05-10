import React from 'react';
import Footer from './Footer';
import Nav from './Nav'
class Cart extends React.Component
{
    render()
    {
        return(<>
            <div className="over"></div>
            <div id="real-reservation">
         <Nav />
                <hr/>
                <div className="container00" id="he">
                    <div className="col-12" id="b">
                        <h1>MY CART</h1>
                    </div>
                </div>
            </div>
            <div>
                <h2>Your cart items:</h2><hr/>
            <section className="cart1">
            <article className="cart_items">
            <img src='https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1920,format=auto,quality=50/https://cdn.doordash.com/media/photos/93db5897-ef23-4133-8b72-092d021a7100-retina-large-jpeg' alt="" className="image1777"/>
            <div className="details">
            <div>Title:  </div>
             <div>Price: $</div>
             <div className="quantity">
             <div>Quantity: </div>
            </div>
            <div className="exxtras">
                <div>Extras: </div>
            </div>
            </div>
            <form action="/delete-cart" method="POST">
                <input type="hidden" name="productId" />
                <button className="delete">X</button> 
            </form>
            </article>
            </section>
            <hr/>
            <h2>In order to purchase these items click on order</h2>
            <div className="container00">
            <form action="/order">
                <input type="hidden" name="buyerId" value="<%=buyerId%>"/>
                <button className="order">Order</button>
            </form>
            </div>
            <hr/>
            </div>
            <Footer />
            </>
        )
    }
}
export default Cart;