import React from 'react'
import './Article.scss'


class Card extends React.Component {
    render(){
        
        return(
            <article className="article">
                <img className="article__img-container" src={this.props.article.urlToImage} alt="Article Cover"></img>
                <h1>{this.props.article.title}</h1>
                <p>{this.props.article.description}</p>
                <span>{this.props.article.source.name}</span>
                <span>{this.props.article.publishedAt}</span>
            </article>
        )
    }
}

export default Card