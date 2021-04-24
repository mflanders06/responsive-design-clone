import React, {Component} from 'react';

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
                    <img src="hamburger-menu.jpeg" alt="hamburger menu"></img>
                </button>
            </nav>
        )
    }
}

export default Nav