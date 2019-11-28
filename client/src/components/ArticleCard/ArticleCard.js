import React from 'react'
import Axios from 'axios'
import './Article.scss'


class Card extends React.Component {
    
    clickHandler = (event) => {
        event.preventDefault()

        window.open(this.props.article.url)
    
        // Axios.get('https://lifehacker.com/every-tech-special-section-weve-published-so-far-1839478368')
        //     .then(function (response) {
        //         window.open(this.props.article.url)
        //         alert('request went through')
        //     })
        //     .catch(function(error) {
        //         alert('Something went wrong')
        //     })
    }

    render(){

        const link = this.props.article.url

    
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