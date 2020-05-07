import React, { Component } from 'react'

class SearchForm extends Component {
    initialState = {
        query: '',
    }
    
    state = this.initialState

    handleChange = event => {
        const { input } = event.target

        this.setState({
            query: input,
        })
    }

    submitForm = () => {
        // calls handleSubmit from App.js and passes current SearchForm state to App.js
        this.props.handleSubmit(this.state)

        // resets to initial state
        this.setState(this.initialState)
      }

    render() {
        const { query } = this.state;

        return (
            <form>
                <label htmlFor="query">What do you want to search?</label>
                <input
                    type="text"
                    name="query"
                    id="query"
                    value={query}
                    onChange={this.handleChange} />
                <input type="button" value="Submit" onClick={this.submitForm} />
            </form>
        );
    }
}

export default SearchForm;