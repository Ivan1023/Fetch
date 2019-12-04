import React from 'react'
import { slide as Menu } from 'react-burger-menu'
import { Link } from 'react-router-dom';
import './Nav.scss';
import logoOrangeBackground from '../../assets/logo/fetchOrange.png';
import logoOrangeText from '../../assets/logo/fetchOrangeText.png';
import search from '../../assets/icons/Icon-search.svg'

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
        // console.log(this.props.function)
        return(
            <nav className="nav">
                
                    <Menu 
                        isOpen={this.state.menuOpen}
                        onStateChange={(state) => this.handleStateChange(state)}
                        >
                        <Link to={'/'}><img onClick={() => this.closeMenu()} src={logoOrangeText} className="logo"></img></Link>
                        <Link to={'/profile'}><p onClick={() => this.closeMenu()}>Profile</p></Link>
                        <Link to={'/setting'}><p onClick={() => this.closeMenu()} className="spacing">Setting</p></Link>
                        <Link to={'/topstories'}><p onClick={() => this.closeMenu()}>Top Stories</p></Link>
                        <Link to={'/entertainment'}><p onClick={() => this.closeMenu()}>Entertainment</p></Link>
                        <Link to={'/health'}><p onClick={() => this.closeMenu()}>Health</p></Link>
                        <Link to={'/science'}><p onClick={() => this.closeMenu()}>Science</p></Link>
                        <Link to={'/sports'}><p onClick={() => this.closeMenu()}>Sports</p></Link>
                        <Link to={'/technology'}><p onClick={() => this.closeMenu()}>Technology</p></Link>
                        <Link to={'/search'}>
                            <form className="nav__form">
                                <textarea className="nav__search" type="text" placeholder="Search"></textarea>
                                <img className="nav__button" onClick={() => this.closeMenu()} src={search}></img>
                            </form>
                        </Link>
                    </Menu>
                    <div className="nav__logo">
                        <Link to={'/'}><img src={logoOrangeBackground} className="nav__logo"></img></Link>
                    </div>
                
            </nav>
        )
    }
}

export default Nav
