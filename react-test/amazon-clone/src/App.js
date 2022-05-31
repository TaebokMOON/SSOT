
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Login';


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route exact path='/'>
            <Header/>
            <Home/>
          </Route>

          <Route path='/checkout'>
            <Header/>
            <Checkout/>
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

// 3시간 27분

export default App;
