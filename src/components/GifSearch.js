import React from 'react';

export default class GifSearch extends React.Component {
    state = {
        search: ''
    }

    handleChange = (event) => {
        this.setState({
            search: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.handleSearch(this.state.search)
    }
    
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    name="search"
                    placeholder="search for gifs"
                    onChange={this.handleChange}
                    value={this.state.search}
                />
                <input type="submit" value="Search" className="btn btn-primary"/>
            </form>
        )
    }
}