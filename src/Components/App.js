import React,{useState} from 'react';
import {Router,Redirect,Route} from 'react-router-dom';
import history from './history';
import Cart from './cart';
import Book from './book';
import Login from './Login';
import Menu from './menu';
import Index from './index';
import Signup from './Signup';
import { Elements } from "@stripe/react-stripe-js";
const App=()=>{
    const [token,settoken]=useState(localStorage.getItem('token1'))
    const [id,setId]=useState(localStorage.getItem('userId1'));
    const [identity,setidentity]=useState(token+id);
return (<>
<Router  history={history}>
<Route path="/" exact component={Index} />
<Route path="/book" exact component={Book}/>
<Route path="/menu" exact component={Menu} />
<Route path="/login" exact component={Login} />
<Route path="/signup" exact component={Signup} />
{identity ? 
<Route path="/cart" exact component={Cart}  />
:
<Redirect to="/" />
}
</Router>
</>)
}
export default App;