import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import House from '../House/House'
import axios from 'axios'

class Dashboard extends Component{
  constructor(props){
    super(props)
    this.state = {
      house: [{propertyname: 'Loading Houses...', address: '', city: '', state: '', zip: ''}]
    }
  }

  componentDidMount(){
    console.log('Mounting...')
    this.getList()
  }

  getList(){
    axios.get('http://localhost:4040/api/all')
    .then((res) => this.setState({
      house: res.data
    }))
  }

  listHandler(house, i){
    return(
      <House
        house={house}
        key={i}
      />
    )
    
  }

  render(){
    let list = this.state.house.map(this.listHandler)
    return (
      <div className='main'>
      <div className='sidebar'></div>
      <div className='mid'>
        <header className='dash-header'>
          <h1>Dashboard</h1>
          <Link to='/wizard'><button>Add New Property</button></Link>
        </header>
        {list}
      </div>
      <div className='sidebar'></div>
      </div>
    )
  }
}

export default Dashboard