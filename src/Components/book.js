import React from 'react';
import Footer from './Footer';
import Nav from './Nav';
import {booking} from '../action/action';
import {connect} from 'react-redux';
class Book extends React.Component
{
today=()=>{
  const today = new Date().toISOString().slice(0, 10)
return today;
}
reservation=()=>{
    return(
        <div className="reservation-tab hid">
        <div className="book-tab">
          <div className="heading"><h1 className="text-center mt-2">Making a Reservation</h1></div>
          <p className="text-center">Enter your email address to have confirmation of you reservation on your email</p>
          <div className="input-group col-12" id="re">
            <div className="input-group-prepend">
              <span id="ea" className="input-group-text">Email Address</span>
            </div>
            <input type="text" aria-label="First name" placeholder="Enter your email address" required className="form-control foremail"/>
            <button className="btn" id="be" onClick={()=>this.reservation23()}>Book Now!</button>
          </div>
          <div className="bookinginfo text-center"></div>
          <h2 className="text-center mt-3">Details of Reservation</h2>
          <div className="cas">
            <div className="book-details">
              <div><i  className="fa fa-user mr-2 op"></i><span className="n">People(Standard Meeting)</span></div>
              <div><i className="fa fa-clock-o mr-2 op"></i><span className="t"></span></div>
              <div><i  className="fa fa-calendar mr-2 op"></i><span className="dte"></span></div>
            </div>
          </div>
        </div>
      </div>
    )
}
success=()=>
{
    if(this.props.confirmation.length>0)
    {
        document.querySelector('.bookinginfo').innerHTML=this.props.confirmation[0];
        setTimeout(() => {
            window.location.reload();
        }, 2000);
    }
}

reservation23=()=>{
  let people=document.querySelector('#select').value;
  let time=document.querySelector('#time').value;
  let date=document.querySelector('#date').value;
  let email=document.querySelector('.foremail').value;
  document.querySelector('#re').style.display='none';
  document.querySelector('.bookinginfo').innerHTML=`<div class="loader text-center"></div>`;
  this.props.booking(email,people,time,date);
  this.success();
}
open=()=>{
    let people=document.querySelector('#select').value;
    let time=document.querySelector('#time').value;
    let date=document.querySelector('#date').value;
    console.log(time);
    if(people&&date&&time)
    {console.log(time);
      document.querySelector('.warni').innerHTML='';
      let delete2=document.querySelector('.reservation-tab');
      delete2.classList.remove('hid');
      document.querySelector('body').style.overflow="hidden";
      document.querySelector('.n').innerHTML=`${people} People(Standard Meeting)`;
      document.querySelector('.t').innerHTML=`${time}`
      document.querySelector('.dte').innerHTML=`${date}`;
      window.addEventListener('click',function(e){
         if(e.target.className==='reservation-tab')
         {
          delete2.classList.add('hid');
          document.querySelector('body').style.overflow='visible';
         }
      })
    }
    else
    { console.log("yooi")
      document.querySelector('.warni').innerHTML=`<strong>Fill all the three values</strong>`
    }
}
    render()
    {
        return (<>
        <div className="over"></div>
<div id="real-reservation">
<Nav/>
    <hr/>
    <div className="container" id="he">
        <div className="col-12" id="b">
            <h1>RESERVATION</h1>
        </div>
    </div>
</div>
<div id="boom" className="container-fluid">
        <div>
            <div id="text2">Make a Reservation</div>
            <div className="inputss">
                <select required className="custom-select" id="select" >
                    <option selected>2 People</option>
                    <option value="1">3 People</option>
                    <option value="2">4 People</option>
                    <option value="3">5 People</option>
                    <option value="3">6 People</option>
                  </select>
                <input required type="date" id="date" className="form-control" min={this.today()} defaultValue={this.today()} placeholder="Date" />
                <input required type="time" id="time" name="time" className="form-control" defaultValue="21:00"  placeholder="Time"/>
            </div>
            <div className="table"></div>
            <div className="reservation">
                <button type="button" className="btn btn-danger" id="reservation" onClick={()=>{this.open()}}>Book Your Reservation</button>
            </div><br/>
            <div className="text-center text-danger warni"></div>
        </div>
    </div>
    {this.reservation()}
<Footer />
        </>)
    }
}
const mapStateProps=(props)=>{
  return {confirmation: props.booking}
}
export default connect(mapStateProps,{booking})(Book);