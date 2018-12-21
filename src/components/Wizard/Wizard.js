import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class Wizard extends Component{
  constructor(props){
    super(props)
    this.state={
      propertyname: '',
      address: '',
      city: '',
      state: '',
      zip: '',
    }
  }

  handleInputs(line, value){
    this.setState({
      [line]: value
    })
    // console.log(this.state[line])
  }

  clickHandle(add, stay){
    console.log(`clickHandle invoked on` , this.state)
    if(add){
      axios.post('http://localhost:4040/api/submit', this.state)
      .then(() => {
        if (stay){this.setState({
          propertyname: '',
          address: '',
          city: '',
          state: '',
          zip: ''
        })} else {
          window.location = 'http://localhost:3000/#/'
        }
      })
    }
  }

  render(){
    let {propertyname, address, city, state, zip} = this.state
    return(
      <div className='main'>
        <div className='sidebar'></div>
          <div className='mid'>
            <header className='dash-header'>
              <h1>Add New Listing</h1>
              <Link to='/'><button>Cancel</button></Link>
            </header>
            <form>
              <div className='input-line'><h6>Name of Property</h6><input 
                value={propertyname} 
                onChange={e => this.handleInputs('propertyname', e.target.value)}/></div>
              <div className='input-line'><h6>Address</h6><input value={address} onChange={e => this.handleInputs('address', e.target.value)} /></div>
              <div className='input-line'><h6>City</h6><input value={city} onChange={e => this.handleInputs('city', e.target.value)} /></div>
              <div className='input-line'><h6>State</h6><input value={state} onChange={e => this.handleInputs('state', e.target.value)} /></div>
              <div className='input-line'><h6>Zip Code</h6><input value={zip} onChange={e => this.handleInputs('zip', e.target.value)} /></div>
              <div className='complete-button input-line'>
                <button onClick={() => this.clickHandle(true, false)}>Complete</button>
                <Link to='/'><button>Cancel</button></Link>
                <button onClick={() => this.clickHandle(true, true)}>Add and Clear</button>
              </div>
            </form>
          </div>
        <div className='sidebar'></div>
      </div>
    )
  }
}

export default Wizard