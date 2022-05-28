import Data from './Data';
import { Additem2, Additem1, Additem } from "./Valuesetter";
import AlooParatha from '../images/AlooParatha.jpg';
import cholebhature from '../images/cholebhature.jpg';
import cholepuri from '../images/cholepuri.jpg';
import rajmachwal from '../images/rajmachwal.jpg';
import {Link} from 'react-router-dom';
import React, { useState } from 'react';
const Veg=()=>{
    function Showc(){ 
        reset()
        document.getElementById('show-content').style.display='none';
        document.getElementById('show-content1').style.display='block';
        document.querySelector('.quantity-op').style.display="inline";
        document.querySelector(".name1").innerHTML=Data[4].AlooParatha;
        document.getElementById("amt1").innerHTML=`&nbsp; RS : ${Data[4].Amt}/-`;
        document.getElementById("updateamt1").style.display="none";
        document.getElementById("simg1").src=AlooParatha;  
    }
    function Showc2(){
        document.getElementById('show-content').style.display='none';
        document.getElementById('show-content1').style.display='block';
        document.querySelector('.quantity-op').style.display="inline";
        document.querySelector(".name1").innerHTML=`${Data[5].cholebhature}`;
        document.getElementById("amt1").innerHTML=`RS : ${Data[5].Amt}/-`;
        document.getElementById("updateamt1").style.display="none";
        document.getElementById("simg1").src=cholebhature;

    }
    function Showc3(){
        reset()
        document.getElementById('show-content').style.display='none';
        document.getElementById('show-content1').style.display='block';
        document.querySelector('.quantity-op').style.display="inline";
        document.querySelector(".name1").innerHTML=`${Data[6].cholepuri}`;
        document.getElementById("amt1").innerHTML=`RS : ${Data[6].Amt}/-`;
        document.getElementById("updateamt1").style.display="none";
        document.getElementById("simg1").src=cholepuri;
     }
     function Showc4(){
        reset()
        document.getElementById('show-content').style.display='none';
        document.getElementById('show-content1').style.display='block';
        document.querySelector('.quantity-op').style.display="inline";
        document.querySelector(".name1").innerHTML=`${Data[7].rajmachwal}`;
        document.getElementById("amt1").innerHTML=`RS : ${Data[7].Amt}/-`;
        document.getElementById("updateamt1").style.display="none";
        document.getElementById("simg1").src=rajmachwal;          
     }
function close(){
    document.getElementById("show-content1").style.display='none';
}

function reset(){
    document.getElementById("setvale1").selectedIndex ="0";
}

const[selects1,setselects1]=useState();

if(selects1=="FULL" || selects1=="HALF"){
    cal1()
}

function cal1(){
    let element1,getid1;
    element1=document.querySelector(".name1").textContent;
    getid1 =element1;
    console.log(getid1); 
    if(getid1=="Aloo Paratha" && selects1=="FULL"){
        console.log("working");
        document.getElementById("amt1").innerHTML=`2 just at &nbsp; Rs: ${Data[4].Amt}  /- `;
        document.getElementById("updateamt1").innerHTML=" "+Data[4].Amt;
        document.getElementById("updateamt1").style.display="inline";
    } else if(getid1=="Aloo Paratha" && selects1=="HALF"){
        document.getElementById("amt1").innerHTML=`1 just at &nbsp; Rs: ${Data[4].Amt/2}  /- `;
        document.getElementById("updateamt1").innerHTML=" "+Data[4].Amt/2;
        document.getElementById("updateamt1").style.display="inline";
    }
    if(getid1=="Chole Bhatoore" && selects1=="FULL"){
        console.log("working");
        document.getElementById("amt1").innerHTML=`full just at &nbsp; Rs: ${Data[5].Amt}  /- `;
        document.getElementById("updateamt1").innerHTML=" "+Data[5].Amt;
        document.getElementById("updateamt1").style.display="inline";
    } else if(getid1=="Chole Bhatoore" && selects1=="HALF"){
        document.getElementById("amt1").innerHTML=`half just at &nbsp; Rs: ${Data[5].Amt/2}  /- `;
        document.getElementById("updateamt1").innerHTML=" "+Data[5].Amt/2;
        document.getElementById("updateamt1").style.display="inline";
    }
    if(getid1=="Chola puri" && selects1=="FULL"){
        console.log("working");
        document.getElementById("amt1").innerHTML=`full just at &nbsp; Rs: ${Data[6].Amt}  /- `;
        document.getElementById("updateamt1").innerHTML=" "+Data[6].Amt;
        document.getElementById("updateamt1").style.display="inline";
    } else if(getid1=="Chola puri" && selects1=="HALF"){
        document.getElementById("amt1").innerHTML=`half just at &nbsp; Rs: ${Data[6].Amt/2}  /- `;
        document.getElementById("updateamt1").innerHTML=" "+Data[6].Amt/2;
        document.getElementById("updateamt1").style.display="inline";
    }
    if(getid1=="Rajma chwal" && selects1=="FULL"){
        console.log("working");
        document.getElementById("amt1").innerHTML=`full just at &nbsp; Rs: ${Data[7].Amt}  /- `;
        document.getElementById("updateamt1").innerHTML=" "+Data[7].Amt;
        document.getElementById("updateamt1").style.display="inline";
    } else if(getid1=="Rajma chwal" && selects1=="HALF"){
        document.getElementById("amt1").innerHTML=`full half at &nbsp; Rs: ${Data[7].Amt/2}  /- `;
        document.getElementById("updateamt1").innerHTML=" "+Data[7].Amt/2;
        document.getElementById("updateamt1").style.display="inline";

    }
         
        }

return (
<>
    <p className="heading">VEG FOOD</p>
<section className="food_container">
       <div className="food_item"><div  className="inner-content"><img src={AlooParatha}/><p>{Data[4].AlooParatha}</p>&nbsp;<button id="n1" onClick={Showc}>Order Now</button></div></div>
       <div className="food_item"><div className="inner-content"><img src={cholebhature}/><p>{Data[5].cholebhature}</p>&nbsp;<button id="n2" onClick={Showc2}>Order Now</button> </div></div>
       <div className="food_item"><div className="inner-content"><img src={cholepuri}/><p>{Data[6].cholepuri}</p>&nbsp;<button  id="n3" onClick={Showc3}>Order Now</button></div></div>
       <div className="food_item"><div className="inner-content"><img src={rajmachwal}/><p>{Data[7].rajmachwal}</p>&nbsp;<button id="n4" onClick={Showc4}>Order Now</button></div></div>
    <div id='show-content1'>
        <div id="close" onClick={close}>X</div>
        <div className="pop-data">
            <div className='left-pop'>
                <img id="simg1"/>     
                <strong id="name" className="name1"></strong>&nbsp;<strong id="amt1" className="amt1"></strong>
            </div>
            <div className='right-pop'>
               <strong className='quantity'>Quantity:</strong><strong className='quantity-op'><select value={selects1} id="setvale1" className="setvale1" onChange={e=>setselects1(e.target.value)}><option>SELECT</option><option>FULL</option><option>HALF</option></select></strong><br/> 
               <strong>Item:</strong>&emsp;&emsp;&emsp;<strong>1</strong> <br/>
               <strong>Amount:</strong>&emsp;<strong id="updateamt1" className="updateamt1"></strong> <br/>
               <div className='pop-btn'><Link to="/Cart"><button onClick={Additem1}>Order Place</button></Link><button onClick={Additem1}>Add To Bag</button></div></div>
        </div>
    </div>
</section>
</>
)
}

   export default Veg;