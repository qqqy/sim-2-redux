import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class Wizard1 extends Component{
  constructor(props){
    super(props)
    this.state={
      mort: '',
      rent: ''
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
          mort: '',
          rent: ''
        })} else {
          window.location = 'http://localhost:3000/#/'
        }
      })
    }
  }

  render(){
    let {mort, rent} = this.state
    return(
            <form>
              <div className='input-line'>
                <h6>Mortgage</h6>
                <input 
                  value={mort} 
                  onChange={e => this.handleInputs('propertyname', e.target.value)}/>
              </div>
              
              <div className='input-line'>
                <h6>Rent</h6>
                <input 
                  value={rent} 
                  onChange={ (e) => this.handleInputs('address', e.target.value)} />
              </div>


              <div className='complete-button input-line'>
              <Link to='/wizard/wizard2'><button>Previous</button></Link>
              <button>Complete</button>
              </div>
            </form>
    )
  }
}

export default Wizard1