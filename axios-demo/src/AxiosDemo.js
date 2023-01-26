
import React, { Component } from 'react'
import axios from 'axios'

export default class AxiosDemo extends Component {
  
  state = {
    persons: []
  }

  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res=>{
        const persons = res.data
        this.setState({persons})
    })
  }
  
    render() {
    return (
      <div>
            {this.state.persons.map(person=><li>Person:{person.name} Email:{person.email}</li>)}
      </div>
    )
  }
}
