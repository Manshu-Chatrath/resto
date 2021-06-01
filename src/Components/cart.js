import React,{useState,useEffect} from 'react';
import Footer from './Footer';
import Nav from './Nav';
import {connect} from 'react-redux';
import {addcart,allcartitems,realextras,totalcart,deleting,checkout} from '../action/action';
import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import Checkout from './checkout';
const public_key= "pk_test_51HvZrNHtX5JzPZUWepneAgxsxR6F5Yt7qLLU8HbleQYAb4ov91OI5J7aWkM0n9oYbDJ53u2f8yG33hUaSjKuusIr00E1PdBFly";
const stripTestPromise=loadStripe(public_key);
let dish33=[];
const Cart=(props)=>{
    useEffect(()=>{
        props.allcartitems();
        props.realextras();  
    },[])
//const [price,setprice]=useState(0);
const [id,setid]=useState('')

function totalprice(){
    let sum=0;
   props.cartItems.map(item=>{
        sum+=item.price;
    })
   props.extras.map(item=>{
        sum+=item.price;
    });
    return sum.toFixed(2);
}
/*handleSubmit = ()=>async (e) => {
    e.preventDefault();
}*/

function checkout(){
    return(
        <Elements stripe={stripTestPromise}>
                 <Checkout dish33={dish33} price={totalprice()} />
        </Elements>
    )
}

    function delete33(){ 
    return(<div className="hide delete-tab">
    <div className="tab">
      <div className="text">
       <h1>Delete Dish?</h1>
       <p>Do you want to delete this dish?</p>
       <div className="btnns">
           <button  className="delete2" onClick={()=>props.deleting(id)}>Delete</button><button className="delete2" onClick={()=>{let delete2=document.querySelector('.delete-tab');  delete2.classList.add('hide');
        document.querySelector('body').style.overflow='visible';}}>Cancel</button>
       </div>
      </div>
    </div>
  </div>)
}
function wait()
{
    setTimeout(() => {
        let warning=document.querySelector('.wait');
        if(document.querySelector('.loader'))
        {  
                let loader=document.querySelector('.loader');
                loader.classList.add('hide');
                warning.innerHTML=`<h4>No items in the cart.</h4>`
        }
      }, 5000);
}
function load()
{
    if(props.cartItems.length<1)
    {
        return(<div className="wait mb-2 text-center">                                                        
        <div className="loader"></div>
    </div>)
    }
    else
    {   console.log("Its more than 1");
        return allcartitems();
    }
}
function open(id){
    console.log(dish33);
    let delete2=document.querySelector('.delete-tab');
    delete2.classList.remove('hide');
    document.querySelector('body').style.overflow="hidden";
     setid(id)
    window.addEventListener('click',function(e){
       if(e.target.className==='delete-tab')
       {
        delete2.classList.add('hide');
        document.querySelector('body').style.overflow='visible';
       }
    })
}
function including(id,price,title){
let extra=props.extras.filter(item=>item.real_id===id)
let str='';
let sum=0;
for(let i=0;i<extra.length;i++)
{
    str+=extra[i].title+' | ';
    sum+=extra[i].price;
}
console.log(str);
let tot=sum+price;
dish33.push({title: title,extras: str,price: tot.toFixed(2)})
return(<>
        <div>Price: $<span className="total-price">{tot.toFixed(2)}</span></div>
        <div className="exxtras">
        {str.length>0 ? <div>Extras: {str}</div> : <div>Extras: No Extras Added</div>}
        </div>
        </>
    )
}
function allcartitems(){
    console.log("It has to work ")
        return props.total.map(item=>{
            return(
                props.cartItems.map(dish=>{
                   if(item.dishes_id===dish.id)
                   {  
                        return(<article className="cart_items">
                        <img src={dish.url} alt="" className="image1777"/>
                        <div className="details">
                        <div>Title: {dish.title}</div>
                            {including(item.id,dish.price,dish.title)}     
                         </div>
                            <input type="hidden" name="productId" />
                            <button className="delete" onClick={()=>{open(item.id)}}>X</button> 
                        </article>)
                   }     
                })
             
            )
        })
    
}

function open2(){
let delete2=document.querySelector('#checkout');
delete2.classList.remove('hid');
dish33.splice(props.total.length,dish33.length);
console.log(dish33);
document.querySelector('body').style.overflow="hidden";
window.addEventListener('click',function(e){
   if(e.target.id==='checkout')
   {
    delete2.classList.add('hid');
    document.querySelector('body').style.overflow='visible';
   }
})
}

        return(<>
            <div className="over"></div>
            <div id="real-reservation">
         <Nav />
                <hr/>
                <div className="container00" id="he">
                    <div className="col-12" id="b">
                        <h1>MY CART</h1>
                    </div>
                </div>
            </div>
            <div>
                <h2>Your cart items:</h2> <hr style={{borderTop: '1px solid black'}} />
            <section className="cart1">
            {load()}
            </section>
            <hr style={{borderTop: '1px solid black'}} />
            <h2>Click below to checkout from the cart</h2>
            <div className="container00">
                <button className="order" onClick={()=>{if(props.total.length>0){open2(); document.querySelector('.warning').classList.add('hid')}else{document.querySelector('.warning').classList.remove('hid')} }}>Checkout</button>
            
            </div>
            <hr/>
            </div>
               { delete33()}
               {checkout()}
               {wait()}
               <strong><div className="warning text-center hid text-danger">Please add some items into the cart </div></strong><br/>
            <Footer />
            </>
        )
    
}
const mapStateProps=(state)=>{
    console.log(state);
return {cartItems: state.allcartitems,extras: state.everything,total: state.totalcart}
}
export default connect(mapStateProps,{addcart,allcartitems,realextras,totalcart,deleting,checkout})(Cart);