import React from 'react';
import Nav from './Nav';
import Footer from './Footer';
class Menu extends React.Component {

render()
{
    return(
        <>
         <div class="over"></div>
<div class="real-menu">
        <Nav />
    <hr/>
    <div className="container" id="he">
        <div className="col-12" id="b">
            <h1>Menu</h1>
        </div>
    </div>
</div>
<div className="container">
    <div className="scrollmenu">
        <a href="#home">Home</a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
        <a href="#support">Support</a>
        <a href="#blog">Blog</a>
        <a href="#tools">Tools</a>  
        <a href="#base">Base</a>
        <a href="#custom">Custom</a>
        <a href="#more">More</a>
        <a href="#logo">Logo</a>
        <a href="#friends">Friends</a>
        <a href="#partners">Partners</a>
        <a href="#people">People</a>
        <a href="#work">Work</a>
      </div>
</div>
<div className="mt-4 searched">
    <div className="input">
        <span> Search for any dish:</span>
        <input type="text"  name="search" class="search" />
    </div>
    </div>
<div className="items mt-4">
    <div className="heading44"><h2 class="heading2">Beef</h2></div><hr />
    <div  className="main">
        <div className="article">
            <div  className="title"><h4>Burger</h4></div>
            <div className="picture"><img src='https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1920,format=auto,quality=50/https://cdn.doordash.com/media/photos/b169959f-534b-403f-a39d-590a03adeed6-retina-large-jpeg' alt="" class="pic" />
            </div>
            <div className="buttons mt-2">
                <button className="btns">Add To Cart</button><button  class="btns">View Dish</button>
            </div>
     
            </div>
    </div>
    <hr/>
</div>
<div  className="hide extra2">
    <div className="extra-tab">
        <div className="image244">
        <img src='https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1920,format=auto,quality=50/https://cdn.doordash.com/media/photos/c4e19740-9f02-45ff-a37d-0a24ce9a0065-retina-large-jpeg' alt="" />
        </div>
        <div className="headng">
            <h3>Burger</h3>
        </div>
        <div className="p mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore molestiae, officiis error fugiat minima corporis aspernatur dolor mollitia ratione iusto numquam magnam eaque sunt a tempora voluptas, nostrum dicta voluptates.</div>
        <div className="extras">
            <div>
                <div className="title-extra"><h4>Extras</h4></div>
                <div className="extra-item mb-3 pt-3">
                    <div className="ml-5 item-name"><span>Cheese</span><span  className="price-extra">Price: 2$</span></div>
                    <div  className="mt-2 btns mr-3">
                        <input type="radio" name="radio"/>
                        <span className="checkmark"></span>
                    </div>
                </div>
               </div>
        </div>
        <div className="cart-btn">
            <button className="cart">Add To Cart</button>
        </div>
        <div className="amt mt-2">
            <div className="addd">-</div>
            <div className="number">1</div>
            <div className="addd">+</div>
        </div>
     </div>
</div>
        <Footer />
        </>
    )
}

   
}
export default Menu;