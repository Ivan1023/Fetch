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

        const findObject = JSON.parse(storeData).find(({data})=>{            
            if(this.props.match.params.id === data.id){
                return data;
            }
        })

        if (!this.state.offlineArticle
            || this.props.match.params.id !== this.state.offlineArticle.id) {
            this.setState({offlineArticle: findObject.data})
        }
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


    render() {
        console.log(this.props.match.params)
        return(
            <div className="container">
                <p>Offline Mode</p>
                {this.state.offlineArticle ? <div className="content" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(this.state.offlineArticle.content)}}></div> : null}
            </div>
        )
    }
}

export default Offline