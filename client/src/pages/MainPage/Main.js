import React from 'react'
import Axios from 'axios'
import Card from '../../components/ArticleCard/ArticleCard'
import './Main.scss'

class Main extends React.Component {
    state = {
        articleData: []
    }

    componentDidMount() {
        const apiKey = process.env.REACT_APP_GOOGLE_API_KEY
        
        Axios.get('https://newsapi.org/v2/everything?q=tech&pageSize=40&apiKey=' + apiKey)
        .then(response => {
            
            this.setState({
                articleData: response.data.articles
            });
            this.parse(response.data.articles)
            
        })
        .catch(response => {
            alert('Something went wrong')
        })
    }

    parse(article){
        const articleUrls = article.map((article)=>{
            return article.url
        })
        console.log(articleUrls)
         
        //  Axios.post('http://localhost:8080/',{
        //      "url": this.article
        //  })
        //  .then(response => {
        //      console.log(response)
        //      return response
        //  })
        //  .catch(error => {
        //      console.error("Error")
        //  })
    }


    render(){
        
        return(
            <div className="main">
                {this.state.articleData ? this.state.articleData.map(articleArray => (<Card key={articleArray.url} article={articleArray}/>)): null }
            </div>
        )
    }
}

export default Main
