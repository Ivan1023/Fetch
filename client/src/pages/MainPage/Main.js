import React from 'react'
import Axios from 'axios'
import Card from '../../components/ArticleCard/ArticleCard'
import './Main.scss'

class Main extends React.Component {
    state = {
        articleData: []
    }

    componentDidMount() {
        // api key is stored in .env file
        const apiKey = process.env.REACT_APP_GOOGLE_API_KEY

        //get google api
        Axios.get('https://newsapi.org/v2/everything?q=tech&pageSize=40&apiKey=' + apiKey)
        .then(response => {
            //call parse functiont o start parsing content from url page
            this.parse(response.data.articles)

            // set state of all article cards to display data
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
        //looping through the response that we got from the API to extract url from object then posting to backenfd 
        article.forEach(element => {
            articleUrls.push(Axios.post('http://localhost:8080/',{
                "url" : element.url
             }));
        });

        //axios all is waiting for the axios post to finish before running the session storage
        Axios.all(articleUrls).then((data) => {
            //TODO: map data to reduce the amount of data being send to session storage
            console.log(data);
            
            sessionStorage.setItem("parsedContent",JSON.stringify(data));
        });
        console.log(articleUrls)
        
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
