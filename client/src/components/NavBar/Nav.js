import React from 'react'
import Menu from '../../assets/icons/bars-solid.svg'
import Logo from '../../assets/logo/cf278aff-ac18-4ea1-b688-07f72b48baa2.png'
import Setting from '../../assets/icons/cogs-solid.svg'
import './Nav.scss'


class Nav extends React.Component {
    render(){
        return(
            <nav className="nav">
                <div className="nav__container">
                    <div className="nav__menu">
                        <img src={Menu} alt="Menu" className="nav__menu__img"></img>
                    </div>
                    <div className="nav__logo">
                        <img src={Logo} alt="Logo" className="nav__logo__img"></img>
                    </div>
                </div>
                <div>
                    <textarea placeholder="Search" className="nav__search"></textarea>
                </div>
                <div className="nav__container">
                    <div className="nav__user">
                        <p className="nav__user__img">I</p>
                    </div>
                    <div className="nav__setting">
                        <img src={Setting} alt="Settings" className="nav__setting__img"></img>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Nav
