import{BrowserRouter as Router, Switch, Route,Link} from'react-router-dom';
import Cart from './pages/Cart'; 
import dish from '../src/images/dish.png'; 
import Cartcounter from '../src/components/Cartcounter'; 
import Home from './pages/Home';
const  App = () => {
   sessionStorage.clear();
   
return (
    <>
        <Router>
            <header>
                <nav>
                <Link to="/" className="links "><img className="logo"src={dish}/></Link>
                <Link  to="/Cart" className="links" id="link1" ><div className="counter"><Cartcounter /></div></Link>
                </nav> 
            </header>
            <Switch>
                <Route path="/" component={Home}exact></Route>
                <Route path="/Cart" component={Cart} id="Cart-Link"></Route>
            </Switch>
        </Router>
    </>
)
}
export default App;