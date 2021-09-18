import { Route, Switch } from 'react-router-dom'
import Home from './component/Home';
import About from './component/About';
import Contacts from './component/Contacts';
import Navigation from './component/Navigation';
import List from './component/List';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <hr />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contacts" component={Contacts} />
        <Route path="/list" component={List} />
      </Switch>
    </div>
  );
}

export default App;

/* <Route exact path ="/" render = {()=><h2>Home page</h2>}/>
       <Route path ="/about" render = {()=><About companyName = {'some company'}/>}/>
       <Route path ="/contacts" component = {()=><Contacts />}/> */

