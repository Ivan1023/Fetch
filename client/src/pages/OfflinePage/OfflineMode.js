import React from 'react'
import DOMPurify from 'dompurify'
import './OfflineMode.scss'


class Offline extends React.Component {
    state = {
        offlineArticle: null
    }

    componentDidMount(){
        const category = this.props.match.params

        const storeData = sessionStorage.getItem(this.parseCategory(category));
        console.log(storeData)
        console.log(category)

        const findObject = JSON.parse(storeData).find(({data})=>{   
            console.log(data)  
            console.log(this.props.match.params)       
            if(this.props.match.params.id === data.id){
                console.log(data)
                return data;
                
            }
        })
        console.log(findObject)
        if (!this.state.offlineArticle
            || this.props.match.params.id !== this.state.offlineArticle.id) {
            this.setState({offlineArticle: findObject.data})
        }
    }

    //function to change the name of session storage parsed data to categorize by topic
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
        if (data.category === "search"|| "" ){
            return "searchTopicParsedContent"
        }
        if (data.category === "topstories" || data.category === "undefined"){
            return "topstoriesParsedContent"
        }
    }


    render() {
        console.log(this.props.match.params)
        console.log(this.state.offlineArticle)
        return(
            <div className="container">
                <h3>Offline Mode</h3>
                {this.state.offlineArticle ? <div className="content" dangerouslySetInnerHTML={this.state.offlineArticle.content ? {__html: DOMPurify.sanitize(this.state.offlineArticle.content)}: {__html:"No content available from website"}}></div> 
                : <p>No content available from website</p>}
            </div>
        )
    }
}

export default Offline