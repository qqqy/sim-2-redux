import React, { Component } from 'react';
import './App.css';
import routes from './routes'
import Header from './components/Header/Header'
import axios from 'axios';

class App extends Component {
  render() {
    return (
      <>
        <Header/>
        {routes}
      </>
    );
  }
}

export default App;
