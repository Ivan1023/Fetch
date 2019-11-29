import React from 'react'
import './Article.scss'


class Card extends React.Component {


    clickHandler = (event) => {
        event.preventDefault()
        //window.navigator.onLine is a console state to see if internet is available
        // check to see if window.navigator.onLine has internet connection
        if(window.navigator.onLine === true){
            window.open(this.props.article.url)
        } else {
            alert("Error");
        }
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