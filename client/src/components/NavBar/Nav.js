import React from 'react'
import Menu from '../../assets/icons/bars-solid.svg'
import Search from '../../assets/icons/Icon-search.svg'
import './Nav.scss'


class Nav extends React.Component {
    render(){
        return(
            <nav className="nav">
                <div className="nav__container">
                    <div className="nav__menu">
                        <img src={Menu} alt="Menu" className="nav__menu__img"></img>
                    </div>
                    <p className="nav__logo">Fetch</p>
                </div>
                <div className="nav__search">
                    <img src={Search}></img>
                </div>
            </nav>
        )
    }
}

export default Nav
