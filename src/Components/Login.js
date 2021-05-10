import React from 'react';
class Login extends React.Component{
    render()
    {return(
             <div className="window">
       <div id="container" className="container col-lg-3 col-md-5 col-sm-6 col-9  bg-light">
       <div id="row1" className="row">
           <div className="col-12">
           <img id="image" src='https://bowheadpub.com/wp-content/uploads/2019/10/Bowhead-02.png' alt="" />
           </div>
       </div>
       <div className="row">
       <div className="col-12 ">
       <h2 className="heading-inventory">Sign In</h2>
       </div>
       </div>
       <form action="" >
           <div className="form-row">
               <div className="col-12">
               <input name="email" type="email" className="form-control" placeholder="Enter email"/>
               </div>
           </div>
           <div className="mt-2 form-row">
               <div className="col-12">
               <input minLength="5" name="password" class="form-control" type="password" placeholder="Enter Password"  />
               </div>
           </div>
           <button id="login" className="bg-danger mt-2 mb-2">Log In</button>
       </form>
       <div id="links" className="row pb-4">
           <div id="columns" className="col-12"><a to={`/`}>Dont have an account?</a>   </div>
       </div>
       </div>
    
</div>
        )
    }
}
export default Login;