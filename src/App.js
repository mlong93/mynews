import React, { Component } from 'react'
import news from './data.json'
import './App.css'
import Table from './GridDisplay.js'


class App extends Component {

  state = {
    data: [],
  }

  componentDidMount(){

    this.setState({
      data: news,
    })

  }


  render() {

    const { data } = this.state

    return (
      <div className='container'>
        {data.results && <Table newsResults = {data.results} />}
      </div>
    );

  }
}

export default App;
