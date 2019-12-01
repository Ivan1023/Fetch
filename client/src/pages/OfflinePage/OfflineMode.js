import React from 'react'
import DOMPurify from 'dompurify'
import './OfflineMode.scss'


class Offline extends React.Component {

    
    render() {
        

        const storeData = sessionStorage.getItem("parsedContent");
        
        const findObject = JSON.parse(storeData).find(({data})=> {
                if(data.title === this.props.match.params.id){
                    return data;
                }
                // console.log(data)
            }
        )
        console.log(findObject)
        
        return(
            <div>
                <p>Offline Mode</p>
                <div className="content" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(findObject.data.content)}}></div>
            </div>
        )
    }
}

export default Offline