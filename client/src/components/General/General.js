import React from 'react'
import MenuBar from '../MenuBar/MenuBar'
import './General.scss'

class General extends React.Component{
    render(){
        return (
            <div className="general">
                <label>Name</label>
                <textarea placeholder="Ivan Chau" className="general__textbox"></textarea>
                <label>Email</label>
                <textarea placeholder="Example@test.com" className="general__textbox"></textarea>
                <label>Password</label>
                <textarea placeholder="************" className="general__textbox"></textarea>
            </div>
        )
    }
}


export default General 