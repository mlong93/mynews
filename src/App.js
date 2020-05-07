import React, { Component } from 'react'
import news from './data.json'
import './App.css'
import Table from './GridDisplay.js'
import SearchForm from './form.js'


class App extends Component {

  state = {
    data: [],
  }

  componentDidMount(){

    this.setState({
      data: news,
    })

  }

  handleSubmit = query => {
    console.log("Coming soon!")
    this.setState(query)
  }


  render() {

    const { data } = this.state

    return (
      <div className='container'>
        {data.results && <Table newsResults = {data.results} />}
        <SearchForm handleSubmit={this.handleSubmit} />
      </div>
    );

  }
}

export default App;
