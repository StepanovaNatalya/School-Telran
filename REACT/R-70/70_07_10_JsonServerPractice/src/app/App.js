import Background from './../app/img/food-bg.jpg';
import './App.css';
import AppHeader from './components/app-header/AppHeader';
import {Route, Switch} from 'react-router-dom'
import MenuItem from './components/menu-item/MenuItem';
import MenuList from './components/menu-list/MenuList';
import Cart from './components/cart/Cart'


function App() {
  return (
    <div style={{background: `url(${Background}) center center/cover no-repeat`}} className="App">
       <AppHeader />
       <Switch>
         <Route path = '/' exact component = {MenuList}/>
         <Route path = '/cart' exact component = {Cart}/>
         <Route path = '/menu/:id' exact component = {MenuItem}/>
       </Switch>
    </div>
  );
}

export default App;

