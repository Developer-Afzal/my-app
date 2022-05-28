import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {food , qty,famt,itm} from '../components/Valuesetter';
const Cart = () => {
let foodName=[], Quantity=[], UpAmt=[],item=[];
 
 foodName=(JSON.parse(sessionStorage.getItem('name')));
  Quantity=(JSON.parse(sessionStorage.getItem('Qty')));
  UpAmt=(JSON.parse(sessionStorage.getItem('Amt')));
  item=(JSON.parse(sessionStorage.getItem('Item')));

  const changevale = UpAmt.map((i) => Number(i));
  console.log(changevale);
  const calval =changevale.reduce(myFunction);
  function myFunction(total, value,index,array){
    return total+value;
}
  console.log(UpAmt);
  console.log(calval);
  let valrcv=0;
 
  function updatevalue(){
    valrcv=document.getElementById("recvalue").value;
    if(valrcv==0 || valrcv<0){
      alert("Pls enter correct value");
    }
    else if(valrcv>0){
      valrcv-=1;
      foodName.splice(valrcv,1);
      food.splice(valrcv,1);
      sessionStorage.setItem('name',JSON.stringify(foodName)); 
      console.log(foodName);
      Quantity.splice(valrcv,1);
      qty.splice(valrcv,1);
      sessionStorage.setItem('Qty',JSON.stringify(Quantity)); 
      console.log(Quantity);
      item.splice(valrcv,1);
      itm.splice(valrcv,1);
      sessionStorage.setItem('Item',JSON.stringify(item));
      console.log(item);
      UpAmt.splice(valrcv,1);
      famt.splice(valrcv,1);
      sessionStorage.setItem('Amt',JSON.stringify(UpAmt));
      console.log(UpAmt);

    }
    
  }
 
  function Proceed(){
    document.getElementById("Proceed").style.display="block";
    document.getElementById("order-list").style.display="none";
    document.getElementById("order-heading").style.display="none";
    document.getElementById("nextbtn").remove();
    let Uname=document.getElementById("uName").value;
    console.log(Uname);
    let UContact=document.getElementById("uName").value;
    console.log(UContact);
    let Uadress=document.getElementById("uName").value;
    console.log(Uadress);
    
  }
  const [Username, Setuname] = useState(" ");
  const [Ucontact, Setucontact] = useState(" ");
  const [Uaddress, Setuaddress] = useState(" ");
  const submitform =(eve) => {
    console.log(Username);
      console.log(Ucontact);
      console.log(Uaddress);
      eve.preventDefault();
      document.getElementById("Proceed").innerHTML=`
      <div style="display:flex; align-items: center; justify-content:space-around;"><div style="text-align:justify; margin-left:20px;">
      <h4>Name:${Username}</h4>
      <h4>Contact No:${Ucontact}</h4>
      <h4>Address:${Uaddress}</h4>
      </div><div>
      <h4>Call Support : 0522 xxxxxxx</h4>
      <h4>Your Order Will Delevered in 20 Minutes </h4></div></div>`;
      document.getElementById("backbtn").style.display="block";
     
  }

  return (
    <div>
      <div className="showorder">
        <h1 id="order-heading">Your Order List</h1>
        <div>
        <div className="order-list" id="order-list">
          <strong className="dataBox"><p className="data-h">Food Name</p>{foodName.map((foodNames, index) => <p key={index}>{foodNames}</p>)}</strong>
          <strong className="dataBox"><p className="data-h">Pack</p>{Quantity.map((Quantity, index) => <p key={index}>{Quantity}</p>)}</strong>
          <strong className="dataBox"><p className="data-h">Item</p><p id="printitem">{item.map((itm, index) => <p key={index}>{itm}</p>)}</p></strong>
          <strong className="dataBox"><p className="data-h">Amt Per Qty.</p>{UpAmt.map((UpAmt, index) => <p key={index}>{UpAmt}</p>)}</strong>
          <strong className="dataBox"><p className="data-h" id="tAMT">Total Amt</p><p>{calval}/-</p></strong>
          <strong className="itmremover"><button className="cartbtn">- Item</button><p>Enter Item Number Which You <br /> Want To Remove</p><input type="value" id="recvalue" /><Link to="/Cart" onClick={updatevalue} className="removebtn"> OK </Link></strong>
          </div>
          <div id="nextbtn">
          <Link to="/my-app" onClick={()=>{food.length=0;qty.length=0;famt.length=0; itm.length=0;}} ><button className="next-cart" >Cancel</button></Link>
          <button className="next-cart"  onClick={Proceed}>Next</button>
          </div>
        </div>
        <div id="Proceed">
          <h1>FilL Your Details</h1><hr />
          <form onSubmit={submitform}>
          <label>Enter Your Name </label><br />
          <input type="text" className="personal-details" id="uName" value={Username} onChange={(e)=>{Setuname(e.target.value);}} required/><br />
          <label>Enter Your Contact No </label><br />
          <input type="tel"  className="personal-details" id="ContactNo" value={Ucontact} onChange={(e)=>{Setucontact(e.target.value);}}/><br />
          <label>Enter Your Address </label><br />
          <input type="text" maxLength="200" className="personal-details address" id="Address" value={Uaddress} onChange={(e)=>{Setuaddress(e.target.value);}} /><br />
          <button type="submit">Submit</button>
          </form>
          </div>
          <div id="backbtn"><Link to="/my-app" onClick={()=>{food.length=0;qty.length=0;famt.length=0; itm.length=0;}} >Go Back Home Page </Link> <br/></div>
      </div>
    </div> 
  )
}
export default Cart