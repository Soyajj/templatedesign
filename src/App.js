import React, {useState} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Profile from './components/Profile';
import Contact from './components/Contact';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  let toggler = () => {
    setDarkMode(prev => !prev)
  }

  return (
    <Router>
      <div className = {darkMode ? 'body-dark' : 'body-light'}>
      <i className = {darkMode ? 'fa fa-toggle-on' : 'fa fa-toggle-off' } onClick = {toggler} id = "toggleBtn"
      >{darkMode ? 'Dark Mode' : 'Light Mode'}</i>
        <Navbar />
        <Switch>
          <Route exact path={["/" , "/templatedesign"]}  component ={Banner} />
          <Route path="/profile" component={Profile}/>
          <Route path="/contact" component={Contact}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
