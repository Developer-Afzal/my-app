import React from 'react';
import {itm} from './Valuesetter';
import bag1 from '../images/bag1.png'; 
import bag2 from '../images/bag2.png';
let val=0;
const Cartcounter = () => {
  
  if(val<itm.length){
     document.querySelector("#logo1").src=bag2;   
  }
 
    return (
        <>
          <img className="logo" id="logo1" src={bag1}/>
        </>
    )
}

export default Cartcounter;
