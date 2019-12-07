import React from 'react'
import Axios from 'axios'
import Card from '../../components/ArticleCard/ArticleCard'
import CardOffline from '../../components/ArticleCardOffline/ArticleCardOffline'
import search from '../../assets/icons/Icon-search.svg'
import Modal from 'react-modal'
import './Main.scss'



class Main extends React.Component {
    state = {
        articleData: [],
        articleLink: ''
    }

   
    componentDidMount() {
        // get google api via express server
        Axios.get('http://localhost:8080/topstories')
        .then(response => {
            //call parse function to start parsing content from url page
            this.parse(response.data)

            // set state of all article cards to display data
            this.setState({
                articleData: response.data
            });

            sessionStorage.setItem("googleContent",JSON.stringify(response.data));
            
        })
        .catch(response => {
            // alert(response)
        })
    }

    //this is being called at did mount
    parse(article){
       
        const articleUrls = []
        //looping through the response that we got from the API to extract url from object then posting to backenfd 
        article.forEach(element => {
            articleUrls.push(Axios.post('http://localhost:8080/parse',{
                "url" : element.url,
                "UUID": element.id
             }));
        });

        const route = this.props.match.params

        // axios all is waiting for the axios post to finish before running the session storage
        Axios.all(articleUrls).then((data) => {
            sessionStorage.setItem(this.parseCategory(route),JSON.stringify(data));
        });
    }

    parseCategory = (data) => {
        
        if (data.category === "entertainment"){
            return "entertainmentParsedContent"
        }
        if (data.category === "health"){
            return "healthParsedContent"
        }
        if (data.category === "science"){
            return "scienceParsedContent"
        }
        if (data.category === "sports"){
            return "sportsParsedContent"
        }
        if (data.category === "technology"){
            return "technologyParsedContent"
        }
        if (data.category === "topstories" || ""){
            return "parsedContent"
        }
    }

    renderArticle = (article) => {

        if(window.navigator.onLine === true){
            window.open(article.url);
        } else {
            // navigate to a whole new page for Offline Content
            this.props.history.push(`/offline/${this.category()}/${article.id}`);
        }
    }

    category = () => {
        if(this.props.match.params !== null || "undefined") {
            return this.props.match.params.category
        } else {
            return "topstories"
        }
    }
   
    componentDidUpdate(prevProps){
        const route = this.props.match.params
        
        //prevents infinite loop 
        if (prevProps.match.params.category === route.category) return;

        // this.getCategories()
        // get google api via express server
        Axios.get('http://localhost:8080/' + route.category || 'topstories')
        .then(response => {
            //call parse function to start parsing content from url page
            this.parse(response.data)

            // set state of all article cards to display data
            this.setState({
                articleData: response.data
            });

            sessionStorage.setItem(this.findCategory(route),JSON.stringify(response.data));
        })
        .catch(response => {
            // alert(response)
        })
    }

    findCategory = (data) => {
        
        if (data.category === "entertainment"){
            return "entertainmentContent"
        }
        if (data.category === "health"){
            return "healthContent"
        }
        if (data.category === "science"){
            return "scienceContent"
        }
        if (data.category === "sports"){
            return "sportsContent"
        }
        if (data.category === "technology"){
            return "technologyContent"
        }
        if (data.category === "topstories" || ""){
            return "topstoriesContent"
        }
    }

    render(){
        const categoryName = this.props.match.params
        const clickedCategory = sessionStorage.getItem(this.findCategory(categoryName));
        return(
            //render articles if internet is true, if not then render offline article once clicked
            <div className="main">
                {window.navigator.onLine ? (
                    this.state.articleData ? this.state.articleData.map(articleArray => (<Card key={articleArray.url} article={articleArray} function={this.renderArticle}/>)): null 
                    ) : (
                    JSON.parse(clickedCategory).map(articleArray => (<CardOffline key={articleArray.url} article={articleArray} function={this.renderArticle}/>))
                    )
                }
                <form className="main__search">
                    <input className="main__txt" placeholder="What are you searching for?"/>
                    <div className="main__button">
                        <img className="main__icon" src={search}/>
                    </div>  
                </form>  
            </div>
        )
    }
}

export default Main
