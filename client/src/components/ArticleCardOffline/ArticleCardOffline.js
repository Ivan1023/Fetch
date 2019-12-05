import React from 'react'
import {Link} from 'react-router-dom'
import './ArticleCardOffline.scss'


class CardOffline extends React.Component {

    urlHandler = (event) =>{
        event.preventDefault()
        this.props.function(this.props.article)
    }

    render(){     
        
        return(
            <article className="article">
                {/* <img className="article__img-container" onClick={this.urlHandler} src={this.props.article.urlToImage} alt="Article Cover"></img> */}
                <h2 className="article__header" onClick={this.urlHandler}>{this.props.article.title}</h2>
                <p className="article__description">{this.props.article.description}</p>
                <span className="article__source">{this.props.article.source.name}</span>
                <span className="article__date">{this.props.article.publishedAt}</span>
            </article>
        )
    }
}

export default CardOffline