import React from 'react'
import Axios from 'axios'
import Card from '../../components/ArticleCard/ArticleCard'
import './Main.scss'


// console.log(data.articles)

class Main extends React.Component {
    state = {
        articleData: []
    }

    componentDidMount() {
        const apiKey = process.env.REACT_APP_GOOGLE_API_KEY
        console.log(apiKey)

        Axios.get('https://newsapi.org/v2/everything?q=tech&pageSize=40&apiKey=' + apiKey)
        .then(response => {
            console.log(response)
            this.setState({
                articleData: response.data.articles
            });
        })
        .catch(response => {
            alert('Something went wrong')
        })
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
