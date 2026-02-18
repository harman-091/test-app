import React from "react";
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <a href="" className="navbar-logo">Logo</a>
            </div>
            <div className="navbar-center">
                <ul className="navbar-links">
                    <li><a href="">Home</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Contact</a></li>
                    <li><a href="">Services</a></li>
                </ul>
            </div>
            <div className="navbar-right">
                <a href="" className="cart-icon">
                    <i className="fas fa-shopping-cart"></i>
                    <span className="cart-count">0</span>
                </a>
                <a href="" className="user-icon">
                    <i className="fas fa-user"></i>
                </a>
            </div>
                
        </nav>
    )
    
}

export default Navbar;