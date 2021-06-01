import React from 'react';
import {Link} from 'react-router-dom';
class Footer extends React.Component{
    render()
    {
        return(
            <footer style={{background: 'black',color: 'white'}} className="page-footer font-small blue pt-4">


    <div className="container-fluid text-center text-md-left">
  
   
      <div className="row">
  
  
        <div className="col-md-6 mt-md-0 mt-3">
  
   
         <img id="img3" src="https://bowheadpub.com/wp-content/uploads/2019/10/Bowhead-03.png" alt=""/>
          <p>This project has been made for educational and training purposes. As design, images, logos and names are taken from 
          https://bowheadpub.com/ and belongs to them only.
          </p>
  
        </div>
  
  
        <hr className="clearfix w-100 d-md-none pb-3"/>
  
      
        <div className="col-md-3 mb-md-0 mb-3">
  
      
          <h5 className="text-uppercase">Get Started</h5>
  
          <ul className="list-unstyled">
            <li>
              <Link className="text-white" to="/">Our Story</Link>
            </li>
            <li>
              <Link className="text-white" to="/menu">Menu</Link>
            </li>
            <li>
              <Link className="text-white" to="/">About Us</Link>
            </li>
            <li>
              <Link to='/book' className="text-white" >Reservation</Link>
            </li>
          </ul>
  
        </div>
  

        <div id='contact' className="col-md-3 mb-md-0 mb-3">
  
 
          <h5 className="text-uppercase">Get in Touch</h5>
  
          <ul className="list-unstyled">
            <li>
              Phone: 1 (514)-226-6678
            </li>
            <li className="mt-1">
              Email: manshuchatrath20@gmail.com
            </li>
            <li className="mt-1">
              Address: 1925 Rue Dufresne, Montreal, Quebec, H2K 3K4 
            </li>
            <li className="mt-1">
             <Link to='/book'><button  id="reservation2">Book A Reservation</button></Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="footer-copyright text-center py-3">© The images, designs and logos belongs to 
      <a href="https://bowheadpub.com/" className="text-white"> BowheadPub.com</a>
    </div>

  </footer>
        )
    }
}
export default Footer;