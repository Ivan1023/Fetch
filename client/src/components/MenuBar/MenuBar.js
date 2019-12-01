import React from 'react'
import {Link} from 'react-router-dom'

class MenuBar extends React.Component{
    render(){
        return (
            <div>
                <p>Menu Bar</p>
                    <ul>
                        <Link to={'/profile'}><li>General</li></Link>
                        <Link to={'/setting'}><li>Setting</li></Link>
                        <Link to={'/interest'}><li>Interest</li></Link>
                    </ul>
            </div>
        )
    }
}


export default MenuBar