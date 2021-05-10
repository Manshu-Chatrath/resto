import React from 'react';
import Footer from './Footer';
import Nav from './Nav';
class Book extends React.Component
{
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
                <select className="custom-select" id="select" >
                    <option selected>2 People</option>
                    <option value="1">3 People</option>
                    <option value="2">4 People</option>
                    <option value="3">5 People</option>
                    <option value="3">6 People</option>
        
                  </select>
                <input type="date" id="date" className="form-control"  placeholder="Date" />
                <input type="time" id="time" className="form-control" value="00:00"/>
            </div>
            <div className="table"></div>
            <div className="reservation">
                <button type="button" className="btn btn-danger" id="reservation">Book Your Reservation</button>
            </div>
        </div>
    </div>
<Footer />
        </>)
    }
}

export default Book;