import React, {Component} from 'react';
import './Nav.css';

class Nav extends Component{
    constructor(){
        super();
        this.state={};
    }

    render(){
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
                        alt="hamburger menu">
                    </img>
                </button>
            </nav>
        )
    }
}

export default Nav