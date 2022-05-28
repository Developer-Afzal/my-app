import Data from './Data';
import {Additem} from "./Valuesetter";
import Biryani from '../images/ChickenBiryani.png';
import ChikenMasala from '../images/ChikenMasala.jpg';
import chickencurry from '../images/chickencurry.jpg';
import MUTTONBIRYANI from '../images/MUTTONBIRYANI.jpg';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';

const Non_veg = () => {
        function Show(){ 
            reset()
            document.getElementById('show-content1').style.display='none';
            document.getElementById('show-content2').style.display='none';
            document.getElementById('show-content').style.display='block';
            document.querySelector('.quantity-op').style.display="inline";
            document.getElementById("name").innerHTML=`${Data[0].Biryani}`;
            document.getElementById("amt").innerHTML=`RS : ${Data[0].Amt}/-`;
            document.getElementById("updateamt").style.display="none";
            document.getElementById("simg").src='http://localhost:3000/static/media/ChickenBiryani.8291d15ec7c10daea5ac.png';  
        }
        function Show2(){
            reset()
            document.getElementById('show-content1').style.display='none';
            document.getElementById('show-content2').style.display='none';
            document.getElementById('show-content').style.display='block';
            document.querySelector('.quantity-op').style.display="inline";
            document.getElementById("name").innerHTML=`${Data[1].chickenroll}`;
            document.getElementById("amt").innerHTML=`RS : ${Data[1].Amt}/-`;
            document.getElementById("updateamt").style.display="none";
            document.getElementById("simg").src='http://localhost:3000/static/media/ChikenMasala.ee6b463197aa11e5314f.jpg';

        }
        function Show3(){
            reset()
            document.getElementById('show-content1').style.display='none';
            document.getElementById('show-content2').style.display='none';
            document.getElementById('show-content').style.display='block';
            document.querySelector('.quantity-op').style.display="inline";
            document.getElementById("name").innerHTML=`${Data[2].chickenCurry}`;
            document.getElementById("amt").innerHTML=`RS : ${Data[2].Amt}/-`;
            document.getElementById("updateamt").style.display="none";
            document.getElementById("simg").src='http://localhost:3000/static/media/chickencurry.2dc7f16f09dd67e9e627.jpg';
         }
         function Show4(){
            reset()
            document.getElementById('show-content1').style.display='none';
            document.getElementById('show-content2').style.display='none';
            document.getElementById('show-content').style.display='block';
            document.querySelector('.quantity-op').style.display="inline";
            document.getElementById("name").innerHTML=`${Data[3].muttonBiryani}`;
            document.getElementById("amt").innerHTML=`RS : ${Data[3].Amt}/-`;
            document.getElementById("updateamt").style.display="none";
            document.getElementById("simg").src='http://localhost:3000/static/media/MUTTONBIRYANI.09ffbfdf52f146addcaf.jpg';          
         }
    function close(){
        document.getElementById("show-content").style.display='none';
    }

    function reset(){
        document.getElementById("setvale").selectedIndex ="0";
    }

    const[selects,setselects]=useState();
    const result = selects;
    
    if(selects=="FULL" || selects=="HALF"){
        cal()
    }

    function cal(){
        let element,getid;
        element=document.getElementById("name").textContent;
        getid =element;
        console.log(getid); 
        if(getid=="Chicken Biryani" && selects=="FULL"){
            console.log("working");
            document.getElementById("amt").innerHTML=`full just at &nbsp; Rs: ${Data[0].Amt}  /- `;
            document.getElementById("updateamt").innerHTML=" "+Data[0].Amt;
            document.getElementById("updateamt").style.display="inline";
        } else if(getid=="Chicken Biryani" && selects=="HALF"){
            document.getElementById("amt").innerHTML=`half just at &nbsp; Rs: ${Data[0].Amt/2}  /- `;
            document.getElementById("updateamt").innerHTML=" "+Data[0].Amt/2;
            document.getElementById("updateamt").style.display="inline";
        }
        if(getid=="Chicken Masala" && selects=="FULL"){
            console.log("working");
            document.getElementById("amt").innerHTML=`full just at &nbsp; Rs: ${Data[1].Amt}  /- `;
            document.getElementById("updateamt").innerHTML=" "+Data[1].Amt;
            document.getElementById("updateamt").style.display="inline";
        } else if(getid=="Chicken Masala" && selects=="HALF"){
            document.getElementById("amt").innerHTML=`half just at &nbsp; Rs: ${Data[1].Amt/2}  /- `;
            document.getElementById("updateamt").innerHTML=" "+Data[1].Amt/2;
            document.getElementById("updateamt").style.display="inline";
        }
        if(getid=="Chicken Curry" && selects=="FULL"){
            console.log("working");
            document.getElementById("amt").innerHTML=`full just at &nbsp; Rs: ${Data[2].Amt}  /- `;
            document.getElementById("updateamt").innerHTML=" "+Data[2].Amt;
            document.getElementById("updateamt").style.display="inline";
        } else if(getid=="Chicken Curry" && selects=="HALF"){
            document.getElementById("amt").innerHTML=`half just at &nbsp; Rs: ${Data[2].Amt/2}  /- `;
            document.getElementById("updateamt").innerHTML=" "+Data[2].Amt/2;
            document.getElementById("updateamt").style.display="inline";
        }
        if(getid=="Mutton Biryani" && selects=="FULL"){
            console.log("working");
            document.getElementById("amt").innerHTML=`full just at &nbsp; Rs: ${Data[3].Amt}  /- `;
            document.getElementById("updateamt").innerHTML=" "+Data[3].Amt;
            document.getElementById("updateamt").style.display="inline";
        } else if(getid=="Mutton Biryani" && selects=="HALF"){
            document.getElementById("amt").innerHTML=`full half at &nbsp; Rs: ${Data[3].Amt/2}  /- `;
            document.getElementById("updateamt").innerHTML=" "+Data[3].Amt/2;
            document.getElementById("updateamt").style.display="inline";

        }
             
            }

               
    
  return (
    <>
        <p className="heading">NON VEG FOOD</p>
        <section className="food_container">
           <div className="food_item"><div  className="inner-content"><img src={Biryani}/><p>{Data[0].Biryani}</p>&nbsp;<button id="n1" onClick={Show}>Order Now</button></div></div>
           <div className="food_item"><div className="inner-content"><img src={ChikenMasala}/><p>{Data[1].chickenroll}</p>&nbsp;<button id="n2" onClick={Show2}>Order Now</button> </div></div>
           <div className="food_item"><div className="inner-content"><img src={chickencurry}/><p>{Data[2].chickenCurry}</p>&nbsp;<button  id="n3" onClick={Show3}>Order Now</button></div></div>
           <div className="food_item"><div className="inner-content"><img src={MUTTONBIRYANI}/><p>{Data[3].muttonBiryani}</p>&nbsp;<button id="n4" onClick={Show4}>Order Now</button></div></div>
        <div id='show-content'>
            <div id="close" onClick={close}>X</div>
            <div className="pop-data">
                <div className='left-pop'>
                    <img id="simg"/>     
                    <strong id="name" className="name"></strong>&nbsp;<strong id="amt"></strong>
                </div>
                <div className='right-pop'>
                   <strong className='quantity'>Quantity:</strong><strong className='quantity-op'><select value={selects} id="setvale" className="setvale" onChange={e=>setselects(e.target.value)}><option>SELECT</option><option>FULL</option><option>HALF</option></select></strong><br/> 
                   <strong>Item:</strong>&emsp;&emsp;&emsp;<strong className="additmval">1</strong> <br/>
                   <strong>Amount:</strong>&emsp;<strong id="updateamt" className="updateamt"></strong> <br/>
                   <div className='pop-btn'><Link to="/Cart"><button onClick={Additem}>Order Place</button></Link><button onClick={Additem}>Add To Bag</button></div></div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Non_veg