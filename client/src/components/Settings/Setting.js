import React from 'react'
import MenuBar from '../MenuBar/MenuBar'
import './Setting.scss'

class Setting extends React.Component{
    render(){
        return (
            <div className="profile">
                <MenuBar/>
                <div className="profile__setting">
                    <h4>Account Storage</h4>
                    <p>77% used - 11.62 GB of 15 GB</p>
                    <h4>Article Display</h4>
                    <div className="profile__display">
                        <p>Article Per Page</p>
                        <textarea className="profile__display__quanity" placeholder="10"></textarea>
                    </div>
                </div>
            </div>
        )
    }
}


export default Setting