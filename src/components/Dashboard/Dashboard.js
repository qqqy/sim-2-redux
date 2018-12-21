import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Dashboard extends Component{

  render(){
    return (
      <div className='main'>
      <div className='sidebar'></div>
      <div className='mid'>
        <header className='dash-header'>
          <h1>Dashboard</h1>
          <Link to='/wizard'><button>Add New Property</button></Link>
        </header>
      </div>
      <div className='sidebar'></div>
      </div>
    )
  }
}

export default Dashboard