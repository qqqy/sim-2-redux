import React, { Component } from 'react';
import './App.css';
import routes from './routes'
import Header from './components/Header/Header'

class App extends Component {
  render() {
    return (
      <body>
        <Header/>
        {routes}
      </body>
    );
  }
}

export default App;
