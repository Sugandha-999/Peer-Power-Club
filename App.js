import logo from './logo.svg';
import './App.css';
import NabBar from './Components/NabBar';
import Home from './Components/Home';

import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Contact from './Components/FeedBack';
import Register from './Components/Register';
import Features from './Components/Explore';
import About from './Components/About';
import FeedBack from './Components/FeedBack';
import Feature from './Components/Explore';
import Explore from './Components/Explore';
import MoreEx from './Components/MoreEx';
import Dashboard from './Components/Dashboard';
import Enroll from './Components/Enroll';
function App() {
  return (
    <BrowserRouter>
      
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/moreex" component={MoreEx} />
        <Route exact path="/enroll" component={Enroll} />

      </Switch>

    </BrowserRouter>



  );
}

export default App;
