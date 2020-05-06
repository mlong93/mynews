import React, { Component } from 'react'
import './App.css'
// import { Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Title</th>
        <th>Link</th>
        <th>Preview</th>
      </tr>
    </thead>
  )
}

const TableBody = props => {
  const rows = props.newsResults.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.title}</td>
        <td><a href='row.link'>{row.link}</a></td>
        <td>{row.text.substring(0,300)}</td>
      </tr>
    )
  })

  return <tbody>{rows}</tbody>
}

class Table extends Component {

  render() {
    // receiving data from App.js
    const { newsResults } = this.props


    return(
      <table>
        <TableHeader />
        <TableBody newsResults={newsResults} />
      </table>
    )
  }
}

export default Table;
