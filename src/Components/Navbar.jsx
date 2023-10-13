import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import '../index.css?inline';

export default function Navbar() {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    // Function to close the navbar when a link is clicked
    const closeNavbar = () => {
        setIsNavOpen(false);
    };

    const navbarStyle = {
        transition: 'max-height 0.9s ease',
        maxHeight: isNavOpen ? '350px' : '100px',
        overflow: 'hidden',
        paddingRight: '3vw',
        paddingLeft: '3vw',
    };




    return (
        <>
            <div className="navbar sticky-top navbar-expand-lg navbar-light navcus frosted-glass" style={navbarStyle}>
                <div className="container-fluid">
                    <a className="navbar-brand">
                        <img src="./img/logo.png" height="45" alt="" loading="lazy" style={{ backgroundColor: 'transparent' }} />
                    </a>
                    <button className="navbar-toggler" type="button" onClick={toggleNav}>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={`collapse navbar-collapse justify-content-end ${isNavOpen ? 'show' : ''}`} id="navbarNavAltMarkup" >
                        <div className="navbar-nav" >
                            <Link to='/' className="text-secondary fw-bold nav-link active"
                                aria-current="page" onClick={closeNavbar}>
                                Home
                            </Link>
                            <Link to='/app' className="text-secondary fw-bold nav-link active " aria-current="page" onClick={closeNavbar}>
                                App
                            </Link>
                            <Link to='/team' className="text-secondary fw-bold nav-link active link-hover-effect" aria-current="page" onClick={closeNavbar}>
                                Team
                            </Link>
                            <Link to='/blogs' className="text-secondary fw-bold nav-link active link-hover-effect" aria-current="page" onClick={closeNavbar}>
                                Blogs
                            </Link>
                            <Link to='/contact' className="text-secondary fw-bold nav-link active link-hover-effect" aria-current="page" onClick={closeNavbar}>
                                Contact
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}