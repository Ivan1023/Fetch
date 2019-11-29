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
            // console.log(sessionStorage.parsedContent)
            const storeData = sessionStorage.getItem("parsedContent");

            const findObject = JSON.parse(storeData).find(({data})=>{
                if(data.url === this.props.article.url){
                    return data;
                }
            })

            console.log(findObject)
        }
    }

    render(){
    
        return(
            <article className="article">
                <img onClick={this.clickHandler} className="article__img-container" src={this.props.article.urlToImage} alt="Article Cover"></img>
                <h2 className="article__header" onClick={this.clickHandler}>{this.props.article.title}</h2>
                <p className="article__description">{this.props.article.description}</p>
                <span className="article__source">{this.props.article.source.name}</span>
                <span className="article__date">{this.props.article.publishedAt}</span>
            </article>
        )
    }
}

export default Card