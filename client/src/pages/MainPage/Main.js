import React from 'react'
import Axios from 'axios'
import Card from '../../components/ArticleCard/ArticleCard'
import './Main.scss'

class Main extends React.Component {
    state = {
        articleData: []
    }

    componentDidMount() {
        
        //get google api via express server
        Axios.get('http://localhost:8080/topstories')
        .then(response => {
            //call parse function to start parsing content from url page
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
            articleUrls.push(Axios.post('http://localhost:8080/parse',{
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
        console.log(this.state)
        return(
            <div className="main">
                {this.state.articleData ? this.state.articleData.map(articleArray => (<Card key={articleArray.url} article={articleArray}/>)): null }
            </div>
        )
    }
}

export default Main
