import React from 'react'
import { slide as Menu } from 'react-burger-menu'
import { Link, Redirect } from 'react-router-dom';
import './Nav.scss';
import logoOrangeBackground from '../../assets/logo/fetchOrange.png';
import logoOrangeText from '../../assets/logo/fetchOrangeText.png';
import search from '../../assets/icons/Icon-search.svg'

class Nav extends React.Component {
    state = {
        menuOpen: false, 
        "searchCategory": ''
    }

    handleStateChange (state) {
        this.setState({menuOpen: state.isOpen})  
    }

    closeMenu = () => {
        this.setState({menuOpen: false})
    }

    toggleMenu () {
        this.setState(state => ({menuOpen: !state.menuOpen}))
    }

    // changeHandler = (event) =>{
    //     event.preventDefault()
    //     // console.log(event.target)
    //     this.setState ({[event.target.name]: event.target.value})
    //     // this.props.submit(event)
    //     // this.setState({
    //     //     menuOpen: false,
    //     //     redirect: true
    //     // })
        
    //     // if (!this.state.redirect) {
    //     //     console.log("redirect");
            
    //     //     return <Redirect to='/search'/>;
    //     //     } else {
    //     //         console.log("not redirect");
                
    //     //     }
    //     //   return <RenderYourForm/>;

    // }

    // sendSearch = () => {
    //     console.log(this.state.searchCategory)
    //     this.props.submit(this.state.searchCategory)
    // }
    

    render(){
        console.log(this.props)
        console.log(this.state)
        const {searchCategory} = this.state
        return(
            <nav className="nav">
                
                    <Menu 
                        isOpen={this.state.menuOpen}
                        onStateChange={(state) => this.handleStateChange(state)}
                        >
                        <Link to={'/topstories'}><img onClick={() => this.closeMenu()} src={logoOrangeText} className="logo" alt="article cover"></img></Link>
                        <Link to={'/profile'}><p onClick={() => this.closeMenu()}>Profile</p></Link>
                        <Link to={'/setting'}><p onClick={() => this.closeMenu()} className="spacing">Setting</p></Link>
                        <Link to={'/topstories'}><p onClick={() => this.closeMenu()}>Top Stories</p></Link>
                        <Link to={'/entertainment'}><p onClick={() => this.closeMenu()}>Entertainment</p></Link>
                        <Link to={'/health'}><p onClick={() => this.closeMenu()}>Health</p></Link>
                        <Link to={'/science'}><p onClick={() => this.closeMenu()}>Science</p></Link>
                        <Link to={'/sports'}><p onClick={() => this.closeMenu()}>Sports</p></Link>
                        <Link to={'/technology'}><p onClick={() => this.closeMenu()}>Technology</p></Link>
                        
                        
                        <form className="nav__form" onSubmit={this.sendSearch}>
                            
                            <textarea  className="nav__search" type="text" onChange={this.changeHandler} value={searchCategory} name="searchCategory" placeholder="Search"></textarea>
                            
                            {/* <Link to={'/search'} className="nav__a"> */}
                                <button onClick={() => this.closeMenu()} className="nav__button" type="button" alt="search icon">
                                    <img src={search}/>
                                </button>
                            {/* </Link> */}
                        
                        </form>
                    
                    
                    </Menu>
                    <div className="nav__logo">
                        <Link to={'/topstories'}><img src={logoOrangeBackground} className="nav__logo" alt="app logo"></img></Link>
                    </div>
                
            </nav>
        )
    }
}

export default Nav
