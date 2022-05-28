import Data from './Data';
import {Additem2} from "./Valuesetter";
import Plaindosa from '../images/Plaindosa.jpg';
import idli from '../images/idli.jpg';
import UPMA from '../images/UPMA.jpg';
import tomatorice from '../images/tomatorice.JPG';
import {Link} from 'react-router-dom';
import React, { useState } from 'react';
const Southindian=()=>{
    function Showc(){ 
        reset()
        document.getElementById('show-content').style.display='none';
        document.getElementById('show-content1').style.display='none';
        document.getElementById('show-content2').style.display='block';
        document.querySelector('.quantity-op').style.display="inline";
        document.querySelector(".name2").innerHTML=Data[8].Dosa;
        document.getElementById("amt2").innerHTML=`&nbsp; RS : ${Data[8].Amt}/-`;
        document.getElementById("updateamt2").style.display="none";
        document.getElementById("simg2").src=Plaindosa;  
    }
    function Showc2(){
        document.getElementById('show-content').style.display='none';
        document.getElementById('show-content1').style.display='none';
        document.getElementById('show-content2').style.display='block';
        document.querySelector('.quantity-op').style.display="inline";
        document.querySelector(".name2").innerHTML=`${Data[9].idlli}`;
        document.getElementById("amt2").innerHTML=`RS : ${Data[9].Amt}/-`;
        document.getElementById("updateamt2").style.display="none";
        document.getElementById("simg2").src=idli;

    }
    function Showc3(){
        reset()
        document.getElementById('show-content').style.display='none';
        document.getElementById('show-content1').style.display='none';
        document.getElementById('show-content2').style.display='block';
        document.querySelector('.quantity-op').style.display="inline";
        document.querySelector(".name2").innerHTML=`${Data[10].upma}`;
        document.getElementById("amt2").innerHTML=`RS : ${Data[10].Amt}/-`;
        document.getElementById("updateamt2").style.display="none";
        document.getElementById("simg2").src=UPMA;
     }
     function Showc4(){
        reset()
        document.getElementById('show-content').style.display='none';
        document.getElementById('show-content1').style.display='none';
        document.getElementById('show-content2').style.display='block';
        document.querySelector('.quantity-op').style.display="inline";
        document.querySelector(".name2").innerHTML=`${Data[11].tamato}`;
        document.getElementById("amt2").innerHTML=`RS : ${Data[11].Amt}/-`;
        document.getElementById("updateamt2").style.display="none";
        document.getElementById("simg2").src=tomatorice;          
     }
function close(){
    document.getElementById("show-content2").style.display='none';
}

function reset(){
    document.getElementById("setvale2").selectedIndex ="0";
}

const[selects2,setselects2]=useState();

if(selects2=="FULL" || selects2=="HALF"){
    cal1()
}

function cal1(){
    let element1,getid1;
    element1=document.querySelector(".name2").textContent;
    getid1 =element1;
    console.log(getid1); 
    if(getid1=="Masala Dosa" && selects2=="FULL"){
        console.log("working");
        document.getElementById("amt2").innerHTML=`just at &nbsp; Rs: ${Data[8].Amt}  /- `;
        document.getElementById("updateamt2").innerHTML=" "+Data[8].Amt;
        document.getElementById("updateamt2").style.display="inline";
    } else if(getid1=="Masala Dosa" && selects2=="HALF"){
        document.getElementById("amt2").innerHTML=`1 just at &nbsp; Rs: ${Data[8].Amt/2}  /- `;
        document.getElementById("updateamt2").innerHTML=" "+Data[8].Amt/2;
        document.getElementById("updateamt2").style.display="inline";
    }
    if(getid1=="Idlli Sambar" && selects2=="FULL"){
        console.log("working");
        document.getElementById("amt2").innerHTML=`full just at &nbsp; Rs: ${Data[9].Amt}  /- `;
        document.getElementById("updateamt2").innerHTML=" "+Data[9].Amt;
        document.getElementById("updateamt2").style.display="inline";
    } else if(getid1=="Idlli Sambar" && selects2=="HALF"){
        document.getElementById("amt2").innerHTML=`half just at &nbsp; Rs: ${Data[9].Amt/2}  /- `;
        document.getElementById("updateamt2").innerHTML=" "+Data[9].Amt/2;
        document.getElementById("updateamt2").style.display="inline";
    }
    if(getid1=="Upma" && selects2=="FULL"){
        console.log("working");
        document.getElementById("amt2").innerHTML=`full just at &nbsp; Rs: ${Data[10].Amt}  /- `;
        document.getElementById("updateamt2").innerHTML=" "+Data[10].Amt;
        document.getElementById("updateamt2").style.display="inline";
    } else if(getid1=="Upma" && selects2=="HALF"){
        document.getElementById("amt2").innerHTML=`half just at &nbsp; Rs: ${Data[10].Amt/2}  /- `;
        document.getElementById("updateamt2").innerHTML=" "+Data[10].Amt/2;
        document.getElementById("updateamt2").style.display="inline";
    }
    if(getid1=="Tomato Rice" && selects2=="FULL"){
        console.log("working");
        document.getElementById("amt2").innerHTML=`full just at &nbsp; Rs: ${Data[11].Amt}  /- `;
        document.getElementById("updateamt2").innerHTML=" "+Data[11].Amt;
        document.getElementById("updateamt2").style.display="inline";
    } else if(getid1=="Tomato Rice" && selects2=="HALF"){
        document.getElementById("amt2").innerHTML=`full half at &nbsp; Rs: ${Data[12].Amt/2}  /- `;
        document.getElementById("updateamt2").innerHTML=" "+Data[12].Amt/2;
        document.getElementById("updateamt2").style.display="inline";

    }
         
        }

return (
<>
    <p className="heading">SOUTH INDIAN FOOD</p>
<section className="food_container">
       <div className="food_item"><div  className="inner-content"><img src={Plaindosa}/><p>{Data[8].Dosa}</p>&nbsp;<button id="n1" onClick={Showc}>Order Now</button></div></div>
       <div className="food_item"><div className="inner-content"><img src={idli}/><p>{Data[9].idlli}</p>&nbsp;<button id="n2" onClick={Showc2}>Order Now</button> </div></div>
       <div className="food_item"><div className="inner-content"><img src={UPMA}/><p>{Data[10].upma}</p>&nbsp;<button  id="n3" onClick={Showc3}>Order Now</button></div></div>
       <div className="food_item"><div className="inner-content"><img src={tomatorice}/><p>{Data[11].tamato}</p>&nbsp;<button id="n4" onClick={Showc4}>Order Now</button></div></div>
    <div id='show-content2'>
        <div id="close" onClick={close}>X</div>
        <div className="pop-data">
            <div className='left-pop'>
                <img id="simg2"/>     
                <strong id="name" className="name2"></strong>&nbsp;<strong id="amt2" className="amt2"></strong>
            </div>
            <div className='right-pop'>
               <strong className='quantity'>Quantity:</strong><strong className='quantity-op'><select value={selects2} id="setvale2" className="setvale2" onChange={e=>setselects2(e.target.value)}><option>SELECT</option><option>FULL</option><option>HALF</option></select></strong><br/> 
               <strong>Item:</strong>&emsp;&emsp;&emsp;<strong>1</strong> <br/>
               <strong>Amount:</strong>&emsp;<strong id="updateamt2" className="updateamt2"></strong> <br/>
               <div className='pop-btn'><Link to="/Cart"><button onClick={Additem2}>Order Place</button></Link><button onClick={Additem2}>Add To Bag</button></div></div>
        </div>
    </div>
</section>
</>
)
}

   export default Southindian;