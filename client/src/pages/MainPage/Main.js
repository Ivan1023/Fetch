import React from 'react'
import Card from '../../components/ArticleCard/ArticleCard'
import jsonData from '../../data/data.json'

// console.log(data.articles)

class Main extends React.Component {
    state = {
        articleData: jsonData.articles
    }

    

    render(){
        // console.log(this.state.newsArticles)
        
        return(
            <div>
                {this.state.articleData ? this.state.articleData.map(articleArray => (<Card article={articleArray}/>)): null }
            </div>
        )
    }
}

export default Main
