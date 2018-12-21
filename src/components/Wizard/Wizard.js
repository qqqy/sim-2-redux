import React, { Component } from 'react'
import { Link , Route, Switch } from 'react-router-dom'
import Wizard1 from './Wizard1';
import Wizard2 from './Wizard2';
import Wizard3 from './Wizard3';

class Wizard extends Component{

render(){
    return(
      <div className='main'>
        <div className='sidebar'></div>
          <div className='mid'>
            <header className='dash-header'>
              <h1>Add New Listing</h1>
              <Link to='/'><button>Cancel</button></Link>
            </header>
            <Switch>
              <Route path='/wizard/wizard1' component={ Wizard1 } />
              <Route path='/wizard/wizard2' component={ Wizard2 } />
              <Route path='/wizard/wizard3' component={ Wizard3 } />
            </Switch>
          </div>
        <div className='sidebar'></div>
      </div>
    )
  }
}

export default Wizard