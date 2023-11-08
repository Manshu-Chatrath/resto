import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Router, Redirect, Route } from "react-router-dom";
import history from "./Components/history";
import Cart from "./Pages/Cart";
import { isExpired } from "react-jwt";
import Book from "./Pages/Book";
import Login from "./Pages/Login";
import restaurantApi from "./Components/restaurantApi";
import Menu from "./Pages/Menu";
import Main from "./Pages/Main";
import Signup from "./Pages/Signup";
import { totalcart } from "./action/action";
const App = () => {
  const dispatch = useDispatch();
  const [token, settoken] = useState(localStorage.getItem("token"));
  useEffect(() => {
    if (!isExpired(token)) {
      restaurantApi.defaults.headers.common["Authorization"] = token;
      dispatch(totalcart());
    }
  }, [token]);
  return (
    <>
      <Router history={history}>
        <Route path="/" exact component={Main} />
        <Route path="/book" exact component={Book} />
        <Route path="/menu" exact component={Menu} />
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={Signup} />
        {!isExpired(token) ? (
          <Route path="/cart" exact component={Cart} />
        ) : (
          <Redirect to="/" />
        )}
      </Router>
    </>
  );
};

export default App;
