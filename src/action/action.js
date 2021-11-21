import axios from 'axios';
import history from '../Components/history';
export const menu=()=>async(dispatch)=>{
const response=await axios.get('https://inventory-backend-node.herokuapp.com/resto-menu');
dispatch({type: 'MENU',payload: response.data.items});
}
export const categories=()=>async(dispatch)=>{
    const response=await axios.get('https://inventory-backend-node.herokuapp.com/allcategory');
    dispatch({type:'CATEGORY',payload: response.data.categories[0]})
}
export const view=(id)=>async(dispatch)=>{
    const response=await axios.get(`https://inventory-backend-node.herokuapp.com/addcart/${id}`);
    dispatch({type: 'VIEW',payload: response.data.items})
}
export const allextras=(id)=>async(dispatch)=>{
    const response=await axios.get(`https://inventory-backend-node.herokuapp.com/cat/${id}`);
    dispatch({type: 'EXTRAS',payload: response.data.items})
}
export const search=(term)=>async(dispatch)=>{
    const response=await axios.get(`https://inventory-backend-node.herokuapp.com/searching/${term}`);
    dispatch({type: 'SEARCHING',payload: response.data.items})
}
export const signup=(formvalues)=>async(dispatch)=>{

    const response=await axios.post('https://inventory-backend-node.herokuapp.com/user-signup',{
        email: formvalues.email,
        password: formvalues.password,
        confirmpassword: formvalues.confirmpassword
    });
    if(response.data.message)
    {
        dispatch({type: 'Signup',payload: response.data})
    }
    else
    {   dispatch({type: 'Signup', payload: response.data.result[0]});
        history.push('/login')
    }
}

export const LogIn=(formvalues)=>async(dispatch)=>{
    const response=await axios.post('https://inventory-backend-node.herokuapp.com/login',{
        email: formvalues.email,
        password: formvalues.password,
        headers: {
            Authorization: localStorage.getItem('token')
        }
    });
   
    if(response.data.credentials)
    {   localStorage.setItem('token1',response.data.token);
        localStorage.setItem('userId1',response.data.userId);
        localStorage.setItem('cartId',response.data.cartId);
        dispatch({type: 'login',payload: response.data});
        window.location.href='https://resto2.herokuapp.com/';  
    }
    dispatch({type: 'login',payload: response.data});
}

export const LogOut=()=>async(dispatch)=>{
    localStorage.removeItem('token1');
    localStorage.removeItem('userId1');
    localStorage.removeItem('cartId');
    history.push('/');
    dispatch({type: 'Logout',payload: []});
    
}
export const addcart=(dishid,extrasid,quantity)=>async(dispatch)=>{
    let cartid=localStorage.getItem('cartId'); 
for( let x=0;x<quantity;x++)
{    let response=await axios.post(`https://inventory-backend-node.herokuapp.com/addcart/${dishid}/${cartid}`); 

    if(extrasid.length>0)
    {
        for(let i=0;i<extrasid.length;i++)
        {
    let response2=await axios.post(`https://inventory-backend-node.herokuapp.com/addtoextras/${dishid}/${cartid}/${response.data.id}/${extrasid[i]}`)
        }

    }        
     else
         {
            let response2=await axios.post(`https://inventory-backend-node.herokuapp.com/addtoextras/${dishid}/${cartid}/${response.data.id}/false`)
        }
}
window.location.href='https://resto2.herokuapp.com/cart';  
}


export const allcartitems=()=>async(dispatch)=>{
    let cartid=localStorage.getItem('cartId');
    
    let response=await axios.get(`https://inventory-backend-node.herokuapp.com/allcart/${cartid}`);
    dispatch({type: 'cart',payload: response.data.items});
}
export const realextras=()=>async(dispatch)=>{
    let cartid=localStorage.getItem('cartId');
    let response=await axios.get(`https://inventory-backend-node.herokuapp.com/extras/${cartid}`);
    dispatch({type: 'everything',payload: response.data.items});
 
}
export const totalcart=()=>async(dispatch)=>{
    let cartid=localStorage.getItem('cartId');

    let response=await axios.get(`https://inventory-backend-node.herokuapp.com/totalcart/${cartid}`);
    dispatch({type: 'totalcart',payload: response.data.items});
}
export const deleting=(id)=>async(dispatch)=>{
    
    let response=await axios.delete(`https://inventory-backend-node.herokuapp.com/deletecart/${id}`);
    window.location.reload();
}
export const checkout=(id,dish33,price,email)=>async(dispatch)=>{
  
     let cartid=localStorage.getItem('cartId');
        const response = await axios.post("https://inventory-backend-node.herokuapp.com/checkout", {
            amount: price,
            products: dish33,
            email: email,
            cartid: cartid,
            id
        });
      dispatch({type: response.data.success,message: response.data.message})
}
export const booking=(email,people,time,date)=>async(dispatch)=>{
 
    const response=await axios.post('https://inventory-backend-node.herokuapp.com/booking',{
        email: email,
        people: people,
        time: time,
        date: date
    })
    dispatch({type: response.data.booking, message: response.data.message})
}
