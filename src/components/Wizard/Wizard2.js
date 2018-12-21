import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class Wizard1 extends Component{
  constructor(props){
    super(props)
    this.state={
      img: ''
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
          img: ''
        })} else {
          window.location = 'http://localhost:3000/#/'
        }
      })
    }
  }

  render(){
    let {img} = this.state
    return(
            <form>
              <div className='input-line'><h6>Picture of Property</h6><input 
                value={img} 
                onChange={e => this.handleInputs('img', e.target.value)}/></div>

              <div className='complete-button input-line'>
              <Link to='/wizard/wizard1'><button>Previous</button></Link>
              <Link to='/wizard/wizard3'><button>Next</button></Link>
              </div>
            </form>
    )
  }
}

export default Wizard1