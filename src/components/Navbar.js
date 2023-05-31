import React from 'react';
import '../App.css'

const CustomNavbar = () => {

    return (
        <>
            <div className="menu">
                <nav>
                    <h1 className="menu-bar"><span style={{ color: 'white' }}>Brandon</span> <span style={{ color: 'red' }}>Ray</span></h1>
                    <ul className='navbar-links'>
                        <li><a href="#">Home</a></li>
                        <li><a href="#my-projects">My Projects</a></li>
                        <li><a href="#resume">Resume</a></li>
                        <li><a href="#contact-me">Contact Me</a></li>
                        
                    </ul>
                </nav>
            </div>
        </>
    );
}

export default CustomNavbar;
