import React from 'react'
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

export default class GifListContainer extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            gifs: []
        }

    }
    
    // makes it so context is bound to container component (where props and state exist)
    handleSearch = (query) => {
        const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(query)}&api_key=7mHBBRhCF8Po9DQB4SpEs7tNCAdqDp2n&rating=g`
        fetch(url)
            .then(res => res.json())
            .then(gifsData => {
                const gifs = gifsData.data.slice(0,3).map(gif => {
                    return {title: gif.title, id: gif.id, url: gif.images.original.url}
                })
                this.setState({ 
                    gifs: gifs
                })
                this.state.gifs
            })
    }
    
    render () {
        return (
            <div>
                <GifSearch handleSearch={this.handleSearch} />
                <GifList gifs={this.state.gifs}/>
            </div>
        )
    }
}