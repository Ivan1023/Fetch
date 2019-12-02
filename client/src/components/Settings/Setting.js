import React from 'react'
import MenuBar from '../MenuBar/MenuBar'
import './Setting.scss'

class Setting extends React.Component{
    render(){
        return (
            <div className="profile">
                <MenuBar/>
                <div className="profile__setting">
                    <p>Account Storage</p>
                    <p>77% used - 11.62 GB of 15 GB</p>
                </div>
            </div>
        )
    }
}


export default Setting