import React from 'react';
import {itm} from './Valuesetter';
import bag1 from '../images/bag1.png'; 
import bag2 from '../images/bag2.png';
import {Link} from 'react-router-dom';
let val=0;
const Cartcounter = () => {
   if(val<itm.length){
   document.getElementById("link2").style.display="none";
   document.getElementById("lin1").style.display="block";
   }
    return (
        <>
         <Link  to="/my-app" className="links" id="link2"><img className="logo" id="logo2" src={bag1}/></Link>
         <Link  to="/Cart" className="links" id="lin1"><img className="logo" id="logo1" src={bag2}/></Link>
        </>
    )
}

export default Cartcounter;
