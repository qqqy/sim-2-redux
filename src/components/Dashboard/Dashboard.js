import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import House from '../House/House'
import axios from 'axios'

class Dashboard extends Component{
  constructor(props){
    super(props)
    this.state = {
      house: [{propertyname: 'Loading Houses...', address: '', city: '', state: '', zip: '', img: '', mort: ''}]
    }
  this.deleteHouse = this.deleteHouse.bind(this)
  this.getList = this.getList.bind(this)
  }

  componentDidMount(){
    // console.log('Mounting...')
    // setTimeout(this.getList(), 1500)
    this.getList();
  }

  getList(){
    axios.get('http://localhost:4040/api/all')
    .then((res) => this.setState({
      house: res.data
    }))
    .catch(() => setTimeout(this.getList, 3000))
  }

  // listHandler(house, i){
  //   return(
  //     <House
  //       house={house}
  //       key={i}
  //       index={i}
  //       delete={this.deleteHouse}
  //     />
  //   )
  // }

  deleteHouse(id){
    axios.delete('http://localhost:4040/api/delete/' + id)
    .then(this.getList)
  }

  render(){
    let list = this.state.house.map((house, i) => {
      return(
        <House
          house={house}
          key={i}
          index={i}
          delete={this.deleteHouse}
        />
      )
    })

    return (
      <div className='main'>
      <div className='sidebar'></div>
      <div className='mid'>
        <header className='dash-header'>
          <h1>Dashboard</h1>
          <Link to='/wizard/wizard1'><button>Add New Property</button></Link>
        </header>
        {list}
      </div>
      <div className='sidebar'></div>
      </div>
    )
  }
}

export default Dashboard