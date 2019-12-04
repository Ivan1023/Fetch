import React from 'react'
import MenuBar from '../MenuBar/MenuBar'
import Switch from '../Switch/Switch'
import './Interest.scss'

class Interest extends React.Component{
    render(){
        return (
            <div className="profile">
                <MenuBar/>
                <ul className="profile__list">
                    <div className="profile__switch-container"><li className="profile__items">History</li><Switch/></div>
                    <div className="profile__switch-container"><li className="profile__items">Websites</li><Switch/></div>
                    <div className="profile__switch-container"><li className="profile__items">Space</li><Switch/></div>
                    <div className="profile__switch-container"><li className="profile__items">Computer</li><Switch/></div>
                    <div className="profile__switch-container"><li className="profile__items">Finance</li><Switch/></div>
                </ul>
            </div>
        )
    }
}


export default Interest