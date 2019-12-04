import React from 'react'
import Axios from 'axios'
import Card from '../../components/ArticleCard/ArticleCard'
import OfflineMode from '../OfflinePage/OfflineMode'
import './Main.scss'

class Main extends React.Component {
    state = {
        articleData: [],
        articleLink: '',
        offlineArticle: null
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
            // sessionStorage.setItem("stateContent",JSON.stringify(response.data.articles));

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
            // console.log(data);

            sessionStorage.setItem("parsedContent",JSON.stringify(data));
        });
    }

    renderArticle = (article) => {

        console.log(article)

        if(window.navigator.onLine === true){
            window.open(article.url);
        } else {
            const storeData = sessionStorage.getItem("parsedContent");
            // console.log(storeData)

            const findObject = JSON.parse(storeData).find(({data})=>{
                // console.log('IMAGE', data.image, article.urlToImage, "URL", data.url, article.url)
                if (
                    data.image === article.urlToImage 
                    || data.url === article.url 
                    ||data.description === article.description 
                    || data.title === article.title
                    ) {
                    return data
                }
            })

            console.log('FIND OBJ', article, findObject)
            

            if (!this.state.offlineArticle
                || article !== this.state.offlineArticle.url) {
                this.setState({offlineArticle: findObject.data}, () => {
                    console.log('SET OFFLINE', this.state.offlineArticle)
                });
                
            }
        }
    }

        // if(window.navigator.onLine === true){
        //     window.open(link);
        // } else {
        //     const storeData = sessionStorage.getItem("parsedContent");

        //     const findObject = JSON.parse(storeData).find(({data})=>{
        //         console.log('URL', data.url, link)
        //         // if (`${data.author}${data.title}` === `${article.author}${article.title}`) {
                    
        //         // }
        //         if(data.url === link){
                    
        //             return data;
        //         }
        //     })

        //     console.log('FIND OBJ', link, findObject)
            

        //     if (!this.state.offlineArticle
        //         || link !== this.state.offlineArticle.url) {
        //         this.setState({offlineArticle: findObject.data}, () => {
        //             console.log('SET OFFLINE', this.state.offlineArticle)
        //         });
                
        //     }
        // }
    

    categoryRoute = () => {
        const route = this.props.match.params
        //get google api via express server
        Axios.get('http://localhost:8080' + route)
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


    render(){
        // const stateData = sessionStorage.getItem("stateContent");
        // const stateObject = JSON.parse(stateData);
        // console.log(stateObject)
        // console.log(this.state.offlineArticle) // passing url back from article card
        console.log(this.props.match.params) // for sidebar search
        return(
            //render articles if internet is true, if not then render offline article once clicked
            <div className="main">
                {/* {window.navigator.onLine ? (
                    stateObject ? stateObject.map(articleArray => (<Card key={articleArray.url} article={articleArray} function={this.renderArticle}/>)): null 
                    ) : (
                        <OfflineMode data={this.state.offlineArticle}/>
                    )
                } */}

                {window.navigator.onLine ? (
                    this.state.articleData ? this.state.articleData.map(articleArray => (<Card key={articleArray.url} article={articleArray} function={this.renderArticle}/>)): null 
                    ) : (
                        <OfflineMode data={this.state.offlineArticle}/>
                    )
                }
            </div>
        )
    }
}

export default Main
