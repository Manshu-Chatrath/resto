import React from 'react';
import Nav from './Nav';
import history from './history';
import Footer from './Footer';
import {menu,categories,view,allextras,search,addcart} from '../action/action';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
class Menu extends React.Component {
    constructor() {
        super();
            this.state={quantity: 1,extras: [],name2: ''};
      }
    componentDidMount()
{
this.props.menu();
this.props.categories();
}
extraa=(title)=>{
   return this.props.extras.map(item=>{
        if(item.category===title)
        {
            return(
                <div className="extra-item mb-3 pt-3">
                <div className="ml-5 item-name"><span>{item.title}</span><span  className="price-extra">Price: {item.price.toFixed(2)}$</span></div>
                <div  className="mt-2 btns" style={{marginRight: '30px'}}>
                    <input type="checkbox" class="checkbox" id={item.id} value={item.price} name={item.title}/>
                    <span className="checkmark"></span>
                </div>
            </div>
            )
        }
    })
}

breakup=()=>{
    if(this.props.extracats.length>0)
    {
        return this.props.extracats.map(cat=>{
            return (
            <div>
                <div className="title-extra"><h4>{cat.category}</h4></div>
                {this.extraa(cat.category)}
            </div>
        )
        })
    }
    else
    {
        return <h4 class="text-center">No extras added</h4>
    }
}

toggler=(title,recepie2,img,dishId)=>{
    let a=[];
    if(this.props.extras)
    {   console.log(this.props.extracats);
        let extra=document.querySelector('.extra2');
        let cart=document.getElementById('cartt');
        let checkboxes=document.querySelectorAll('.checkbox');
        extra.classList.remove('hide');
        let pic=document.getElementById('dp');
        let recepie=document.getElementById('rec');
        recepie.innerHTML=recepie2;
        pic.src=img;
          let dis=document.getElementById('dis');
          let quantity=document.querySelector('.number');
            this.setState({quantity: 1});
          quantity.innerHTML=this.state.quantity;
          dis.innerHTML=title;
          document.querySelector('body').style.overflow='hidden';
          window.addEventListener('click',function(e){
              if(e.target.className==='extra2')
              {
                  extra.classList.add('hide');
                  document.querySelector('body').style.overflow='visible';
              }
            })
          cart.addEventListener('click',()=>{
              if(localStorage.getItem('cartId'))
              {
                document.getElementById('cartt').disabled=true;
                console.log("Yeahh")
               return this.props.addcart(dishId,this.state.extras,+quantity.innerHTML);
              }
              else
              {
                history.push('/signup')
              }
        })
          checkboxes.forEach(item=>{
              item.addEventListener('change',(e)=>{
                console.log(item.checked);
                if(item.checked)
                  {   console.log(e.target.id);
                       a.push(+e.target.id);
                    this.setState({extras: a});
                    return
                }
                  else
                  {let b=this.state.extras.filter(item=>item.id!==e.target.id)
                    this.setState({extras: b})
                    return;
                }
              })
          })
    }      
}

viewitem=()=>{ 
    if(this.props.extras)
    {
        return(
        <div  className="hide extra2">
<div className="extra-tab">
    <div className="image244">
    <img src='' alt="" id="dp" />
    </div>
    <div className="headng">
        <h3 id="dis">Chicken</h3>
    </div>
    <div id="rec" className="p mb-2"></div>
    <div className="extras">
       {this.breakup()}
    </div>
    <div className="cart-btn">
        <input type="text" name="extras" type="hidden" />
        <button id="cartt" className="cart">Add To Cart</button>
    </div>
    <div className="amt mt-2">
        <div className="addd" onClick={()=>{if(this.state.quantity>=1) {let quantity=document.querySelector('.number');this.setState(prevState => {
       return {quantity: prevState.quantity - 1}
    })
 quantity.innerHTML=this.state.quantity;}}}>-</div>
        <div className="number">1</div>
        <div className="addd" onClick={()=>{let num=this.state.quantity;num++;let quantity=document.querySelector('.number');quantity.innerHTML=num;this.setState({quantity: num})}}>+</div>
    </div>
 </div>
</div>)
    }
return;
}
wait=()=>{
    setTimeout(() => {
      let warning=document.querySelector('.wait');
      if(document.querySelector('.loader'))
      {  
        if(this.state.name2)
        {    let loader=document.querySelector('.loader');
        loader.classList.add('hide');
        warning.innerHTML=`There are dishes with name of ${this.state.name2}!`
        }  
        else  
        {
              let loader=document.querySelector('.loader');
              loader.classList.add('hide');
              warning.innerHTML=`<h4 >There are no dishes!</h4>`
          }
      }
    }, 8000); 
}
success=()=>{
    console.log("So length is "+this.props.category.length);
    if(this.props.category.length<1)
    { console.log("yeahhhhh")
    return(<div className="wait mb-2 text-center">                                                        
        <div className="loader"></div>
    </div>)
    }
    else
    {
        return this.match()
    }
}                        
main=(title)=>{
        return  this.props.menus.map(item=>{
            if(title===item.Category)
            return(
            
                <div key={item.id} className="article">
                    <div  className="title"><h4>{item.title}</h4></div>
                    <div className="picture"><img src={item.url} alt="" className="pic" />
                    </div>
                    <div className="item-price text-center">Price: ${item.price.toFixed(2)}</div>
                    <div className="buttons mt-2">
                        <button className="btns" style={{width: '45%'}} onClick={()=>{this.props.view(item.id);this.props.allextras(item.id);setTimeout(() => {this.toggler(item.title,item.recepie,item.url,item.id)}, 500);}}>Add To Cart</button><button style={{width: '45%'}}  onClick={()=>{this.props.view(item.id);this.props.allextras(item.id);setTimeout(() => {this.toggler(item.title,item.recepie,item.url,item.id)}, 500);}} className="btns">View Dish</button>
                    </div>
                    </div>
        
            )
        })
    
   
}
nav=()=>{
    return this.props.category.map(cat=>{
       return <a key={cat.Category} href={`#${cat.Category}`}>{cat.Category}</a>
    })
}
match=()=>{
    
    return this.props.category.map(cat=>{
        return(
            <div className="items mt-4" key={cat.Category}>
            <div className="heading44"><h2 id={cat.Category} className="heading2">{cat.Category}</h2></div><hr style={{borderTop: '1px solid #E5E5E5'}} />
                <div className="main">
                {this.main(cat.Category)}
                </div>
                <hr style={{borderTop: '1px solid #E5E5E5'}} />
              </div>
        )})
}
render()
{
    return(
        <>
         <div className="over"></div>
    <div id="stop">
<div className="real-menu">
        <Nav />
    <hr/>
    <div className="container" id="he">
        <div className="col-12" id="b">
            <h1>Menu</h1>
        </div>
    </div>
</div>
<div className="mt-4 mb-4 searched">
    <div className="input">
        <span> Search for any dish:</span>
        <input type="text"  name="search" className="search" onChange={(e)=>{if(e.target.value!==""){this.setState({name2: e.target.value});this.props.search(e.target.value)} else { this.props.menu();
this.props.categories(); }}} />
    </div>
    </div>
    <hr style={{borderTop: '1px solid #E5E5E5'}} />
<div className="container">
    <div className="scrollmenu">
            {this.nav()}
      </div>
</div>
{this.success()}
{this.wait()}
</div>
{this.viewitem()}
<Footer />
        </>
    )
}

   
}
const mapstatetoprops=(props)=>{
    return {category: props.categories, menus: props.Menu,extras: props.view,extracats:props.extrascat}
}
export default connect(mapstatetoprops,{menu,categories,view,allextras,search,addcart})(Menu);