import React from 'react';
import '../App.css';
import {NavLink} from 'react-router-dom';

function Navbar() {
    return (
        <div className = "mainnav">
            <div className = "logo">
                <h3>Logo</h3>
            </div>
            <div className = "navbar">
                <ul>
                    <NavLink exact={true} activeClassName='li-active' style={linkStyle} to = "/" >
                        <li >Home</li>
                    </NavLink>
                    <NavLink activeClassName='li-active' style={linkStyle} to="/profile">
                        <li >Profile</li>
                    </NavLink>
                    <NavLink activeClassName='li-active' style={linkStyle} to="/contact">
                        <li>Contact</li>
                    </NavLink>
                </ul>
            </div>
        </div>
    )
}

const linkStyle={
    textDecoration:'none',
}

export default Navbar
