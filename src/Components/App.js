import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import Cart from './cart';
import Book from './book';
import Login from './Login';
import Menu from './menu';
import Index from './index';
import Signup from './Signup';
const App=()=>{
return (<>
<BrowserRouter>
<Route path="/" exact component={Index} />
<Route path="/book" exact component={Book}/>
<Route path="/cart" exact component={Cart} />
<Route path="/menu" exact component={Menu} />
<Route path="/login" exact component={Login} />
<Route path="/signup" exact component={Login} />
</BrowserRouter>
</>)
}
export default App;