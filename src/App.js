import React, { Component} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Profile from './components/Profile';
import Contact from './components/Contact';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      darkMode: false
    }
  }
  
  toggler = () => {
    this.setState({
      darkMode: !this.state.darkMode
    })
  }  

  render() {
  return (
    <Router>
      <div className={this.state.darkMode ? 'body-dark' : 'body-light'}>
      <i className={this.state.darkMode ? 'fa fa-toggle-on' : 'fa fa-toggle-off' } onClick={this.toggler} id="toggleBtn"
      >{this.state.darkMode ? 'Dark Mode' : 'Light Mode'}</i>
        <Navbar />
        <Switch>
          <Route exact path = {["/","/templatedesign"]} component={Banner} />
          <Route path="/profile" component={Profile}/>
          <Route path="/contact" component={Contact}/>
        </Switch>
      </div>
    </Router>
  );}
}

export default App;
