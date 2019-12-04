import React from 'react'
import General from '../../components/General/General'
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