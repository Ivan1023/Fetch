import React from 'react'
import menuIcon from '../../assets/icons/bars-solid.svg'
import Search from '../../assets/icons/Icon-search.svg'
import { slide as Menu } from 'react-burger-menu'
import { Link } from 'react-router-dom';
import './Nav.scss'


class Nav extends React.Component {
    state = {
        menuOpen: false
    }

    handleStateChange (state) {
        this.setState({menuOpen: state.isOpen})  
    }

    closeMenu () {
        this.setState({menuOpen: false})
    }

    toggleMenu () {
        this.setState(state => ({menuOpen: !state.menuOpen}))
    }


    render(){
        return(
            <nav className="nav">
                <div className="nav__container">
                    <Menu 
                        isOpen={this.state.menuOpen}
                        onStateChange={(state) => this.handleStateChange(state)}
                        >
                        <Link to={'/'}><p onClick={() => this.closeMenu()} className="logo">Fetch</p></Link>
                        <Link to={'/profile'}><p onClick={() => this.closeMenu()}>Profile</p></Link>
                        <Link to={'/setting'}><p onClick={() => this.closeMenu()} className="spacing">Setting</p></Link>
                        <p onClick={() => this.closeMenu()}>Entertainment</p>
                        <p onClick={() => this.closeMenu()}>General</p>
                        <p onClick={() => this.closeMenu()}>Health</p>
                        <p onClick={() => this.closeMenu()}>Science</p>
                        <p onClick={() => this.closeMenu()}>Sports</p>
                        <p onClick={() => this.closeMenu()}>Technology</p>
                    </Menu>
                        {/* <img src={menuIcon} alt="Menu Icon" className="nav__menu__img" onClick={() => this.toggleMenu()}></img> */}
                    <p className="nav__logo">Fetch</p>
                </div>
            </nav>
        )
    }
}

export default Nav
