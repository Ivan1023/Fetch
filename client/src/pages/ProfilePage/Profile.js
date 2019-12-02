import React from 'react'
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom'
import General from '../../components/General/General'
import Setting from '../../components/Settings/Setting'
import Interest from '../../components/Interest/Interest'
import MenuBar from '../../components/MenuBar/MenuBar'
import './Profile.scss'

class Profile extends React.Component{
    render(){
        return (
            <div className="profile">
                <MenuBar/>
                <General/>
            </div>
        )
    }
}


export default Profile 