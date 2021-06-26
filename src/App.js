import HomePage from './pages/homepage/home-page.component'
import FindNotesPage from './pages/find-notes-page/find-notes-page.component'


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

      <Route exact path='/'>
        <HomePage></HomePage>
      </Route>
      <Route exact path='/contact'>
        <div>CONTACT US PAGE</div>
      </Route>
      <Route exact path='/contributers'>
        <div>CONTRIBUTERS PAGE</div>
      </Route>
      <Route exact path='/find'>
        <FindNotesPage></FindNotesPage>
      </Route>
      <Route exact path='/submit'>
        <div>SUBMIT NOTES PAGE</div>
      </Route>
    </Switch>
    </Router>
  );
}

export default App;
