import React from 'react'
import DOMPurify from 'dompurify'
import './OfflineMode.scss'


class Offline extends React.Component {
    state = {
        offlineArticle: null
    }

    componentDidMount(){
        const storeData = sessionStorage.getItem("parsedContent");

        const findObject = JSON.parse(storeData).find(({data})=>{            
            if(this.props.match.params.category === data.id){
                return data;
            }
        })

        if (!this.state.offlineArticle
            || this.props.match.params.category !== this.state.offlineArticle.id) {
            this.setState({offlineArticle: findObject.data})
        }
    }

    render() {
        return(
            <div className="container">
                <p>Offline Mode</p>
                {this.state.offlineArticle ? <div className="content" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(this.state.offlineArticle.content)}}></div> : null}
            </div>
        )
    }
}

export default Offline