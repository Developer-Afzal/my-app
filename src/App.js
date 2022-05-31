import{BrowserRouter as Router, Switch, Route,Link} from'react-router-dom';
import Cart from './pages/Cart'; 
import dish from '../src/images/dish.png'; 
import Cartcounter from '../src/components/Cartcounter'; 
import Home from './pages/Home';
const  App = () => {
return (
    <>
        <Router>
            <header>
                <nav>
                <Link to="/my-app" className="links "><img className="logo"src={dish}/></Link>
                <div className="counter"><Cartcounter /></div>
                </nav> 
            </header>
            <Switch>
                <Route path="/my-app" component={Home}exact></Route>
                <Route path="/Cart" component={Cart} id="Cart-Link"></Route>
            </Switch>
        </Router>
    </>
)
}
export default App;