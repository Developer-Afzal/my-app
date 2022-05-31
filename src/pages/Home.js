import Non_veg from '../components/non_veg';
import Veg from '../components/Veg';
import Southindian from '../components/Southindian';
const Home =() => {
    
    return(
        <>
        <div className="main-food-page">
        <Non_veg/> 
        <Veg/>
        <Southindian/> 
        </div>
        <section className="footer"> 
        <div className="Footer-content">
        <h4>Created By -:- Developer-Afzal</h4>
        </div>
        </section>
        </>
           
    )
}
export default Home;