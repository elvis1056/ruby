import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import Home from './component/home/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';
import './component/home/carousel.css';
// import { Button } from 'react-bootstrap'

class App extends Component {
  render () {
    return (
      <div className="App">
        <Home />
      </div>
    )
  }
}

export default App;
