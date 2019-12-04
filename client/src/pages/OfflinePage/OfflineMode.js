import React from 'react'
import DOMPurify from 'dompurify'
import './OfflineMode.scss'


class Offline extends React.Component {
    render() {
        return(
            <div>
                <p>Offline Mode</p>
                <div className="content" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(this.props.data.content)}}></div>
            </div>
        )
    }
}

export default Offline