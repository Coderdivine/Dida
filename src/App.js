import react from 'react';
import About from './About';
import './App.css';
import Homepage from "./Homepage";
import Pricing from './Pricing';
import {
  HashRouter  as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

function App() {
  return (
    <div className="homepage">
      <Router>
        <Switch>
          <Route path="/" exact component={Homepage}></Route>
          <Route path="/About"  component={About}></Route>
          <Route path="/Pricing"  component={Pricing}></Route>

        </Switch>
      </Router>
     
    </div>
     
  );
}

export default App;
