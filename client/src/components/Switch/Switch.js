import React from 'react'
import SwitchToggle from 'react-switch'
import './Switch.scss'

class Switch extends React.Component{

    state = { checked: false };

    handleChange = this.handleChange.bind(this);


    handleChange(checked) {
        this.setState({ checked });
      }
    
    render(){
        return (
            <label className="switch">
                <SwitchToggle checked={this.state.checked}
                onChange={this.handleChange}
                onColor="#86d3ff"
                onHandleColor="#2693e6"
                handleDiameter={15}
                uncheckedIcon={false}
                checkedIcon={false}
                boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                height={10}
                width={24}
                className="react-switch"
                id="material-switch"/>
            </label>
        )
    }
}


export default Switch