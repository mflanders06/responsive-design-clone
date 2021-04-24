import React, {Component} from 'react';
import './Nav.css';

class Nav extends Component{
    constructor(){
        super();
        this.state={
            menuClick: false
        };

    }

    clickHandler = () =>{
        
        this.setState({ menuClick: !this.state.menuClick });
    }

    render(){

        const menuClass = this.state.menuClick ? 'menuOpen' : ""

        return(
            <nav>
                <h2 className="startBootstrap">Start Bootstrap</h2>
                <ul className="navOptions">
                    <li>SERVICES</li>
                    <li>PORTFOLIO</li>
                    <li>ABOUT</li>
                    <li>TEAM</li>
                    <li>CONTACT</li>

                </ul>
                <button className="menuButton">
                    <span>MENU</span>
                    <img
                        className="hamburgerIcon"
                        src="https://www.vhv.rs/dpng/d/388-3884885_hamburger-menu-icon-white-shoreline-city-church-dallas.png"
                        alt="hamburger menu"
                        onClick={this.clickHandler}
                        >
                    </img>
                </button>
                <menu className={menuClass}>
                    <ul className="menuLinks">
                        <li>SERVICES</li>
                        <li>PORTFOLIO</li>
                        <li>ABOUT</li>
                        <li>TEAM</li>
                        <li>CONTACT</li>
                    </ul>
                </menu>
            </nav>
        )
    }
}

export default Nav