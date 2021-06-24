import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom'

import HeaderComponent from './components/header/header.component'
function App() {

  return (
    <Router>
    <div className="App">
      <HeaderComponent></HeaderComponent>
    </div>
    <Switch>
      <Route exact path='/about'>
        <div>ABOUT US PAGE</div>
      </Route>
      <Route exact path='/contributers'>
        <div>CONTRIBUTERS PAGE</div>
      </Route>
      <Route exact path='/find'>
        <div>GET NOTES PAGE</div>
      </Route>
      <Route exact path='/submit'>
        <div>SUBMIT NOTES PAGE</div>
      </Route>
    </Switch>
    </Router>
  );
}

export default App;
