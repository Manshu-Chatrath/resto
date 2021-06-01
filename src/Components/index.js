import React from 'react';
import Nav from './Nav';
import Footer from './Footer';
import {Link} from 'react-router-dom';
class Main extends React.Component
{
    today=()=>{
        const today = new Date().toISOString().slice(0, 10)
      return today;
      }
render()
{
    return(<>
        <div className="z">
<div className="section1">
    <div className="overlay"></div>
    <div className="header">
        <div id="carouselExampleSlidesOnly" className="carousel slide carousel-fade" data-ride="carousel" >
            <div className="carousel-inner">
              <div className="carousel-item active" >
               <div className="image1"></div>
              </div>
              <div className="carousel-item" >
               <div className="image2"></div>
              </div>
              <div className="carousel-item" >
               <div className="image3"></div>
              </div>
            </div>
          </div>
    </div>
        <Nav />
    </div>
<hr/>
<div className="section2">
    <div className="heading">
        <h1 id="heading">BOWHEAD<br/>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; PUB</h1>
    </div>
    <div className="middle">
        <div className="vl"></div>
    </div>
    <div className="punch">
        <h1 id="h1">Montreal's one of the best restaurant!</h1>
    </div>
</div>
<div className="inputs">
    <div id="text">Make a Reservation</div>
    <div className="inputss">
        <select className="custom-select" id="select" >
            <option selected>2 People</option>
            <option value="1">3 People</option>
            <option value="2">4 People</option>
            <option value="3">5 People</option>
            <option value="3">6 People</option>

          </select>
        <input type="date" id="date" min={this.today()} defaultValue={this.today()} className="form-control"  placeholder="Date" />
        <input type="time" id="time" className="form-control" defaultValue="00:00"/>
    </div>
    <div className="table"></div>
    <div className="reservation">
       <Link to='/book'>
       <button type="button" className="btn btn-danger" id="reservation">Book Your Reservation</button>
       </Link> 
    </div>
    <div className="choice mt-4">
      <img id="diner" src="https://refectory.com/wp-content/uploads/2020/02/design_image_opentable_dc2020-badge-mark-only-2x_121719-1-600x600.png" alt=""/>
    </div>
</div>
</div>
<div className="story">
    <div>
        <img id="img" src="https://bowheadpub.com/wp-content/uploads/elementor/thumbs/Bowhead-8-ofibvn21jojzffw2g8hg19lqpr9s6xu00f3k8k3fwg.jpg"></img>
    </div>
    <div id="explain">
        <h1>Our Passion, Our Story</h1>
        <p>Bowhead is Montreal’s very first vegan pub! Situated at the corner of Boulevard St. Laurent and 
            Des Pins, Bowhead presents a pub-style comfort food and drinks menu that is 100% plant-based. Bowhead is a
             community and space where non-meat
              eaters and the most hardcore meat-eaters can mingle and enjoy all that a conventional pub has to offer.</p>
        <p>Here at Bowhead, we want YOU to experience what plant-based pub food means, and we want you to bring your friends and family 
            to come and enjoy delicious food, washed down with a cold refreshing glass or two of your favourite tipple.</p>
    </div>
</div>
<div className="section3">
    <div className="real-about">
        <div className="about">
            <div id="aboutus" className="a">
                <h1>About Us</h1>
                <p>We believe that good food and a drink or two can bring people of all lifestyles together.</p>
                <p>Serving the kind of classic pub grub that everybody can enjoy, 
                    and screening all your favourite sports, We believe that good food
                     and a drink or two can bring people of all lifestyles together. 
                Serving the kind of classic pub grub that everybody can enjoy, and screening all your favourite sports,</p>
            </div>
        </div>
        <div className="about-img">
            <img src="https://bowheadpub.com/wp-content/uploads/elementor/thumbs/Bowhead-11-ofibvoxpxcmk2ntc59ap694nwj0imc1gooej740nk0.jpg" alt="" id="about"/>
      </div>
    </div>
</div>
<Footer />
     </>
    )

}
}
export default Main;