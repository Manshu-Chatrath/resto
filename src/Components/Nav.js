import React from 'react';
import {Link} from 'react-router-dom'
class Nav extends React.Component{
    render()
{
    return(<div id="main" className="navbar navbar-expand-md navbar-dark w-100">
    <div className="icon23 mt-2"></div>
    <button id="toggler" className="navbar-toggler" id="iicon" data-toggle="collapse" data-target="#main-navbar">
        <i className="fa fa-bars"></i>
    </button>
    <div className="collapse navbar-collapse" id="main-navbar">
        <ul className="navbar-nav ml-auto" id="ul">
            <li className="nav-item">
                <Link to="/" class="nav-link text-white">Home</Link>
            </li>
            <li className="nav-item">
                <Link to="/menu" class="nav-link text-white">Menu</Link>
            </li>
            <li className="nav-item">
                <Link to="/book" class="nav-link text-white">Reserve</Link>
            </li>
            <li className="nav-item">
                <Link to="/" class="nav-link text-white">ContactUs</Link>
            </li>
            <li className="nav-item">
                <Link to="/" class="nav-link text-white">AboutUs</Link>
            </li>
            <li className="nav-item">
             <Link to="/cart"><i className="fa fa-shopping-cart mt-2" style={{color:"white",fontSize:"25px"}}></i>
              <span className="circle" style={{color: "black"}}>2</span></Link>
            </li>
            <li className="nav-item">
                <Link to="/signup" class="nav-link text-white">SignIn</Link>
            </li>
        </ul>
    </div>      
</div>)
}
}
export default Nav;