import './App.css';
import Main from './component/Main';
import { Route, Switch, Redirect} from 'react-router-dom';
import FoodItems from './component/FoodItems';
import Login from './component/Login';
import Checkout from './component/Checkout';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/' component={ Main } exact/>
        <Route path='/menu' component={ FoodItems } />
        <Route path='/login' component={ Login } />
        <Route path='/checkout'  component={Checkout} />
        <Route render={() => <Redirect to={{pathname:'/'}} />} />
      </Switch>
    </div>
  );
}

export default App;
