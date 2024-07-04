import React from "react";
import "./Navbar.css";
const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <a href="/">My<span>photography</span></a>
            </div>
            <ul className="navbar-link">
                <li><a href="/home">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/gallery">Gallery</a></li>
                <li><a href="/services">Services</a></li>
                <li><a href="/contact">Contact</a></li>
                <li><a href="/footer">Footer</a></li>                 
                
            </ul>
        </nav>
    )
}
export default Navbar;