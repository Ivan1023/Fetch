import React from 'react'
import {Link} from 'react-router-dom'
import './MenuBar.scss'

class MenuBar extends React.Component{
    render(){
        return (
            <div>
                <ul className="menu">
                    <Link to={'/profile'}><li className="menu__list">General</li></Link>
                    <Link to={'/setting'}><li className="menu__list">Setting</li></Link>
                    <Link to={'/interest'}><li className="menu__list">Interest</li></Link>
                </ul>
            </div>
        )
    }
}


export default MenuBar