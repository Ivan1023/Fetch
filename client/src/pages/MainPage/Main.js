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
            this.parse(response.data.articles)
            this.setState({
                articleData: response.data.articles
            });
        })
        .catch(response => {
            alert(response)
        })
    }

    parse(article){
        const articleUrls = []
        
        article.forEach(element => {
            articleUrls.push(Axios.post('http://localhost:8080/',{
                "url" : element.url
             }));
        });
        console.log(articleUrls)
         
        //  Axios.post('http://localhost:8080/',{
        //     "url" : article.url
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
