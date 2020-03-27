import React, { Component } from 'react';
import Home from './component/home/Home';
import Contacts from './component/Contacts';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends Component {
  render () {
    return (
      <div className="App">
        <Router>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/contacts" component={Contacts} />
          </Switch> 
          <Footer />
        </Router>
      </div>
    )
  }
}

export default App;
