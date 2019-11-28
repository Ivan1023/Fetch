import React from 'react'
import Axios from 'axios'
import './Article.scss'


class Card extends React.Component {
    state = {
        isOnline: window.navigator.onLine
    }
    


    clickHandler = (event) => {
        event.preventDefault()

        const cors = "https://cors-anywhere.herokuapp.com/"

        Axios.get( cors + 'https://google.com', {
            headers: {
                'X-Requested-With': 'XMLHttpRequest'
            } 
        })
            .then((response) => {
                window.open(this.props.article.url)
                alert('request went through')
            })
            .catch(function(error) {
                alert(error)
            })
    }

    render(){
    
        return(
            <article className="article">
                <img onClick={this.clickHandler} className="article__img-container" src={this.props.article.urlToImage} alt="Article Cover"></img>
                <h1 onClick={this.clickHandler}>{this.props.article.title}</h1>
                <p>{this.props.article.description}</p>
                <span>{this.props.article.source.name}</span>
                <span>{this.props.article.publishedAt}</span>
            </article>
        )
    }
}

export default Card