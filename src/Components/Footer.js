import React from 'react';
class Footer extends React.Component{
    render()
    {
        return(
            <footer style={{background: 'black',color: 'white'}} className="page-footer font-small blue pt-4">


    <div className="container-fluid text-center text-md-left">
  
   
      <div className="row">
  
  
        <div className="col-md-6 mt-md-0 mt-3">
  
   
         <img id="img3" src="https://bowheadpub.com/wp-content/uploads/2019/10/Bowhead-03.png" alt=""/>
          <p>Bowhead is a community and space where non-meat eaters and 
        the most hardcore meat-eaters can mingle and enjoy all that a conventional pub has to offer.</p>
  
        </div>
  
  
        <hr className="clearfix w-100 d-md-none pb-3"/>
  
      
        <div className="col-md-3 mb-md-0 mb-3">
  
      
          <h5 className="text-uppercase">Get Started</h5>
  
          <ul className="list-unstyled">
            <li>
              <a className="text-white" href="#!">Our Story</a>
            </li>
            <li>
              <a className="text-white" href="#!">Menu</a>
            </li>
            <li>
              <a className="text-white" href="#!">About Us</a>
            </li>
            <li>
              <a className="text-white" href="#!">Reservation</a>
            </li>
          </ul>
  
        </div>
  

        <div className="col-md-3 mb-md-0 mb-3">
  
 
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
             <button  id="reservation2">Book A Reservation</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="footer-copyright text-center py-3">© 2020 Copyright:
      <a href="https://mdbootstrap.com/" className="text-white"> MDBootstrap.com</a>
    </div>

  </footer>
        )
    }
}
export default Footer;