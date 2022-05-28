import Cartcounter from '../components/Cartcounter';
let food=[], qty=[], famt=[], itm=[],itmContent;

function Additem(){

                    let check=document.querySelector(".setvale").value;
                    if(check=="SELECT"){
                        alert('Please Choose your food Quantity');
                    }
                    if(check=="FULL" || check=="HALF"){
                       let foodName, qtyValue, foodamt, itmval;
                        foodName=document.querySelector(".name").textContent;
                        qtyValue=document.querySelector(".setvale").value;
                        foodamt=document.querySelector(".updateamt").textContent;
                        itmval=document.querySelector(".additmval").textContent;
                        food.push(foodName);
                        qty.push(qtyValue);
                        famt.push(foodamt);
                        itm.push(itmval);
                        console.log(famt); 
                        sessionStorage.setItem('name',JSON.stringify(food)); 
                        sessionStorage.setItem('Qty',JSON.stringify(qty)); 
                        sessionStorage.setItem('Amt',JSON.stringify(famt)); 
                        sessionStorage.setItem('Item',JSON.stringify(itm)); 
                        document.getElementById("show-content").style.display="none"; 
                        Cartcounter();
                    }
                 
         }             
                          


        let Additem1=()=>{
            let check=document.querySelector(".setvale1").value;
            if(check=="SELECT"){
                alert('Please Choose your food Quantity');
            }
            if(check=="FULL" || check=="HALF"){
               let foodName, qtyValue, foodamt, itmval;
                foodName=document.querySelector(".name1").textContent;
                qtyValue=document.querySelector(".setvale1").value;
                foodamt=document.querySelector(".updateamt1").textContent;
                itmval=document.querySelector(".additmval").textContent;
                food.push(foodName);
                qty.push(qtyValue);
                famt.push(foodamt);
                itm.push(itmval);
                console.log(famt); 
                sessionStorage.setItem('name',JSON.stringify(food)); 
                sessionStorage.setItem('Qty',JSON.stringify(qty)); 
                sessionStorage.setItem('Amt',JSON.stringify(famt)); 
                sessionStorage.setItem('Item',JSON.stringify(itm)); 
                document.getElementById("show-content1").style.display="none"; 
                Cartcounter();
               
            }  
        }

        let Additem2=()=>{
            let check=document.querySelector(".setvale2").value;
            if(check=="SELECT"){
                alert('Please Choose your food Quantity');
            }
            if(check=="FULL" || check=="HALF"){
               let foodName, qtyValue, foodamt, itmval;
                foodName=document.querySelector(".name2").textContent;
                qtyValue=document.querySelector(".setvale2").value;
                foodamt=document.querySelector(".updateamt2").textContent;
                itmval=document.querySelector(".additmval").textContent;
                food.push(foodName);
                qty.push(qtyValue);
                famt.push(foodamt);
                itm.push(itmval);
                console.log(famt); 
                sessionStorage.setItem('name',JSON.stringify(food)); 
                sessionStorage.setItem('Qty',JSON.stringify(qty)); 
                sessionStorage.setItem('Amt',JSON.stringify(famt)); 
                sessionStorage.setItem('Item',JSON.stringify(itm)); 
                document.getElementById("show-content2").style.display="none"; 
                Cartcounter();
               
            }  
        }
        export {food , qty,famt,itm, itmContent};
        // export default Additem;
        export { Additem2, Additem1, Additem};
        

