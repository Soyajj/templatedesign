import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom';

function Navbar() {
    return (
        <div className = "mainnav">
            <div className = "logo">
                <h3>Logo</h3>
            </div>
            <div className = "navbar">
                <ul>
                    <Link style={linkStyle} to = "/" >
                        <li>Home</li>
                    </Link>
                    <Link style={linkStyle} to="/profile">
                        <li>Profile</li>
                    </Link>
                    <Link style={linkStyle} to="/contact">
                        <li>Contact</li>
                    </Link>
                </ul>
            </div>
        </div>
    )
}

const linkStyle={
    textDecoration:'none',
}

export default Navbar
