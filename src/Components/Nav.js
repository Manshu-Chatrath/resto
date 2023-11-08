import React from "react";
import { Link } from "react-router-dom";
import { LogOut, totalcart } from "../action/action";
import { connect } from "react-redux";
import { isExpired } from "react-jwt";
class Nav extends React.Component {
  constructor() {
    super();
    this.state = {
      token: localStorage.getItem("token"),
      userId: localStorage.getItem("userId"),
    };
  }

  impnav = () => {
    if (!isExpired(localStorage.getItem("token"))) {
      return (
        <>
          <li className="nav-item">
            <Link to="/cart">
              <i
                className="fa fa-shopping-cart mt-2"
                style={{ color: "white", fontSize: "25px" }}></i>{" "}
              <span className="circle" style={{ color: "black" }}>
                {this.props.total}
              </span>
            </Link>
          </li>
          <li className="nav-item mt-2">
            <Link
              style={{ marginLeft: "10px" }}
              onClick={() => {
                this.props.LogOut();
              }}>
              LogOut
            </Link>
          </li>
        </>
      );
    }

    return (
      <>
        <li className="nav-item">
          <Link to="/signup" className="nav-link text-white">
            SignIn
          </Link>
        </li>
      </>
    );
  };
  render() {
    return (
      <div id="main" className="navbar navbar-expand-md navbar-dark w-100">
        <div className="icon23 mt-2"></div>
        <button
          id="toggler"
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#main-navbar">
          <i className="fa fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="main-navbar">
          <ul className="navbar-nav ml-auto" id="ul">
            <li className="nav-item">
              <Link to="/" className="nav-link text-white">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/menu" className="nav-link text-white">
                Menu
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/book" className="nav-link text-white">
                Reserve
              </Link>
            </li>
            <li className="nav-item">
              <a href={`#contact`} className="nav-link text-white">
                ContactUs
              </a>
            </li>
            {this.impnav()}
          </ul>
        </div>
      </div>
    );
  }
}
const mapStateProps = (state) => {
  return { total: state.totalcart.length };
};
export default connect(mapStateProps, { LogOut, totalcart })(Nav);
