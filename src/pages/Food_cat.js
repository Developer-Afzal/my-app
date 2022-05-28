import cheif from '../images/cheif.png';
import Southindian from '../components/Southindian';
const Food_Cat =() => {
    
    return(
        <>
        <div class="Foot-cat">
            <div className="cat-banner">
            <img src={cheif}/>
            </div>
            <div className="cat-right">
                <button  className="choosebtn">NON VEG FOOD</button>
                <button className="choosebtn">VEG FOOD</button><br/>
                <button className="choosebtn">SOUTH INDIAN FOOD</button><br/>
                <button className="choosebtn">Snaks</button>
                <button className="choosebtn">Chinse Food</button>
            </div>
        </div>
        <div id="container">
            <Southindian/>
        </div>
        </>  
    )

} 

export default Food_Cat;